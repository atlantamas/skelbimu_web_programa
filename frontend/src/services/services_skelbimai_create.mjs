const services_skelbimai_create = async function (param_antraste, param_skelbimo_tekstas, param_miestas, param_tel_nr, param_kaina)
{
    // method

    const request_method = "POST"

    // URI

    const request_URI = "/api/skelbimai/"

    // request_headers

    const request_headers =
    {
        "Content-type": "application/json"
    }

    // request_body

    const request_body =
    {
        antraste: param_antraste,
        skelbimo_tekstas: param_skelbimo_tekstas,
        miestas: param_miestas,
        tel_nr: param_tel_nr,
        kaina: param_kaina
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
export default services_skelbimai_create