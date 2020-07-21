/* global Phaser */
import constants from './constants';

class room1Door1 extends Phaser.Scene {
  constructor() {
    super({ key: 'room1Door1' });
  }

  init(data) {
    this.chickensOn = data.chickens;
    this.complete = {
      room1: data.room1,
      room2: data.room2,

    };
  }

  preload() {
    this.load.image('ground', '../src/images/ground.png');
    this.load.image('floor1', '../src/images/room1_floor1.png');
  }

  create() {
    this.soundOn = this.add.image(450, 50, 'soundOn').setScale(0.3).setVisible(false).setDepth(6);
    this.soundOff = this.add.image(450, 50, 'soundOff').setScale(0.3).setDepth(6);
    this.soundOn.setInteractive();
    this.soundOff.setInteractive();

    this.soundOn.on('pointerup', () => {
      this.soundOn.setVisible(false);
      this.soundOff.setVisible(true);
      window.opening.play();
    });
    this.soundOff.on('pointerup', () => {
      this.soundOff.setVisible(false);
      this.soundOn.setVisible(true);
      window.opening.stop();
    });

    this.hero = this.physics.add.sprite(800, 500, 'hero', 8).setDepth(3).setScale(0.2);
    this.hero.body.setAllowGravity(false);
    this.machine = this.add.sprite(220, 280, 'machine', 0).setDepth(1).setScale(0.6).setDepth(2);
    this.machine.flipX = true;
    this.mainbg = this.add.sprite(460, 300, 'main', 0).setDepth(0).setScale(1);
    this.roombg = this.add.sprite(550, 200, 'room_1bg', 0).setDepth(0).setScale(1.6);
    this.groundLayer = this.physics.add.image(0, 550, 'floor1').setOrigin(0).setDepth(1).setScale(1);
    this.physics.add.collider(this.machine, this.hero);
    this.yes = this.add.image(500, 100, 'yes_button').setDepth(3).setScale(0.7).setVisible(false);
    this.chickensLoaded = 0;
    this.hero.setCollideWorldBounds(true);
    this.groundLayer.setCollideWorldBounds(true);

    this.keyboard = this.input.keyboard.addKeys('W,A,S,D');

    this.physics.world.bounds.width = this.mainbg.width;
    this.physics.world.bounds.height = this.mainbg.height;

    this.keyboard = this.input.keyboard.addKeys('W,A,S,D');

    if (this.chickensOn === true) {
      this.chicken = this.physics.add.sprite(600, 351, 'chicken', 0).setDepth(3).setScale(4);
      this.chickens = this.physics.add.group({ immovable: true });
      this.chickens.add(this.chicken);
      for (let i = 0; i < 5; i += 1) {
        let x = 600;
        let y = 0;
        switch (Phaser.Math.Between(0, 1)) {
          case 0: x = Phaser.Math.Between(400, 650);
            break;
          case 1: y = Phaser.Math.Between(400, this.game.renderer.height);
            break;
          default:
            y = Phaser.Math.Between(400, this.game.renderer.height);
        }
        this.chickens.add(this.physics.add.sprite(x, y, 'chicken', 0).setDepth(3).setScale(4).setCollideWorldBounds(true));
      }
    }
  }

  update() {
    if (this.chickensLoaded > 5) {
      this.yes.setVisible(true);
      this.open = true;
    }
    this.roombg.anims.playReverse('bgroom1', true);

    if (this.chickensOn === true) {
      this.machine.play('on', true);
      for (let i = 0; i < this.chickens.getChildren().length; i += 1) {
        this.physics.accelerateToObject(this.chickens.getChildren()[i], this.machine, 50);
        this.chickens.getChildren()[i].body.setAllowGravity(false).setCollideWorldBounds(true);
        if (this.chickens.getChildren()[i].body.velocity.x > 0) {
          this.chickens.getChildren()[i].play('right_chicken', true);
        }
        if (this.chickens.getChildren()[i].body.velocity.x < 0) {
          this.chickens.getChildren()[i].play('left_chicken', true);
        }
        if (this.chickens.getChildren()[i].x < 350) {
          this.chickens.getChildren()[i].setVisible(false);
          this.chickensLoaded += 1;
        }
      }
    }
    /* this.hero.setScale() */

    if (this.keyboard.D.isDown === true) {
      this.hero.setVelocityX(+constants.hero.speed_room1);
    }

    if (this.keyboard.W.isDown === true) {
      this.hero.setVelocityY(-constants.hero.speed_room1);
    }

    if (this.keyboard.S.isDown === true) {
      this.hero.setVelocityY(+constants.hero.speed_room1);
    }

    if (this.keyboard.A.isDown === true) {
      this.hero.setVelocityX(-constants.hero.speed);
    }
    if (this.keyboard.A.isUp && this.keyboard.D.isUp) { // not moving on X axis
      this.hero.setVelocityX(0);
    }
    if (this.keyboard.W.isUp && this.keyboard.S.isUp) { // not pressing y movement
      this.hero.setVelocityY(0);
    }

    if (this.hero.body.velocity.x > 0) { // moving right
      this.hero.play('right', true);
    } else if (this.hero.body.velocity.x < 0) { // moving left
      this.hero.play('left', true);
    } else if (this.hero.body.velocity.y < 0) { // moving up
      this.hero.play('up', true);
    } else if (this.hero.body.velocity.y > 0) { // moving down
      this.hero.play('down', true);
    }

    if (this.hero.y < 450) {
      this.hero.y = 450;
    }
    if (this.hero.x === 875) {
      if (this.open === true) {
        this.scene.start('room1', {
          open: true,
          x: 990,
          room1: this.complete.room1,
          room2: this.complete.room2,
        });
      } else {
        this.scene.start('room1', {
          x: 990,
          room1: this.complete.room1,
          room2: this.complete.room2,
        });
      }
    }
  }
}
export default room1Door1;