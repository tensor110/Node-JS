// Extending from EventEmitter
const { EventEmitter } = require("stream")
const PizzaShop = require("./10aextendevent")
const DrinkMachine= require("./10bextendevent")
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine()
pizzaShop.on("order",  (size,topping)=>{
    console.log(`Order received! Baking a ${size} pizza with ${topping}`)
    drinkMachine.serveDrink(size)
})
pizzaShop.order("large", "mushrooms")
pizzaShop.displayOrderNumber()