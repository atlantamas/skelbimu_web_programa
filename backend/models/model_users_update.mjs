import mongodb from "mongodb"
import config_users from "../config/config_users.mjs"

const mongodb_client = new mongodb.MongoClient(config_users.URI)

const model_users_update = async function (param_query, param_document)
{
    // query

    const query = param_query

    // document

    const document =
    {
        "$set": param_document
    }

    //
    // update document
    //

    var result_of_updateOne

    try
    {
        result_of_updateOne = await mongodb_client
            .db(config_users.datebase)
            .collection(config_users.collection)
            .insertOne(query,document)
    }
    catch
    {
        //error: datebase query failed 

        return { status: "error", message: "error:datebase query failed" }
    }

    // error: matchedCount 0

    if(result_of_updateOne.matchedCount === 0)
    {
        return { status: "error", message: "error: matchedCount 0" }
    }

    //
    // success
    //

    return { status: "success" }
}

export default model_users_update