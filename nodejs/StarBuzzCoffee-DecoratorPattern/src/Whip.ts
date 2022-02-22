import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "./Beverage";

export class Whip extends CondimentDecorator {
    constructor(private beverage: Beverage) {
        super();
    }

    public get description() {
        return this.beverage.description + ', Whip';
    }

    cost(): number {
        return 0.10 + this.beverage.cost();
    }


}