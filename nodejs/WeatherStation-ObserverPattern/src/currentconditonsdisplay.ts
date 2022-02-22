import {Observer} from "./observer";
import {DisplayElement} from "./displayelement";
import {Subject} from "./subject";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number = 0;
    private humidity: number = 0;
    constructor(private weatherData: Subject) {
        this.weatherData.registerObserver(this);
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature} + F degree and ${this.humidity} % humidity`)
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }

}