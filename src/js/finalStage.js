/* global Phaser */
const {
  postUserScore,
} = require('./fetchAPI');


class finalStage extends Phaser.Scene {
  constructor() {
    super({ key: 'finalStage' });
  }

  init(data) {
    this.heroLife = data.heroLife;
    if (this.heroLife === 2) {
      this.score = 'UNREASONABLE!!!';
    }
    if (this.heroLife === 1) {
      this.score = 'Reasonable!';
    }
    if (this.heroLife === 0) {
      this.score = 'Tolerable';
    }
  }

  preload() {
    this.anims.create({
      key: 'destroyFinal',
      frameRate: 30,
      frames: this.anims.generateFrameNumbers('destroyWorld', {
        start: 0,
        end: 150,
      }),
      repeat: 0,
    });
  }

  create() {
    window.finalS.play();

    this.destroyWorld = this.add.sprite(480, 300, 'destroyWorld', 0).setScale(5.7);
    this.finalMessage = this.add.image(450, 300, 'finalmessage').setVisible(false).setScale(1.5);
    this.reset = this.add.image(850, 550, 'reset').setScale(0.15);
    this.subitRecord = this.add.image(850, 450, 'submitRecord').setScale(1);

    this.finalAnimation = false;

    this.reset.setInteractive();

    this.reset.on('pointerup', () => {
      window.finalS.stop();
      this.scene.start('menu');
    });
    this.subitRecord.setInteractive();
    this.subitRecord.on('pointerup', () => {
      postUserScore(window.userName, this.score);
      this.time.addEvent({
        delay: 2500,
        callback: () => {
          this.add.text(300, 800, 'Record saved');
        },
        callbackScope: this,
      });
      this.scene.start('scores');
    });
  }

  update() {
    if (this.finalAnimation === false) {
      this.finalAnimation = true;
      this.time.addEvent({
        delay: 2500,
        callback: () => {
          this.destroyWorld.play('destroyFinal', true).on('animationcomplete', () => {
            this.finalMessage.setVisible(true);
          });
        },
        callbackScope: this,
      });
    }
  }
}
export default finalStage;