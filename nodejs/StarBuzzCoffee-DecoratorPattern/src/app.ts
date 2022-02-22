import {Beverage} from "./Beverage";
import {Espresso} from "./Expresso";
import {DarkRoast} from "./DarkRoast";
import {Mocha} from "./Mocha";
import {Whip} from "./Whip";
import {HouseBlend} from "./HouseBlend";
import {Soy} from "./Soy";

console.log('star buzz application');

const beverage = new Espresso();
console.log(`${beverage.description} $${beverage.cost()}`);

let beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(`${beverage2.description} $${beverage2.cost()}`);

let beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(`${beverage3.description} $${beverage3.cost()}`);