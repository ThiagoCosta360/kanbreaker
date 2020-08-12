var restify = require("restify")

var server = restify.createServer()

server.get("/:name", (req, res, next) => {
    res.send("Hello " + req.params.name)
})

server.listen(4444, () => {
    console.log(`${server.name} listening at ${server.url}`)
})
