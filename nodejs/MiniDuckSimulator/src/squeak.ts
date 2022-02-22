import {QuackBehavior} from "./quackbehavior";

export class Squeak implements QuackBehavior {

    quack(): void {
        console.log('Squeak');
    }
}