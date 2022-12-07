const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./mock/db/data-cards.json")
const middleware = jsonServer.defaults({
    static: "./build"
})

const port = 3004;
server.use(middleware);
server.use(
    jsonServer.rewriter({
        "/api*": "/$1"
    })
)

server.use(router);
server.listen(port, () => {
    console.log("server is running")
})