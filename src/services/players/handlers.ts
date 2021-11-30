import { APIGatewayEvent } from 'aws-lambda'
import { sequelize } from '../../models'
import { Player } from '../../models/Player.model'
import { PlayersResponse } from '../../types/ListResponse'

export async function getPlayers(event: APIGatewayEvent) {
    const { page, pageSize } = event.queryStringParameters as any
    await sequelize.sync()

    try {
        const players = await Player.findAll({ attributes: ['name', 'id'] })

        const response: PlayersResponse = {
            items: players,
            size: players.length
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
