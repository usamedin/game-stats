import { APIGatewayEvent } from "aws-lambda"

export function getPaginatedRequestParams(event: APIGatewayEvent) {
    let { page, pageSize } = event?.queryStringParameters as any || {}

    if (!page)
        page = 0
    else
        page = parseInt(page, 10)

    if (!pageSize)
        pageSize = 10
    else {
        pageSize = parseInt(pageSize, 10)
        if (pageSize > 10) {
            pageSize = 10
        }
    }

    return {
        page, pageSize
    }
}
