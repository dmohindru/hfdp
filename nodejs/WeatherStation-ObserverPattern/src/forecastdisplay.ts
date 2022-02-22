import {Subject} from "./subject";
import {Observer} from "./observer";
import {DisplayElement} from "./displayelement";

export class ForeCastDisplay implements Observer, DisplayElement{
    private currentPressure: number = 29.29;
    private lastPressure: number = 0;

    constructor(private weatherData: Subject) {
        this.weatherData.registerObserver(this);
    }

    display(): void {
        console.log('Forecast: ')
        if (this.currentPressure > this.lastPressure) {
            console.log('Improving weather on the way!');
        } else if (this.currentPressure == this.lastPressure) {
            console.log('More of the same');
        } else if (this.currentPressure < this.lastPressure) {
            console.log('Watch out for cooler, rainy weather');
        }
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;
        this.display();
    }
}