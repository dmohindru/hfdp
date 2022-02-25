import {FlyBehavior} from "./flybehavior";

export class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log("I can't fly");
    }
}