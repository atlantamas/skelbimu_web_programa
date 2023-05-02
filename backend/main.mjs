import express from  "express"

const express_1 = express()

// middleware

express_1.use(express.static("../frontend/public"))

// endpoints

//

var port = process.env.PORT || 80

express_1.listen(port)