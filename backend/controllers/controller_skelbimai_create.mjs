import config_skelbimai from "../config/config_skelbimai.mjs"
import model_skelbimai_create from "../models/model_skelbimai_create.mjs"
import model_users_raed from "../models/model_user_read.mjs"

const validate_inputs = function (
    param_antraste,
    param_tekstas,
    param_miestas,
    param_tel_nr,
    param_kaina,
    param_indentification_token
)
{

    // error: antraste validation failed

    if (param_antraste === undefined ||
        typeof param_antraste !== "string" ||
        config_skelbimai.regexp_antraste.test(param_antraste) === false)
    {
        return { status: "error", message: "error: antraste validation failed" }
    }

    // error: tekstas validation failed

    if (param_tekstas === undefined ||
        typeof param_tekstas !== "string" ||
        config_skelbimai.regexp_tekstas.test(param_tekstas) === false)
    {
        return { status: "error", message: "error: tekstas validation failed" }
    }

    // error: miestas validation failed

    if (param_miestas === undefined ||
        typeof param_miestas !== "string" ||
        config_skelbimai.regexp_miestas.test(param_miestas) === false)
    {
        return { status: "error", message: "error: miestas validation failed" }
    }

    // error: tel_nr validation failed

    if (param_tel_nr === undefined ||
        typeof param_tel_nr !== "string" ||
        config_skelbimai.regexp_tel_nr.test(param_tel_nr) === false)
    {
        return { status: "error", message: "error: tel_nr validation failed" }
    }

    // error: kaina validation failed

    if (param_kaina === undefined ||
        typeof param_kaina !== "string" ||
        config_skelbimai.regexp_kaina.test(param_kaina) === false)
    {
        return { status: "error", message: "error: kaina validation failed" }
    }

     // error: indentification_token validation failed

     if (param_indentification_token === undefined )
    {
        return { status: "error", message: "error: indentification_token validation failed" }
    }

    // success

    return { status: "success" }
}

const controller_skelbimai_create = async function (req, res)
{
    //

    const antraste = req.body.antraste

    const tekstas = req.body.tekstas

    const miestas = req.body.miestas

    const tel_nr = req.body.tel_nr

    const kaina = req.body.kaina

    const identification_token = req.cookies.identification_token

    //
    // validate_input
    //

    const result_of_validate_inputs = validate_inputs(
        antraste,
        tekstas,
        miestas,
        tel_nr,
        kaina,
        identification_token
    )

    // error: 

    if (result_of_validate_inputs.status === " error")
    {
        const error_message = result_of_validate_inputs.message

        req.statusCode = 400
        res.json({ message: error_message })
        return
    }

    //
    //  indentification_token --> username
    //

    const result_of_model_users_raed = await model_users_raed(
        { identification_token: identification_token},
        { _id: 0, username: 1 }
    )

    // error:

    if (result_of_model_users_raed.status === "error")
    {
        const error_message = result_of_model_users_raed.message

        res.statusCode = 400
        res.json({ status: "error", message: error_message })
        return
    }

    const username = result_of_model_users_raed.document.username

    //
    // model_skelbimai_create
    //

    const result_of_model_skelbimai_create = await model_skelbimai_create(
        username,
        antraste,
        tekstas,
        miestas,
        tel_nr,
        kaina,
    )

    // error:

    if (result_of_model_skelbimai_create.status === "error")
    {
        const error_message = result_of_model_skelbimai_create.message

        res.statusCode = 400
        res.json({ status: "error", message: error_message })
        return
    }

    //
    // success
    //

    res.statusCode = 200
    res.end()

}

export default controller_skelbimai_create