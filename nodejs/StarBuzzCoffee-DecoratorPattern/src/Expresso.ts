import {Beverage} from "./Beverage";

export class Espresso extends Beverage {

    constructor() {
        super();
        this._description = 'Espresso'
    }

    cost(): number {
        return 1.99;
    }
}