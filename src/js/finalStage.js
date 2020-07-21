/* global Phaser */
class finalStage extends Phaser.Scene {
  constructor() {
    super({ key: 'finalStage' });
  }

  init(data) {
    this.complete = {
      room1: data.room1,
      room2: data.room2,
    };
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
    this.finalAnimation = false;

    this.reset.setInteractive();
    this.reset.on('pointerup', () => {
      window.finalS.stop();
      this.scene.start('menu');
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