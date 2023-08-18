function greet(name){
    console.log(`Hello ${name}`)
}
function greetings(greetfn){
    const name= "Lucky"
    greetfn(name)
}
greetings(greet)