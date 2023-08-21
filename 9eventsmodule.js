// Events Module 
const EventEmmiter = require("node:events") 
const emitter = new EventEmmiter()
emitter.on("order-pizza",(size, topping)=>{
    console.log(`Order received! Baking a ${size} pizza with ${topping}`)
})
emitter.on("order-pizza",(size)=>{
    if(size==="Large"){
        console.log("Serving Complimentary drinks")
    }
})
emitter.emit("order-pizza", "Large", "Mushrooms")