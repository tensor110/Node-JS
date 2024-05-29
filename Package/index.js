// To create package.json -> npm init
// To create package.json automatically -> npm init --yes

import { upperCase } from "upper-case";
function welcome(name){
    console.log(upperCase(`Welcome ${name}`))
}
welcome("Ram")