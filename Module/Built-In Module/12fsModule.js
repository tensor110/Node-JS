const fs = require("node:fs")

// Synchronously reading a file 

// const fileContents = fs.readFileSync("./12fs.txt")
// console.log(fileContents)

const fileContents = fs.readFileSync("./12afs.txt", 'utf-8')
console.log(fileContents)

// Asynchronously reading a file 
fs.readFile("./12afs.txt", "utf-8", (error, data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})


// Synchronously writing a file 
fs.writeFileSync("./12bfs.txt", "Hello world")
// Asynchronously writing a file 
fs.writeFile("./12bfs.txt", "Hello World", {flag: "a"}, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File Written")
    }
})
