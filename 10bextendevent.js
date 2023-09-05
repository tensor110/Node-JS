// Extending from EventEmitter
class DrinkMachine{
    serveDrink(size){
        if(size=="large")
            console.log("Serving Complimentary drink")
    }
}
module.exports = DrinkMachine