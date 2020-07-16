import constants from "./constants";

class room2_passage1 extends Phaser.Scene{

    constructor(){
        super({key:'room2_passage1'})
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

    }
    create (){
        this.room2Background = this.add.sprite(386,300,"room2bg",0).setDepth(1).setScale(2.2).setDepth(0);
        this.alert = this.add.image(550,375,'alertWhite')
    }
    update(){
        this.room2Background.play("room2back",true)
        


    }
}
export default room2_passage1;

/* this.player.flipX= true; // flip the sprite to the left
this.player.play('walk', true); // play walk animation */