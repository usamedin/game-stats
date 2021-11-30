export async function getPlayers(event) {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda 2!')
    }
    return response
}
