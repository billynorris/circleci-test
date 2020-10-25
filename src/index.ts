import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda'

const __handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {

    if (event?.queryStringParameters?.message === undefined) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: `Expected property: 'message'`
            })
        }
    }

    var result: object = {
        message: event.queryStringParameters.message
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}

export { __handler, __handler as handler }