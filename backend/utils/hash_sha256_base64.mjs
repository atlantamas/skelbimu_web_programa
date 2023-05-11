import crypto from "crypto"

const hash_sha256_base64 = function (param_string)
{
    const result_of_digest = crypto.createHash("sha256")
        .update(param_string)
        .digest("base64")

    return result_of_digest
}
export default hash_sha256_base64