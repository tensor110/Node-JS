const fs = require("fs");

const readableStream = fs.createReadStream("./12afs.txt", {
  encoding: "utf8",
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("./15pipe.txt");

readableStream.pipe(writeableStream)