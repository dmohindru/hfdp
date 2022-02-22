import {Beverage} from "./Beverage";

export class Decaf extends Beverage {
    constructor() {
        super();
        this._description = "Decaf Coffee";
    }

    cost(): number {
        return 1.05;
    }

}