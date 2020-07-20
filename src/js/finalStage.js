import constants from "./constants";

class finalStage extends Phaser.Scene{

    constructor(){
        super({key:'finalStage'})
    }
    init(data){
        this.complete = {
            room1: data.room1,
            room2 : data.room2,
        }
    }
    preload(){
        this.anims.create({
            key: "destroyFinal",
            frameRate: 13,
            frames: this.anims.generateFrameNumbers("destroyWorld", {
                start: 0,
                end: 60
            }),
            repeat:-1
        });
    }
    create (){
        
        this.destroyWorld = this.add.sprite(400,250,'destroyWorld',0).setScale(5)
        /* window.steps.stop() */
    }
    update(){
        
       this.destroyWorld.play('destroyFinal',true)
    }
}
export default finalStage;