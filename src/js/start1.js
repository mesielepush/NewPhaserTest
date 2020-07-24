/* global Phaser */
class start1 extends Phaser.Scene {
  constructor() {
    super({ key: 'start1' });
  }

  preload() {
    this.steps = this.sound.add('steps', {
      loop: true,
      volume: 2,
    });
    window.steps = this.steps;
    this.steps.play();

    this.finalS = this.sound.add('finalSong', {
      loop: true,
      volume: 0.6,
    });
    window.finalS = this.finalS;

    this.boosSound = this.sound.add('boosSound', {
      loop: false,
      volume: 0.6,
    });
    window.boosSound = this.boosSound;

    this.steps.play();
    this.anims.create({
      key: 'left_chicken',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('chicken', {
        start: 3,
        end: 5,
      }),
      repeat: -1,
    });
    this.anims.create({
      key: 'right_chicken',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('chicken', {
        start: 7,
        end: 9,
      }),
      repeat: -1,
    });
    this.anims.create({
      key: 'up_chicken',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('chicken', {
        start: 10,
        end: 12,
      }),
      repeat: -1,
    });
    this.anims.create({
      key: 'left',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('hero', {
        start: 8,
        end: 11,
      }),
      repeat: 0,
    });
    this.anims.create({
      key: 'up',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('hero', {
        start: 12,
        end: 15,
      }),
      repeat: 0,
    });
    this.anims.create({
      key: 'down',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('hero', {
        start: 0,
        end: 3,
      }),
      repeat: 0,
    });
    this.anims.create({
      key: 'right',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('hero', {
        start: 4,
        end: 7,
      }),
      repeat: 0,
    });
    this.anims.create({
      key: 'on',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('machine', {
        start: 0,
        end: 2,
      }),
      repeat: -1,
    });
    this.anims.create({
      key: 'bgroom1',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('room_1bg', {
        start: 0,
        end: 5,
      }),
      repeat: -1,
    });
    this.anims.create({
      key: 'throne_animation',
      frameRate: 12,
      frames: this.anims.generateFrameNumbers('th', {
        start: 0,
        end: 20,
      }),
      repeat: 0,
    });
    this.anims.create({
      key: 'room2back',
      frameRate: 10,
      frames: this.anims.generateFrameNumbers('room2bg', {
        start: 0,
        end: 7,
      }),
      repeat: -1,
    });
    this.anims.create({
      key: 'room2bg1_animation',
      frameRate: 24,
      frames: this.anims.generateFrameNumbers('room2bg1', {
        start: 0,
        end: 60,
      }),
      repeat: -1,
    });
    this.anims.create({
      key: 'catapult_animation',
      frameRate: 10,
      frames: this.anims.generateFrameNumbers('catapult', {
        start: 0,
        end: 14,
      }),
      repeat: 0,
    });
    this.anims.create({
      key: 'catStay_animation',
      frameRate: 3,
      frames: this.anims.generateFrameNumbers('catStay', {
        start: 3,
        end: 5,
      }),
      repeat: -1,
    });

    this.anims.create({
      key: 'catWalk_animation',
      frameRate: 8,
      frames: this.anims.generateFrameNumbers('catWalk', {
        start: 0,
        end: 11,
      }),
      repeat: -1,
    });
  }

  create() {
    this.bg = this.add.sprite(460, 300, 'countryhouse', 0).setDepth(0).setScale(1.7);
    this.hero = this.add.sprite(-150, 380, 'hero', 5).setDepth(3).setScale(0.2);
  }

  update() {
    this.bg.play('country', true);
    this.hero.play('right', true);
    this.hero.x += 3;
    if (this.hero.x >= 1050) {
      this.scene.start('start2');
    }
  }
}
export default start1;