import {Duck} from "./duck";
import {FlyNoWay} from "./flynoway";
import {Quack} from "./quack";

export class ModelDuck extends Duck {
    constructor() {
        super(new FlyNoWay(), new Quack());
    }

    display(): void {
        console.log("I'm a model duck");
    }

}