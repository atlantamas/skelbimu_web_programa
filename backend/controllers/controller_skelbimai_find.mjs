import config_skelbimai from "../config/config_skelbimai.mjs"
import model_skelbimai_find from "../models/model_skelbimai_find.mjs"

const validate_inputs = function (
    param_paieskos_tekstas
)
{

    // error: paieskos_tekstas validation failed

    if (param_paieskos_tekstas === undefined ||
        typeof param_paieskos_tekstas !== "string" ||
        config_skelbimai.regexp_tekstas.test(param_paieskos_tekstas) === false)
    {
        return { status: "error", message: "error: paieskos_tekstas validation failed" }
    }

    // success

    return { status: "success" }
}

const controller_skelbimai_find = async function (req, res)
{
    //

    const paieskos_tekstas = req.query.paieskos_tekstas

    //
    // validate_input
    //

    const result_of_validate_inputs = validate_inputs(paieskos_tekstas)

    // error: 
    if (result_of_validate_inputs.status === " error")
    {
        const error_message = result_of_validate_inputs.message

        req.statusCode = 400
        res.json({ message: error_message })
        return
    }

    //
    // model_skelbimai_find
    //

    const result_of_model_skelbimai_find = await model_skelbimai_find(
        {
            tekstas: {
                "$regex": `${paieskos_tekstas}`,
                "$options": "i"
            }
        },
        { _id: 1, antraste: 1, tekstas: 1, miestas: 1, kaina:1 },
        10,
        0
    )

    // error:

    if (result_of_model_skelbimai_find.status === "error")
    {
        const error_message = result_of_model_skelbimai_find.message

        res.statusCode = 400
        res.json({ status: "error", message: error_message })
        return
    }

    const skelbimai = result_of_model_skelbimai_find.skelbimai

    //
    // success
    //

    res.statusCode = 200
    res.json({ skelbimai: skelbimai })
}

export default controller_skelbimai_find