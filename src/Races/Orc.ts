import { IRace } from './IRace';
import Race from './Race';

export default class Orc extends Race implements IRace {
  private static _instances = 0;
  private _maxLifePoints = 74;

  public static createdRacesInstances() {
    return Orc._instances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
