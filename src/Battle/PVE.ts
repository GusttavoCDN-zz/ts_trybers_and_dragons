import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  public fight = (): number => {
    let playerLifePoints = this._player.lifePoints;
    let monstersLifePoints = this._monsters.reduce(
      (acc, monster) => acc + monster.lifePoints,
      0,
    );

    while (playerLifePoints > 0 && monstersLifePoints > 0) {
      this.playerAttack();
      this.monsterAttack();

      playerLifePoints = this._player.lifePoints;
      monstersLifePoints = this._monsters.reduce(
        (acc, monster) => acc + monster.lifePoints,
        0,
      );
    }

    return playerLifePoints > 0 ? 1 : -1;
  };

  private playerAttack = (): void => {
    for (let i = 0; i < this._monsters.length; i += 1) {
      this._player.attack(this._monsters[i]);
    }
  };

  private catchMonsterToAttack = (): SimpleFighter => {
    const aliveMonsters = this._monsters.filter((monster) => 
      monster.lifePoints > 0);

    const randomIndex = Math.floor(Math.random() * aliveMonsters.length);

    return aliveMonsters[randomIndex];
  };

  private monsterAttack = (): void => {
    const monster = this.catchMonsterToAttack();
    
    if (!monster) return;
    
    monster.attack(this._player);
  };
}
