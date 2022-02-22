import {Observer} from "./observer";
import {DisplayElement} from "./displayelement";
import {Subject} from "./subject";

export class StatisticsDisplay implements Observer, DisplayElement {

    private maxTemp: number = 0;
    private minTemp: number = 200;
    private tempSum: number = 0;
    private numReadings: number = 0;

    constructor(private weatherData: Subject) {
        this.weatherData.registerObserver(this);
    }
    display(): void {
        console.log(`Avg/Max/Min temperature = ${this.tempSum/this.numReadings} / ${this.maxTemp} / ${this.minTemp}`);
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.tempSum += temp;
        this.numReadings++;
        if (temp > this.maxTemp) {
            this.maxTemp = temp;
        }

        if (temp < this.minTemp) {
            this.minTemp = temp;
        }
        this.display();
    }

}