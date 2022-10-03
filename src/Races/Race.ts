import { IRace } from './IRace';

export default abstract class Race implements IRace {
  private _name: string;
  private _dexterity: number;

  public static createdRacesInstances = (): number => {
    throw new Error('Not implemented');
  };

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}
