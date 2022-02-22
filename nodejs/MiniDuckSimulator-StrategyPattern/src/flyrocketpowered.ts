import {FlyBehavior} from "./flybehavior";

export class FlyRocketPowered implements FlyBehavior {
    fly(): void {
        console.log("I'm flying with a rocket!");
    }

}