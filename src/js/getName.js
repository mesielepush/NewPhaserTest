/* global Phaser */
class getName extends Phaser.Scene {
  constructor() {
    super('getName');
  }

  create() {
    this.gameBtn = this.add.image(450, 450, 'submit').setInteractive().setScale(2.5);
    this.enter = this.add.image(465, 150, 'enter').setScale(2.5);

    this.gameBtn.on('pointerdown', () => {
      this.start();
    });

    this.nameInput = this.make.text({
      text: 'Click here to write it',
      style: {
        font: '60px monospace',
        fill: '#FFFFFF',
      },
      selected: false,
    });
    this.nameInput.setFontStyle('bold').setScale(1.5);
    this.nameInput.x = 310;
    this.nameInput.y = 250;

    this.nameInput.setInteractive();
    this.input.on('pointerdown', (event, gameObjects) => {
      if (gameObjects.length !== 0) {
        gameObjects[0].selected = true;
        this.nameInput.text = '';
      } else {
        this.nameInput.selected = false;
        if (this.nameInput.text === '') {
          this.nameInput.text = 'Click here to write it';
          this.nameInput.x = 310;
          this.nameInput.y = 250;
        }
      }
    });

    this.input.keyboard.on('keydown', (event) => {
      if (this.nameInput.selected === true) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
          this.nameInput.text += event.key;
        } else if (event.keyCode === 32) {
          this.nameInput.text += ' ';
        } else if (event.keyCode === 8) {
          this.nameInput.text = this.nameInput.text.slice(0, -1);
        } else if (event.keyCode === 13) {
          this.start();
        }
        this.nameInput.x = 310;
        this.nameInput.y = 250;
      }
    });
  }

  start() {
    const { text } = this.nameInput;
    if (text === '' || text === 'Click here to write it' || text.length > 9) {
      // eslint-disable-next-line no-alert
      alert('Name should have at More than 1 character and less than 9');
    } else {
      window.userName = this.nameInput.text;
      this.scene.start('menu');
    }
  }
}
export default getName;