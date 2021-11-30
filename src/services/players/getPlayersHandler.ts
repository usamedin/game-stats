import { APIGatewayEvent } from 'aws-lambda'
import { sequelize } from '../../models'
import { Player } from '../../models/Player.model'
import { PlayersResponse } from '../../types/ListResponse'
import { getPaginatedRequestParams } from '../../utils/utils'

export async function getPlayers(event: APIGatewayEvent) {
    const { page, pageSize } = getPaginatedRequestParams(event)

    await sequelize.sync()

    try {
        const players = await Player.findAll({
            attributes: ['name', 'id'], // TODO: type possible fields
            offset: pageSize * page,
            limit: pageSize
        })

        const response: PlayersResponse = {
            items: players,
            pageSize: players.length,
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
