import constants from "./constants";


class darkTunel extends Phaser.Scene{

    constructor(){
        super({key:'darkTunel'})
    }
    
    preload(){
        this.anims.create({
            key: "boos_animation",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("boos", {
                start: 0,
                end: 61
            }),
            repeat:-1
        });
        
    }
    create (){
        window.opening.stop()
        
        this.hero = this.physics.add.sprite(450,450,"hero",12).setDepth(4).setScale(0.2);
        this.boos = this.add.sprite(450,150,'boos',0) 
        this.roombg = this.add.sprite(457,300,"bg2",0).setDepth(-1).setScale(1).setVisible(false);
        
        
        this.physics.world.bounds.width = this.roombg.width;
        this.physics.world.bounds.height = this.roombg.height;
        
        this.hero.setCollideWorldBounds(true);
        this.hero.body.setAllowGravity(false);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
               

        /* window.steps.stop() */
    }
    update(){
       this.boos.play('boos_animation',true)
        
    }
}
export default darkTunel;