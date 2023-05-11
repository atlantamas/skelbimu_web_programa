import express from "express"
import cookieParser from "cookie-parser"
import controller_sign_up from "./controllers/controller_sign_up.mjs"
import controller_sign_in from "./controllers/controller_sign_in.mjs"
import controller_sign_out from "./controllers/controller_sign_out.mjs"
import controller_skelbimai_create from "./controllers/controller_skelbimai_create.mjs"
import controller_skelbimai_find from "./controllers/controller_skelbimai_find.mjs"

const express_1 = express()

// middleware


const moddleWare_static = express.static("../frontend/public")
express_1.use(moddleWare_static)

const midleware_parse_json = express.json({limit: "4mb"})
express_1.use(midleware_parse_json)

const midlleware_parse_cookies = cookieParser()
express_1.use(midlleware_parse_cookies)


// endpoints

express_1.post("/api/sign_up", controller_sign_up)
express_1.post("/api/sign_in", controller_sign_in)
express_1.get("/api/sign_out", controller_sign_out)
express_1.post("/api/skelbimai/", controller_skelbimai_create)
express_1.get("/api/skelbimai/", controller_skelbimai_find)

//

var port = process.env.PORT || 80

express_1.listen(port)