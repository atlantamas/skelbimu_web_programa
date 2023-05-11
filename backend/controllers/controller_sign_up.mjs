import config_users from "../config/config_users.mjs"
import model_users_count from "../models/model_users_count.mjs"
import model_user_create from "../models/model_users_create.mjs"
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
        config_users.regexp_password.test(password) === false)
    {
        return { status: "error", message: "error: password validate failed" }
    }

    // success

    return { status: "success" }
}

const controller_sign_up = async function (req, res)
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
        res.json({ message: error_message })
        return
    }

    //
    // check if username is free
    //

    const result_of_model_users_count = await model_users_count(
        { username: 1 }
    )

    if (result_of_model_users_count.status === "error" )
    {
        const error_message = result_of_validate_inputs.message

        res.statusCode = 400
        res.json({ status: "error", message: error_message })
        return
    }

    // error: username is not free

    if(result_of_model_users_count.count !== 0)
    {
        res.statusCode = 400
        res.json({ message: "error: username is not free" })
        return
    }

    //
    // hash_of_salted_password
    //

    const salt = "labas"
    const salted_password = password + salt
    const hash_of_salted_password = hash_sha256_base64(salted_password)

    //
    // result_of_model_user_create
    //

    const result_of_model_user_create = await model_user_create(username, hash_of_salted_password)

    // error:

    if (result_of_model_user_create.status === "error")
    {
        const error_message = result_of_model_user_create.message
        res.statusCode = 400
        res.json({ message: error_message })
        return
    }

    //
    // success
    //

    res.statusCode = 200
    res.end()
}

export default controller_sign_up