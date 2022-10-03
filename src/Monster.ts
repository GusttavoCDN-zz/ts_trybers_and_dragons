import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints = 85;
  private _strength = 63;

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  public attack(enemy: SimpleFighter): void {
    const damage = this.strength;
    enemy.receiveDamage(damage);
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.lifePoints;
    if (damage <= 0) return this.lifePoints;

    const lifePoints = damage - this.lifePoints;

    if (lifePoints <= 0) this._lifePoints = -1;
    else this._lifePoints = lifePoints;

    return this.lifePoints;
  }
}
