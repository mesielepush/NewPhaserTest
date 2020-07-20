import constants from './constants';
import newfunct from './new';

class secondLast extends Phaser.Scene {
  constructor() {
    super({ key: 'secondLast' });
  }

  init(data) {
    this.complete = {
      room1: data.room1,
      room2: data.room2,
    };
  }

  preload() {


  }

  create() {
    this.soundOn = this.add.image(450, 35, 'soundOn').setScale(0.3).setVisible(false).setDepth(6);
    this.soundOff = this.add.image(450, 35, 'soundOff').setScale(0.3).setDepth(6);
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


    this.hero = this.physics.add.sprite(450, 450, 'hero', 12).setDepth(4).setScale(0.2);
    this.bg = this.add.sprite(450, 360, 'th', 0).setDepth(0).setScale(1.18);
    this.roombg = this.add.sprite(457, 300, 'bg2', 0).setDepth(-1).setScale(1).setVisible(false);
    this.physics.world.bounds.width = this.roombg.width;
    this.physics.world.bounds.height = this.roombg.height;
    this.backDoors = this.add.image(465, 590, 'backDoor').setDepth(1).setScale(1.18);
    this.hero.setCollideWorldBounds(true);
    this.hero.body.setAllowGravity(false);
    this.keyboard = this.input.keyboard.addKeys('W,A,S,D');

    this.oneDone = this.add.text(70, 380, 'Room1 clear',
      {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: 40, backgroundColor: 'black', align: 'center',
      });
    this.oneDone.setVisible(false);

    this.oneTwo = this.add.text(450, 380, 'Room2 clear',
      {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: 40, backgroundColor: 'black', align: 'center',
      });
    this.oneTwo.setVisible(false);


    /* window.steps.stop() */
  }

  update() {
    console.log(this.complete)

    if (this.complete.room1 === true && this.complete.room2 === true) {
     
      this.scene.start('secondLastPassage');
    }

    this.oneDone.setVisible(false);
    this.bg.play('throne_animation', true);

    this.oneTwo.setVisible(false);


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

    if (this.hero.y < 350) {
      this.hero.y = 350;
    }
    if (this.hero.y > 530) {
      if (this.hero.x > 56 && this.hero.x < 248) {
        if (this.complete.room1 == true) {
          this.oneDone.setVisible(true);
        } else {
          this.scene.start('room1', {
            x: 3450,
            room1: this.complete.room1,
            room2: this.complete.room2,
          });
        }
      }
      if (this.hero.x > 400 && this.hero.x < 550) {
        this.scene.start('main', {
          room1: this.complete.room1,
          room2: this.complete.room2,
        });
      }
      if (this.hero.x > 716) {
        if (this.complete.room2 == true) {
          this.oneTwo.setVisible(true);
        } else {
          this.scene.start('room2', {
            room1: this.complete.room1,
            room2: this.complete.room2,
          });
        }
      }
    }
  }
}
export default secondLast;