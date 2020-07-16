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
        this.anims.create({
            key: "catStay_animation",
            frameRate: 3,
            frames: this.anims.generateFrameNumbers("catStay", {
                start: 3,
                end: 5
            }),
            repeat:-1
        });
 
    }
    create (){
        this.room2bg1 = this.add.sprite(0,0,"room2bg1",0).setDepth(0).setScale(1).setOrigin(0);
        this.catapult = this.add.sprite(430,180,"catapult",0).setDepth(1).setScale(1.5).setDepth(1);
        this.tube = this.add.image(366,300,'tube').setDepth(2).setScale(1)
        this.catStay = this.add.sprite(50,550,'catStay').setScale(2.5)
        this.aspersor = this.add.image(650,10,'aspersor').setDepth(3)
        this.catapult.flipX= true
    }
    update(){
        /* this.catapult.play('catapult_animation',true) */
        this.catStay.play('catStay_animation',true)
        this.room2bg1.play('room2bg1_animation',true)

    }
}
export default room2;

/* this.player.flipX= true; // flip the sprite to the left
this.player.play('walk', true); // play walk animation */