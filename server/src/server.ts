import * as restify from "restify"
import ItemController from "./controllers/ItemsController"

const server = restify.createServer()
const itemController = new ItemController()

const db = require("./db/connection")

const port = process.env.PORT || 8080

server.get("/items", itemController.list)

server.listen(port, () => {
    console.log(`${server.name} listening at ${server.url}`)
})
