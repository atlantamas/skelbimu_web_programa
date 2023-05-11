const service_sign_up = async function (param_username, param_password)
{

    // method

    const request_method = "POST"

    // URI

    const request_URI = "/api/sign_up"

    // request_headers

    const request_headers =
    {
        "Content-type": "application/json"
    }

    // request_body

    const request_body =
    {
        username: param_username,
        password: param_password
    }

    // fetch

    const result_of_fetch = await fetch(
        request_URI,
        {
            method: request_method,
            headers: request_headers,
            body: JSON.stringify(request_body)
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

export default service_sign_up