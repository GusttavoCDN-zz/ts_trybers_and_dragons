import { IRace } from './IRace';
import Race from './Race';

export default class Halfling extends Race implements IRace {
  private static _instances = 0;
  private _maxLifePoints = 60;

  public static createdRacesInstances() {
    return Halfling._instances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
