
export abstract class Beverage {
    _description = 'Unknown Beverage';

    public get description() {
        return this._description;
    }

    public abstract cost(): number;
}