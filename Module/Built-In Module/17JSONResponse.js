const http = require("node:http")

const server = http.createServer((req, res)=>{

    const SuperHero = {
        name: "Bruce",
        age: 30
    }

    res.writeHead(200,{
        'Content-Type': "application/json"
    })
    res.end(JSON.stringify(SuperHero))
})

server.listen(3000, ()=>{
    console.log("Server running on Port 3000")
})