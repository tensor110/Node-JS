const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res)=>{
    res.writeHead(200,{
        'Content-Type': "text/html"
    })
    // const html = fs.readFileSync("./18HTMLResponse.html", "utf-8")
    // res.end(html)
    fs.createReadStream(__dirname + "/18HTMLResponse.html").pipe(res)
})

server.listen(3000, ()=>{
    console.log("Server running on Port 3000")
})