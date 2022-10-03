import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';

// players
const player1 = new Character('Gustavo');
const player2 = new Character('Nicolly');
const player3 = new Character('Larissa');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();

// Monsters
const monster1 = new Monster();
const monster2 = new Monster();

// PVP
const pvp = new PVP(player2, player3);

// PVE
const pve = new PVE(player1, [monster1, monster2]);

// Game

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
