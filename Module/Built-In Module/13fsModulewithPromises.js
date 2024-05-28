const fs = require("node:fs/promises");

fs.readFile("./12afs.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


// readFile with async-await 
async function readFile(){
    try{
        const data = await fs.readFile("./12afs.txt", "utf-8")
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
readFile()