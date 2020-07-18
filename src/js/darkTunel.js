import constants from "./constants";


class darkTunel extends Phaser.Scene{

    constructor(){
        super({key:'darkTunel'})
    }
    
    preload(){
        this.anims.create({
            key: "down_fire",
            frameRate: 6,
            frames: this.anims.generateFrameNumbers("boos", {
                frames: [0,8,16,24,32,40,48]
            }),
            repeat:-1
        });
        this.anims.create({
            key: "up_turn",
            frameRate: 3,
            frames: this.anims.generateFrameNumbers("boos", {
                frames: [4,12,20,28,36,52,35,34,33,32]
            }),
            repeat:0
        });
        
    }
    create (){
        window.opening.stop()
        
        this.hero = this.physics.add.sprite(450,450,"hero",12).setDepth(4).setScale(0.2);
        /* this.boos = this.add.sprite(600,150,'boos',0); */
        this.boos2 = this.add.sprite(450,340,'boos',0);
        /* this.boos3 = this.add.sprite(250,200,'boos',0); */

        this.roombg = this.add.sprite(457,300,"bg2",0).setDepth(-1).setScale(1).setVisible(false);
        
        
        this.physics.world.bounds.width = this.roombg.width;
        this.physics.world.bounds.height = this.roombg.height;
        
        this.hero.setCollideWorldBounds(true);
        this.hero.body.setAllowGravity(false);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        this.upTurnAnimation = false

        /* window.steps.stop() */
    }
    update(){
       /* this.boos.play('down_fire',true) */
       this.boos2.y-=2;
       if (this.boos2.y <150){
           this.boos2.y=150
       }
       if (this.upTurnAnimation == false){
        this.upTurnAnimation = true;
        this.boos2.play('up_turn',true)
       }
       if (this.boos2.y == 150){
           
       }
       
        
    }
}
export default darkTunel;