import { IRace } from './IRace';
import Race from './Race';

export default class Dwarf extends Race implements IRace {
  private static _instances = 0;
  private _maxLifePoints = 80;

  public static createdRacesInstances() {
    return Dwarf._instances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
