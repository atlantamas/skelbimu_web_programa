import model_users_update from "../models/model_users_update.mjs"
import model_users_raed from "../models/model_user_read.mjs"

const validate_inputs = function (param_indentification_token)
{
    // error: indentification_idvalidate failed

    if (param_indentification_token === undefined ||
        typeof param_indentification_token !== "string" ||
        param_indentification_token === ""
    )
    {
        return { status: "error", message: "error: indentification_token validate failed" }
    }

    // success

    return { status: "success" }
}

const controller_sign_out = async function (req, res)
{
    //
    // result_of_validate_inputs
    //

    const indentification_token = req.cookies.indentification_token

    const result_of_validate_inputs = validate_inputs(indentification_token)

    // error: password invalid

    if (result_of_validate_inputs.status === "error")
    {
        const error_message = result_of_validate_inputs.message

        res.statusCode = 400
        res.json({ status: "error", message: error_message })
        return
    }

    //
    // resolve username indentification_token --> username
    //

    const result_of_model_users_raed = await model_users_raed(
        { indentification_token: indentification_token },
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
    // set indentification_token to "" 
    //

    const result_of_model_users_update = model_users_update(
        { username: username },
        { indentification_token: "" }
    )

    // error:

    if (result_of_model_users_update.status === "error")
    {
        const error_message = result_of_model_users_update.message

        res.statusCode = 400
        res.json({ status: "error", message: error_message })
        return
    }

    //
    // success
    //

    res.cookie("indentification_token", indentification_token, { httpOnly: true, maxAge: 0 })

    res.statusCode = 200
    res.end()
}

export default controller_sign_out