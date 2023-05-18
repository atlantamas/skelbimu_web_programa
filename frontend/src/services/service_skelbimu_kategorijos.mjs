const service_skelbimu_kategorijos = async function ()
{
    // method

    const request_method = "POST"

    // URI

    const request_URI = "/api/kategorijos/"

    // request_headers

    const request_headers =
    {
        "Content-type": "application/json"
    }

    // request_body

    const request_body =
    {
       
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
export default service_skelbimu_kategorijos