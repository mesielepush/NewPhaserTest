import constants from './constants';

class menu extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  create() {
    this.bg = this.add.sprite(460, 300, 'countryhouse', 0).setDepth(0).setScale(1.7);
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.35, 'logo').setDepth(1).setScale(0.5);
    const playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.85, 'start').setScale(0.5).setDepth(1);

    this.hoverSprite = this.add.sprite(playButton.x + 280, playButton.y, 'second').setScale(1.2).setDepth(2);
    this.hoverSprite.setVisible(false);

    this.opening = this.sound.add('opening', {
      loop: true,
      volume: 0.3,
    });

    window.opening = this.opening;
    this.opening.play();

    this.anims.create({
      key: 'country',
      frameRate: 24,
      frames: this.anims.generateFrameNumbers('countryhouse', {
        start: 0,
        end: 79,
      }),
    });
    this.anims.create({
      key: 'down_second',
      frameRate: 5,
      frames: this.anims.generateFrameNumbers('second', {
        start: 0,
        end: 9,
      }),

    });


    playButton.setInteractive();
    playButton.on('pointerover', () => {
      this.hoverSprite.setVisible(true);
    });
    playButton.on('pointerout', () => {
      this.hoverSprite.setVisible(false);
    });
    playButton.on('pointerup', () => {
      this.hoverSprite.play('down_second').on('animationcomplete', () => {
        this.scene.start('start1');
      });
    });
  }

  update() {
    this.bg.play('country', true);
  }
}
export default menu;