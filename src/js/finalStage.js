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
            frameRate: 30,
            frames: this.anims.generateFrameNumbers("destroyWorld", {
                start: 0,
                end: 150
            }),
            repeat:0
        });
    }
    create (){
        
        this.destroyWorld = this.add.sprite(480,300,'destroyWorld',0).setScale(5.3);
        this.finalMessage = this.add.image(450,300,'finalmessage').setVisible(false).setScale(1.5);
        this.finalAnimation = false;
        /* window.steps.stop() */
    }
    update(){
        if (this.finalAnimation==false){
            this.finalAnimation = true;
            this.time.addEvent({ delay: 4000,  callback: ()=>{
                this.destroyWorld.play('destroyFinal',true).on('animationcomplete',()=>{
                    this.finalMessage.setVisible(true)
                     
                })            
                },
                callbackScope: this});
        }
        
       
    }
}
export default finalStage;