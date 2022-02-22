import {FlyBehavior} from "./flybehavior";

export class FlyWithWings implements FlyBehavior {

    fly(): void {
        console.log("I'm flying");
    }
}