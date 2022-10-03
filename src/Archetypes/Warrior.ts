import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'stamina';

  public static createdArchetypeInstances = (): number => Warrior._instances;

  constructor(name: string) {
    super(name);
    Warrior._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
