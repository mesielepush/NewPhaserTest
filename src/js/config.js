/* global Phaser */
import start2 from './start2';
import start1 from './start1';
import start3 from './start3';
import main from './main';
import menu from './menu';
import loading from './loading';
import room1 from './room1';
import room1Door1 from './room1Door1';
import room1Door2 from './room1Door2';
import room2 from './room2';
import room2Passage1 from './room2Passage1';
import room2Passage2 from './room2Passage2';
import room2Passage1Animation from './room2Passage1Animation';
import room2Passage1Done from './room2Passage1Done';
import secondLast from './secondLast';
import secondLastPassage from './secondLastPassage';
import darkTunel from './darkTunel';
import finalStage from './finalStage';

const config = () => {
  const config = {
    type: Phaser.AUTO,
    width: 920,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 800 },
      },
    },
    scene: [loading, menu, start1, start2,
      start3, main, room1, room2, room1Door1, room1Door2,
      secondLast, room2Passage1, room2Passage2,
      room2Passage1Animation, room2Passage1Done,
      secondLastPassage, darkTunel, finalStage],
  };
  // eslint-disable-next-line
  const game = new Phaser.Game(config);
};

export default config;
