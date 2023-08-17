// Import Export Patterens 
// Pattern 1
// const add = (a,b) =>{
//     return a+b
// }
// module.exports= add;
// Pattern 2 
// module.exports = (a,b) =>{
//     return a+b
// }
// Pattern 3
const add = (a,b) =>{
    return a+b
}
const subtract = (a,b) =>{
    return a-b
}
module.exports={
    add,
    subtract
}