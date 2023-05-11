import mongodb from "mongodb"
import config_users from "../config/config_users.mjs"

const mongodb_client = new mongodb.MongoClient(config_users.URI)

const model_users_count = async function (param_query, param_limit)
{
    // query

    const query = param_query
  
    // options

    const options =
    {
        limit: param_limit
    }

    //
    // find document
    //

    var result_of_countDocuments

    try
    {
        result_of_countDocuments = await mongodb_client
            .db(config_users.datebase)
            .collection(config_users.collection)
            .countDocuments(query,options)
            
    }
    catch (err)
    {
        //error: datebase query failed 

        return { status: "error", message: "error:datebase query failed" }
    }

    //
    // success
    //

    return { status: "success", count: result_of_countDocuments }

}

export default model_users_count