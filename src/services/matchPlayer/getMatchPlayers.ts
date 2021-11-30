import { APIGatewayEvent } from 'aws-lambda'
import { sequelize } from '../../models'
import { MatchPlayer } from '../../models/MatchPlayer.model'
import { MatchPlayersResponse } from '../../types/ListResponse'
import { getPaginatedRequestParams } from '../../utils/utils'

export async function getMatchPlayers(event: APIGatewayEvent) {
    const { page, pageSize } = getPaginatedRequestParams(event)

    await sequelize.sync()

    try {
        const matchPlayers = await MatchPlayer.findAll({
            offset: pageSize * page,
            limit: pageSize
        })

        const response: MatchPlayersResponse = {
            items: matchPlayers,
            pageSize: matchPlayers.length,
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
