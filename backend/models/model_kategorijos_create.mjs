import mongodb from "mongodb"
import config_users from "../config/config_users.mjs"

const mongodb_client = new mongodb.MongoClient(config_users.URI)

const model_kategorijos_create = async function (
    param_username,
    param_password)
{

    // document

    const document =
    {
        username: param_username,
        password: param_password,
        role: "user"
    }

    // result_of_insertOne

    var result_of_insertOne

    try
    {
        result_of_insertOne = await mongodb_client
            .db(config_users.datebase)
            .collection(config_users.collection)
            .insertOne(document)
    }
    catch (err)
    {
        mongodb_client.close()

        //error: datebase query failed 

        return { status: "error", message: "error: datebase query failed" }
    }

    //
    // success
    //

    return { status: "success" }
}

export default model_kategorijos_create