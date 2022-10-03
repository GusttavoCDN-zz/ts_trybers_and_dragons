import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;
  private _defense: number;

  static setPoints = (): number => Math.floor(Math.random() * 10) + 1;

  constructor(name: string) {
    this._name = name;
    this._dexterity = Character.setPoints();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._defense = Character.setPoints();
    this._strength = Character.setPoints();
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.setPoints(),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const energy = { ...this._energy };
    return energy;
  }

  public receiveDamage = (attackPoints: number): number => {
    const damage = attackPoints - this.defense;
    if (damage <= 0) return this.lifePoints;

    const lifePoints = this.lifePoints - damage;

    if (lifePoints <= 0) this._lifePoints = -1;
    else this._lifePoints = lifePoints;

    return this.lifePoints;
  };

  public attack = (enemy: SimpleFighter): void => {
    const damage = this._strength;
    enemy.receiveDamage(damage);
  };

  public levelUp = (): void => {
    this._maxLifePoints = this.levelUpMaxPoints(this._maxLifePoints);
    this._strength += Character.setPoints();
    this._defense += Character.setPoints();
    this._dexterity += Character.setPoints();
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  };

  private levelUpMaxPoints = (lifePoints: number): number => {
    const newLifePoints = Character.setPoints() + lifePoints;
    if (newLifePoints > this.race.maxLifePoints) return this.race.maxLifePoints;
    return newLifePoints;
  };
}
