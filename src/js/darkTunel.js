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
            repeat:0
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
        this.m1 = this.add.image(460,300,'m1').setScale(1.8).setVisible(false);
        this.menu1 = this.add.image(700,400,'menu1').setScale(1.4).setVisible(false);
        this.reasonGreen = this.add.image(700,401,'reasonGreen').setScale(1.4).setVisible(false);
        this.attackGreen = this.add.image(700,402,'attackGreen').setScale(1.4).setVisible(false);
        this.reasonWhite = this.add.image(703,366,'reasonWhite').setScale(1.4).setVisible(false).setDepth(5);
        this.attackWhite = this.add.image(630,432,'attackWhite').setScale(1.4).setVisible(false).setDepth(5);
        
        this.reasonOne   = this.add.image(460,300,'reasonOne').setScale(1.8).setVisible(false);
        this.reasonTurn  = false;

        this.reasonWhite.setInteractive();
        this.reasonWhite.on('pointerover', ()=>{
            this.reasonWhite.setVisible(false);
            this.reasonGreen.setVisible(true);            
        });
        this.reasonWhite.on('pointerout', ()=>{
            this.reasonWhite.setVisible(true);
            this.reasonGreen.setVisible(false);
        });
        this.reasonWhite.on('pointerup', ()=>{
            this.reasonTurn = true
        });


        this.attackWhite.setInteractive();
        this.attackWhite.on('pointerover', ()=>{
            this.attackWhite.setVisible(false);
            this.attackGreen.setVisible(true);            
        });
        this.attackWhite.on('pointerout', ()=>{
            this.attackWhite.setVisible(true);
            this.attackGreen.setVisible(false);
        });



        this.hero = this.physics.add.sprite(480,450,"hero",12).setDepth(4).setScale(0.1);
        /* this.boos = this.add.sprite(600,150,'boos',0); */
        this.boos2 = this.add.sprite(450,340,'boos',0);
        /* this.boos3 = this.add.sprite(250,200,'boos',0); */

        this.roombg = this.add.sprite(457,300,"bg2",0).setDepth(-1).setScale(1).setVisible(false);
        
        
        this.physics.world.bounds.width = this.roombg.width;
        this.physics.world.bounds.height = this.roombg.height;
        
        this.hero.setCollideWorldBounds(true);
        this.hero.body.setAllowGravity(false);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        this.upTurnAnimation = false;
        this.turnsBegin = false;
        this.turnOne = false;
        this.turnTwo = false;
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
        this.boos2.play('up_turn',true).on('animationcomplete',()=>{
            this.m1.setVisible(true);
            this.time.addEvent({ delay: 4000,  callback: ()=>{
                this.m1.destroy(),
                this.turnsBegin = true,
                this.menu1.setVisible(true);
                this.reasonWhite.setVisible(true),
                this.attackWhite.setVisible(true)},
                callbackScope: this});
        });
       }
       
       if (this.reasonTurn == true){
        this.reasonTurn = false,
        this.menu1.setVisible(false);
        this.reasonWhite.setVisible(false),
        this.reasonGreen.setVisible(false),
        this.attackWhite.setVisible(false),
        this.reasonOne.setVisible(true),
        this.time.addEvent({ delay: 4000,  callback: ()=>{
            this.boos2.play('down_fire',true).on('animationcomplete',()=>{
                this.reasonOne.setVisible(false),
                this.reasonTurn = false,
                this.turnTwo = true,
                this.turnOne = 'done'
            })            
            },
            callbackScope: this});
    
       }
       
        
    }
}
export default darkTunel;