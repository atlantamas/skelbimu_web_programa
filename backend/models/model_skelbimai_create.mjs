import mongodb from "mongodb"
import config_skelbimai from "../config/config_skelbimai.mjs"
import config_users from "../config/config_users.mjs"

const mongodb_client = new mongodb.MongoClient(config_users.URI)

const model_skelbimai_create = async function (
    param_author,
    param_antraste, 
    param_tekstas, 
    param_miestas, 
    param_tel_nr, 
    param_kaina)
{
    //
    // create new document
    //

    const document = {
        author:param_author,
        antraste: param_antraste,
        tekstas: param_tekstas,
        miestas: param_miestas,
        tel_nr: param_tel_nr,
        kaina: param_kaina
    }

    var result_of_insertOne

    try
    {
        result_of_insertOne = await mongodb_client
            .db(config_skelbimai.datebase)
            .collection(config_skelbimai.collection)
            .insertOne(document)
    }
    catch (err)
    {

        //error: datebase query failed 

        return { status: "error", message: "error: datebase query failed" }
    }

    //
    // success
    //

    return { status: "success" }
}

export default model_skelbimai_create