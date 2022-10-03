import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  public fight = (): number => {
    let player1LifePoints = this._player.lifePoints;
    let player2LifePoints = this._player2.lifePoints;

    while (player1LifePoints > 0 && player2LifePoints > 0) {
      this._player.attack(this._player2);
      this._player2.attack(this._player);

      player1LifePoints = this._player.lifePoints;
      player2LifePoints = this._player2.lifePoints;
    }

    return player1LifePoints > 0 ? 1 : -1;
  };
}
