import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instances = 0;
  private _energyType: EnergyType = 'mana';

  public static createdArchetypeInstances = (): number => Mage._instances;

  constructor(name: string) {
    super(name);
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
