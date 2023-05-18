import mongodb from "mongodb"
import config_skelbimai from "../config/config_skelbimai.mjs"
import config_users from "../config/config_users.mjs"

const mongodb_client = new mongodb.MongoClient(config_users.URI)

const model_skelbimai_find = async function (
    param_query,
    param_projection,
    param_limit,
    param_skip)
{
    // query

    const query = param_query

    // options

    const options =
    {
        projection: param_projection,
        limit: param_limit,
        skip: param_skip
    }

    //
    // find document
    //

    var result_of_find

    try
    {
        result_of_find = await mongodb_client
            .db(config_skelbimai.datebase)
            .collection(config_skelbimai.collection)
            .find(query, options)
            .toArray()
    }
    catch (err)
    {
        //error: datebase query failed 

        return { status: "error", message: "error: datebase query failed" }
    }

    const skelbimai = result_of_find

    //
    // success
    //

    return { status: "success", skelbimai: skelbimai }
}

export default model_skelbimai_find