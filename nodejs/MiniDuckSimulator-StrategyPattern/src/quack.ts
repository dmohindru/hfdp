import {QuackBehavior} from "./quackbehavior";

export class Quack implements QuackBehavior {
    quack(): void {
        console.log('Quack');
    }

}