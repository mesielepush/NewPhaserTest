import constants from "./constants";

class room2 extends Phaser.Scene{

    constructor(){
        super({key:'room2'})
    }
    preload(){
        this.anims.create({
            key: "room2back",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("room2bg", {
                start: 0,
                end: 7
            }),
            repeat:-1
        });
        this.anims.create({
            key: "room2bg1_animation",
            frameRate: 24,
            frames: this.anims.generateFrameNumbers("room2bg1", {
                start: 0,
                end: 60
            }),
            repeat:-1
        });
        this.anims.create({
            key: "catapult_animation",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("catapult", {
                start: 0,
                end: 14
            }),
            repeat:-1
        });
 
    }
    create (){
        this.room2bg1 = this.add.sprite(0,0,"room2bg1",0).setDepth(0).setScale(1).setOrigin(0);

        this.catapult = this.add.sprite(450,180,"catapult",0).setDepth(1).setScale(1.5).setDepth(1);
        this.alert = this.add.image(550,375,'alertWhite')
        this.catapult.flipX= true
    }
    update(){
        this.catapult.play('catapult_animation',true)
        
        this.room2bg1.play('room2bg1_animation',true)

    }
}
export default room2;

/* this.player.flipX= true; // flip the sprite to the left
this.player.play('walk', true); // play walk animation */