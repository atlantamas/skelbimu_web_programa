import config_users from "../config/config_users.mjs"
import model_users_raed from "../models/model_user_read.mjs"
import generate_random_string from "../utils/generate_random_string.mjs"
import hash_sha256_base64 from "../utils/hash_sha256_base64.mjs"

const validate_inputs = function (param_username, param_password)
{
    //

    const username = param_username

    const password = param_password

    // error: username validate failed

    if (username === undefined ||
        typeof username !== "string" ||
        config_users.regexp_username.test(username) === false)
    {
        return { status: "error", message: "error: username validate failed" }
    }

    // error: password validate failed

    if (password === undefined ||
        typeof password !== "string" ||
        config_users.regexp_password.test(password)===false)
    {
        return { status: "error", message: "error: password validate failed" }
    }

    // success

    return { status: "success" }
}

const controller_sign_in = async function (req, res)
{
    //
    // result_of_validate_inputs
    //

    const username = req.body.username

    const password = req.body.password

    const result_of_validate_inputs = validate_inputs(username, password)

    // error: password invalid

    if (result_of_validate_inputs.status === "error")
    {
        const error_message = result_of_validate_inputs.message

        res.statusCode = 400
        res.json({ status: "error", message: error_message })
        return
    }

    //
    // hash_of_salted_password
    //

    const salt = "labas"
    const salted_password = password + salt
    const hash_of_salted_password = hash_sha256_base64(salted_password)

    //
    // check if hash_of_salted_password 
    //

    const result_of_model_users_raed = await model_users_raed(
        { username: username },
        { _id: 0, password: 1 }
    )

    // error:

    if (result_of_model_users_raed.status === "error")
    {
        const error_message = result_of_validate_inputs.message

        res.statusCode = 400
        res.json({ status: "error", message: error_message })
        return

    }

    const password_in_db = result_of_model_users_raed.document.password

    // error: wrong password

    if (hash_of_salted_password !== password_in_db)
    {

        res.statusCode = 400
        res.json({ status: "error", message: "error: wrong password" })
        return

    }

    //
    // generate indetification_token
    //

    const indetification_token = generate_random_string(1024)

    //
    // success
    //

    res.cookie("indentification_token", indetification_token, { httpOnly: true })

    res.statusCode = 200
    res.end()

}

export default controller_sign_in