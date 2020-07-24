/* global Phaser */
class secondLastPassage extends Phaser.Scene {
  constructor() {
    super({ key: 'secondLastPassage' });
  }

  create() {
    window.opening.stop();
    window.steps.stop();
    window.boosSound.play();
    this.hero = this.physics.add.sprite(450, 450, 'hero', 12).setDepth(4).setScale(0.2);
    this.bg = this.add.sprite(450, 360, 'th', 0).setDepth(0).setScale(1.18);
    this.roombg = this.add.sprite(457, 300, 'bg2', 0).setDepth(-1).setScale(1).setVisible(false);

    this.bDoor = this.add.image(452, 165, 'throne_back').setDepth(2).setScale(1.18);
    this.bDoorBlack = this.add.image(452, 165, 'throne_black').setScale(1.18).setDepth(1);
    this.physics.world.bounds.width = this.roombg.width;
    this.physics.world.bounds.height = this.roombg.height;

    this.hero.setCollideWorldBounds(true);
    this.hero.body.setAllowGravity(false);
    this.keyboard = this.input.keyboard.addKeys('W,A,S,D');
    this.walking = false;
  }

  update() {
    if (this.walking === true) {
      window.steps.play();
    }
    this.bg.play('throne_animation', true);
    this.bDoor.y -= 2;

    if (this.bDoor.y < -180) {
      this.hero.y -= 1;
      this.walking = true;
      window.steps.play();
      this.hero.play('up', true);
      if (this.hero.y < 250) {
        this.hero.destroy();
        window.steps.stop();

        this.scene.start('darkTunel');
      }
    }
  }
}
export default secondLastPassage;