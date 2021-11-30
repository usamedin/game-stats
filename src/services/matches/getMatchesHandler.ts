import { APIGatewayEvent } from 'aws-lambda'
import { sequelize } from '../../models'
import { Match } from '../../models/Match.model'
import { MatchesResponse } from '../../types/ListResponse'
import { getPaginatedRequestParams } from '../../utils/utils'

export async function getMatches(event: APIGatewayEvent) {
    const { page, pageSize } = getPaginatedRequestParams(event)

    await sequelize.sync()

    try {
        const matches = await Match.findAll({
            offset: pageSize * (page - 1),
            limit: pageSize
        })

        const response: MatchesResponse = {
            items: matches,
            pageSize: matches.length,
            page
        }

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        }
    } catch (error) {
        console.error(error)

        return {
            statusCode: 500,
            body: 'Internal server error'
        }
    }
}
