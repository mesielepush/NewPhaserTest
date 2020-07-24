/* global Phaser */
const {
  getScoresTable,
} = require('./fetchAPI');

class scores extends Phaser.Scene {
  constructor() {
    super('scores');
  }

  create() {
    this.add.text(50, 30, 'Unreasonable: You did not reason with the demon at all!');
    this.add.text(50, 50, 'Reasonable: You did reason with the demon once');
    this.add.text(50, 70, 'Torelable: You with the demon almost too much');
    this.add.text(50, 90, 'NiceGuy: You died reasoning with the demon');
    this.reset = this.add.image(850, 550, 'reset').setScale(0.15);

    this.reset.on('pointerup', () => {
      window.finalS.stop();
      this.scene.start('menu');
    });


    getScoresTable().then(data => {
      let yu = 150;
      data.scoreResponse.result.forEach((record) => {
        if (!record.user.includes('test')) {
          this.add.text(300, yu += 25, record.user);
          this.add.text(420, yu, record.score);
        }
      });
    });
  }
}
export default scores;
