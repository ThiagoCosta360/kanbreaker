import * as restify from "restify"
const server = restify.createServer()

import ItemController from "./controllers/ItemsController"
const itemController = new ItemController()

const db = require("./db/connection")

const port = 9000

const check = (
    req: restify.Request,
    res: restify.Response,
    next: restify.Next
) => {
    res.send("I'm working")
}

server.use(restify.plugins.bodyParser())

server.get("/", check)
server.get("/items", itemController.list)
server.post("/items", itemController.create)

server.listen(port, () => {
    console.log(`${server.name} listening at ${server.url}`)
})
