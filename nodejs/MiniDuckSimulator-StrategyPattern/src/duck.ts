import {FlyBehavior} from "./flybehavior";
import {QuackBehavior} from "./quackbehavior";

export abstract class Duck {
    constructor(protected _flyBehavior: FlyBehavior, protected _quackBehavior: QuackBehavior) {
    }

    abstract display(): void;

    performFly(): void {
        this._flyBehavior.fly();
    }

    performQuack(): void {
        this._quackBehavior.quack();
    }

    set flyBehavior(fb: FlyBehavior) {
        this._flyBehavior = fb;
    }

    set quackBehavior(qb: QuackBehavior) {
        this._quackBehavior = qb;
    }

    swim(): void {
        console.log("All ducks float, even decoys!");
    }
}