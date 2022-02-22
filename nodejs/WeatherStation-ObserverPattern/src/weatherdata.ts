import {Subject} from "./subject";
import {Observer} from "./observer";

export class WeatherData implements Subject {

    private temperature: number = 0.0;
    private humidity: number = 0.0;
    private pressure: number = 0.0;
    private observers: Observer[] = [];

    public constructor() {
    }

    notifyObservers(): void {
        this.observers.forEach(o => {
            o.update(this.temperature, this.humidity, this.pressure);
        })
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {
        const index = this.observers.indexOf(o, 0);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    measurementsChanged(): void {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) : void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();

    }

}