import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "./Beverage";

export class Soy extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super();
    }

    public get description() {
        return this.beverage.description + ', Mocha';
    }

    cost(): number {
        return 0.15 + this.beverage.cost();
    }


}