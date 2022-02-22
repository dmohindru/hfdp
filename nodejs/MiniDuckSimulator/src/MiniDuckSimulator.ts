import {Duck} from "./duck";
import {MallardDuck} from "./mallardduck";
import {ModelDuck} from "./modelduck";
import {FlyRocketPowered} from "./flyrocketpowered";

 const duck: Duck = new MallardDuck();
 duck.performQuack();
 duck.performFly();

 const model = new ModelDuck();
 model.performFly();
 model.flyBehavior = new FlyRocketPowered();
 model.performFly();
