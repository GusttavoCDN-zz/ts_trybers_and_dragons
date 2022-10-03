import { IRace } from './IRace';
import Race from './Race';

export default class Elf extends Race implements IRace {
  private static _instances = 0;
  private _maxLifePoints = 99;

  public static createdRacesInstances() {
    return Elf._instances;
  }

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
