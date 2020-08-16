import * as restify from "restify"
import * as corsMiddleware from "restify-cors-middleware"
const server = restify.createServer()

import ItemController from "./controllers/ItemsController"
const itemController = new ItemController()

//TODO: this need to be loaded without require
const db = require("./db/connection")

const port = 4000

// Cors config
const corsOptions: corsMiddleware.Options = corsMiddleware({
    preflightMaxAge: 10,
    origins: ["*"],
    allowHeaders: ["authorization"],
    exposeHeaders: ["x-custom-header"],
})

const check = (
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
) => {
    res.send("I'm working now")
}

// server.pre(corsOptions.preflight)
server.use(corsOptions.actual)
server.use(restify.plugins.bodyParser())

server.get("/", check)
server.get("/items", itemController.list)
server.post("/items", itemController.create)

server.listen(port, () => {
    console.log(`${server.name} listening at ${server.url}`)
})
