var restify = require("restify")

var server = restify.createServer()

const port = process.env.PORT || 8080

server.get("/:name", (req, res, next) => {
    res.send("Hello " + req.params.name)
})

server.listen(port, () => {
    console.log(`${server.name} listening at ${server.url}`)
})
