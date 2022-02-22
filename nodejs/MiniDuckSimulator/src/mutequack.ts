import {QuackBehavior} from "./quackbehavior";

export class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log('<<Silence>>');
    }

}