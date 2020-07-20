import constants from './constants';

class room3 extends Phaser.Scene {
  constructor() {
    super({ key: 'room3' });
  }

  preload() {
    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map', '../src/images/assets/map.json');
    // tiles in spritesheet
    this.load.spritesheet('tiles', '../src/images/assets/tiles.png', { frameWidth: 70, frameHeight: 70 });
    // simple coin image
    this.load.image('coin', '../src/images/assets/coinGold.png');
    // player animations
    this.load.atlas('player', '../src/images/assets/player.png', '../src/images/assets/player.json');

    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNames('player', {
        prefix: 'p1_walk', start: 1, end: 11, zeroPad: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  create() {
    this.add.text(0, 0, '...This is ROOM two... ',
      {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: 40, backgroundColor: 'black', align: 'center',
      });
    this.animationPlayed = true;
    this.map = this.make.tilemap({ key: 'map' });

    // tiles for the ground layer
    const groundTiles = this.map.addTilesetImage('tiles');
    // create the ground layer
    this.groundLayer = this.map.createDynamicLayer('World', groundTiles, 0, 0);
    // the player will collide with this layer
    this.groundLayer.setCollisionByExclusion([-1]);
    // set the boundaries of our game world
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;
    this.player = this.physics.add.sprite(200, 200, 'player').setDepth(5);
    this.player.setBounce(0.2); // our player will bounce from items
    this.player.setCollideWorldBounds(true); // don't go out of the map
    this.physics.add.collider(this.groundLayer, this.player);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    // make the camera follow the pla yer
    this.cameras.main.startFollow(this.player);

    // set background color, so the sky is not black
    this.cameras.main.setBackgroundColor('#ccccff');
    /* window.steps.stop() */
  }

  update() {
    if (this.cursors.left.isDown) // if the left arrow key is down
    {
      this.player.body.setVelocityX(-200); // move left
    } else if (this.cursors.right.isDown) // if the right arrow key is down
    {
      this.player.body.setVelocityX(200); // move right
    }
    if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.onFloor()) {
      this.player.body.setVelocityY(-500); // jump up
    }

    if (this.player.body.velocity.x < 0) { // moving right
      this.player.play('walk', true);
    }
  }
}
export default room3;