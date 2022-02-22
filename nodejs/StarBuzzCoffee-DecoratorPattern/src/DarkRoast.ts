import {Beverage} from "./Beverage";

export class DarkRoast extends Beverage {

    constructor() {
        super();
        this._description = 'Dark Roast Coffee';
    }

    cost(): number {
        return 0.99;
    }

}