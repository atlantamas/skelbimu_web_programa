const service_sign_out = async function (param_username, param_password)
{
    // method

    const request_method = "GET"

    // URI

    const request_URI = "/api/sign_out"

    // fetch

    const result_of_fetch = await fetch(
        request_URI,
        {
            method: request_method,
        })

    // error:invalid status code

    if (result_of_fetch.status !== 200 &&
        result_of_fetch.status !== 400)
    {
        return { status: "error", message: " error:invalid status code" }
    }

    // error:

    if (result_of_fetch.status === 400)
    {
        // response_body

        const response_body = await result_of_fetch.json()

        const error_message = response_body.message

        return { status: "error", message: error_message }
    }

    // success

    return { status: "success" }
}


export default service_sign_out