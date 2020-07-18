import constants from "./constants";
import newfunct from "./new";

class secondLastPassage extends Phaser.Scene{

    constructor(){
        super({key:'secondLastPassage'})
    }
    
    preload(){
        
        
    }
    create (){
        window.opening.stop()
        
        this.hero = this.physics.add.sprite(450,450,"hero",12).setDepth(4).setScale(0.2);
        this.bg = this.add.sprite(450,360,"th",0).setDepth(0).setScale(1.18);
        this.roombg = this.add.sprite(457,300,"bg2",0).setDepth(-1).setScale(1).setVisible(false);
        
        this.bDoor = this.add.image(452,165,'throne_back').setDepth(2).setScale(1.18);
        this.bDoorBlack = this.add.image(452,165,'throne_black').setScale(1.18).setDepth(1)
        this.physics.world.bounds.width = this.roombg.width;
        this.physics.world.bounds.height = this.roombg.height;
        
        this.hero.setCollideWorldBounds(true);
        this.hero.body.setAllowGravity(false);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
               

        /* window.steps.stop() */
    }
    update(){
        
        console.log(this.bDoor.y)
        this.bg.play('throne_animation',true);
        this.bDoor.y -=2
    }
}
export default secondLastPassage;