import {Beverage} from "./Beverage";

export class HouseBlend extends Beverage {
    constructor() {
        super();
        this._description = 'House Blend Coffee';
    }

    cost(): number {
        return 0.89;
    }

}