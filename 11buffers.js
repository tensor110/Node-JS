// Buffers 
const buffer = new Buffer.from("Lucky")
console.log(buffer)
console.log(buffer.toJSON())

buffer.write("Maheswar")
console.log(buffer.toJSON())