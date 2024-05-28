const fs = require("fs");

const readableStream = fs.createReadStream("./12afs.txt", {
  encoding: "utf8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./14stream.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});