const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res)=>{
    const name = "Lucky"
    res.writeHead(200,{
        'Content-Type': "text/html"
    })
    let html = fs.readFileSync("./19HTMLTemplate.html", "utf-8")
    html = html.replace("{{name}}", name)
    res.end(html)
})

server.listen(3001, ()=>{
    console.log("Server running on Port 3001")
})