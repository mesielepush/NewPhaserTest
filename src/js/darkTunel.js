import constants from './constants';


class darkTunel extends Phaser.Scene {
  constructor() {
    super({ key: 'darkTunel' });
  }

  preload() {
    this.anims.create({
      key: 'fireOn',
      frameRate: 30,
      frames: this.anims.generateFrameNumbers('fire', {
        start: 0,
        end: 60,
      }),
    });
    this.anims.create({
      key: 'down_fire',
      frameRate: 6,
      frames: this.anims.generateFrameNumbers('boos', {
        frames: [0, 8, 16, 24, 32, 40, 48],
      }),
      repeat: 0,
    });
    this.anims.create({
      key: 'up_turn',
      frameRate: 3,
      frames: this.anims.generateFrameNumbers('boos', {
        frames: [4, 12, 20, 28, 36, 52, 35, 34, 33, 32],
      }),
      repeat: 0,
    });
    this.anims.create({
      key: 'low_blood',
      frameRate: 1,
      frames: this.anims.generateFrameNumbers('demonBlood', {
        frames: [0, 1, 2],
      }),
      repeat: 0,
    });
  }

  create() {
    window.opening.stop();
    this.heroLife = 2;
    this.demonLife = 1;
    this.m1 = this.add.image(460, 300, 'm1').setScale(1.8).setVisible(false);
    this.menu1 = this.add.image(700, 400, 'menu1').setScale(1.4).setVisible(false);
    this.reasonGreen = this.add.image(700, 401, 'reasonGreen').setScale(1.4).setVisible(false);
    this.attackGreen = this.add.image(700, 402, 'attackGreen').setScale(1.4).setVisible(false);
    this.reasonWhite = this.add.image(703, 366, 'reasonWhite').setScale(1.4).setVisible(false).setDepth(5);
    this.attackWhite = this.add.image(630, 432, 'attackWhite').setScale(1.4).setVisible(false).setDepth(5);
    this.heroBloodZero = this.add.image(480, 500, 'heroBlood', 0).setDepth(5).setVisible(true);
    this.heroBloodOne = this.add.image(480, 500, 'heroBlood', 1).setDepth(5).setVisible(false);
    this.heroBloodTwo = this.add.image(480, 500, 'heroBlood', 2).setDepth(5).setVisible(false);
    this.heroBloodThree = this.add.image(480, 500, 'heroBlood', 3).setDepth(5).setVisible(false);
    this.demoonBloodZero = this.add.sprite(480, 30, 'demonBlood', 0).setDepth(5).setVisible(true);


    this.reasonOne = this.add.image(460, 300, 'reasonOne').setScale(1.8).setVisible(false);
    this.reasonTwo = this.add.image(460, 300, 'reasonTwo').setScale(1.8).setVisible(false);
    this.reasonThree = this.add.image(460, 300, 'reasonThree').setScale(1.8).setVisible(false);
    this.gameOver = this.add.image(460, 300, 'gameOver').setScale(1.8).setVisible(false);
    this.reasonTurn = false;
    this.attackTurn = false;
    this.reasonWhite.setInteractive();
    this.reasonWhite.on('pointerover', () => {
      this.reasonWhite.setVisible(false);
      this.reasonGreen.setVisible(true);
    });
    this.reasonWhite.on('pointerout', () => {
      this.reasonWhite.setVisible(true);
      this.reasonGreen.setVisible(false);
    });
    this.reasonWhite.on('pointerup', () => {
      this.reasonTurn = true;
    });

    this.attackWhite.setInteractive();
    this.attackWhite.on('pointerover', () => {
      this.attackWhite.setVisible(false);
      this.attackGreen.setVisible(true);
    });
    this.attackWhite.on('pointerout', () => {
      this.attackWhite.setVisible(true);
      this.attackGreen.setVisible(false);
    });
    this.attackWhite.on('pointerup', () => {
      this.attackTurn = true;
    });


    this.hero = this.physics.add.sprite(480, 450, 'hero', 12).setDepth(4).setScale(0.1);
    this.fire = this.add.sprite(535, 100, 'fire', 0).setDepth(10).setScale(0.2).setVisible(false);
    this.boos2 = this.add.sprite(450, 340, 'boos', 0);
    /* this.boos3 = this.add.sprite(250,200,'boos',0); */

    this.roombg = this.add.sprite(457, 300, 'bg2', 0).setDepth(-1).setScale(1).setVisible(false);
    this.chickens = this.physics.add.group({ immovable: true });
    this.physics.world.bounds.width = this.roombg.width;
    this.physics.world.bounds.height = this.roombg.height;

    this.hero.setCollideWorldBounds(true);
    this.hero.body.setAllowGravity(false);
    this.keyboard = this.input.keyboard.addKeys('W,A,S,D');
    this.upTurnAnimation = false;
    this.turnsBegin = false;
    this.turnOne = false;
    this.turnTwo = false;
    this.fireBadGuy = false;
    /* window.steps.stop() */
  }

  update() {
    /* this.fire.play('fireOn',true); */
    this.boos2.y -= 2;
    console.log('LIFE: ', this.demonLife);

    if (this.attackTurn == true) {
      this.menu1.setVisible(false);
      this.reasonWhite.setVisible(false),
      this.reasonGreen.setVisible(false),
      this.attackWhite.setVisible(false);

      for (let i = 0; i < 1; i++) {
        let x = 250;
        let y = 550;
        switch (Phaser.Math.Between(0, 1)) {
          case 0: x = Phaser.Math.Between(250, 580);
            break;
          case 1: y = Phaser.Math.Between(600, 450);
        }
        this.chickens.add(this.physics.add.sprite(x, y, 'chicken', 0).setDepth(2).setScale(4).setCollideWorldBounds(true));
      }

      for (let i = 0; i < this.chickens.getChildren().length; i++) {
        this.physics.accelerateToObject(this.chickens.getChildren()[i], this.boos2, 150);
        this.chickens.getChildren()[i].body.setAllowGravity(false).setCollideWorldBounds(true);
        if (this.chickens.getChildren()[i].body.velocity.x > 0) {
          this.chickens.getChildren()[i].play('right_chicken', true);
        }
        if (this.chickens.getChildren()[i].body.velocity.x < 0) {
          this.chickens.getChildren()[i].play('left_chicken', true);
        }
      }
      if (this.chickens.getChildren().length > 280) {
        this.demoonBloodZero.play('low_blood', true).on('animationcomplete', () => {
          this.scene.start('finalStage');
        });
      }
    }


    if (this.fireBadGuy == true) {
      this.fire.setVisible(true);

      this.fire.play('fireOn', true);
      this.fire.y += 3;
      if (this.fire.y > 450) {
        this.fire.setVisible(false);
        this.fireBadGuy = false;
        this.heroLife -= 1;
      }
    }
    if (this.boos2.y < 150) {
      this.boos2.y = 150;
    }
    if (this.upTurnAnimation == false) {
      this.upTurnAnimation = true;
      this.boos2.play('up_turn', true).on('animationcomplete', () => {
        this.m1.setVisible(true);
        this.time.addEvent({
          delay: 4000,
          callback: () => {
            this.m1.destroy(),
            this.turnsBegin = true,
            this.menu1.setVisible(true);
            this.reasonWhite.setVisible(true),
            this.attackWhite.setVisible(true);
          },
          callbackScope: this,
        });
      });
    }

    if (this.reasonTurn == true) {
      this.menu1.setVisible(false);
      this.reasonWhite.setVisible(false),
      this.reasonGreen.setVisible(false),
      this.attackWhite.setVisible(false);
      if (this.heroLife == 2) {
        this.reasonOne.setVisible(true);
      }
      if (this.heroLife == 1) {
        this.reasonTwo.setVisible(true);
      }
      if (this.heroLife == 0) {
        this.reasonThree.setVisible(true);
      }

      this.reasonTurn = false,
      this.time.addEvent({
        delay: 4000,
        callback: () => {
          this.boos2.play('down_fire', true).on('animationcomplete', () => {
            if (this.heroLife == 2) {
              this.reasonOne.setVisible(false);
            }
            if (this.heroLife == 1) {
              this.reasonTwo.setVisible(false);
            }
            if (this.heroLife == 0) {
              this.reasonThree.setVisible(false);
            }
            this.turnTwo = true,
            this.turnOne = 'done',
            this.fireBadGuy = true,
            this.fire.y = 100;
          });
        },
        callbackScope: this,
      });
    }

    if (this.heroLife == 1) {
      this.heroBloodZero.destroy();
      this.heroBloodOne.setVisible(true);
    }
    if (this.heroLife == 0) {
      this.heroBloodOne.destroy();
      this.heroBloodTwo.setVisible(true);
    }
    if (this.heroLife == -1) {
      this.heroBloodTwo.destroy();
      this.heroBloodThree.setVisible(true);

      this.time.addEvent({
        delay: 3000,
        callback: () => {
          this.heroBloodThree.setVisible(false);
        },
        callbackScope: this,
      });
      this.gameOver.setVisible(true);
      this.time.addEvent({
        delay: 3000,
        callback: () => {
          this.scene.start('darkTunel');
        },
        callbackScope: this,
      });
    }
  }
}
export default darkTunel;