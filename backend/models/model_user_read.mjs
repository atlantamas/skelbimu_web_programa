import mongodb from "mongodb"
import config_users from "../config/config_users.mjs"

const mongodb_client = new mongodb.MongoClient(config_users.URI)

const model_users_raed = async function (param_query, param_projection)
{
    // query

    const query = param_query

    // options

    const options =
    {
        projection: param_projection
    }

    //
    // find document
    //

    var result_of_findOne

    try
    {
        result_of_findOne = await mongodb_client
            .db(config_users.datebase)
            .collection(config_users.collection)
            .findOne(query, options)
    }
    catch (err)
    {
        //error: datebase query failed 

        return { status: "error", message: "error:datebase query failed" }
    }

    // error: document does not exists

    if (result_of_findOne === null)
    {
        return { status: "error", message: "error:document does not exists" }
    }

    //
    // success
    //

    return { status: "success", document: result_of_findOne }
}

export default model_users_raed