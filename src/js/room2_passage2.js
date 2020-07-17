import constants from "./constants";

class room2_passage2 extends Phaser.Scene{

    constructor(){
        super({key:'room2_passage2'})
    }
    init(data){
        this.complete={
            room1: data.room1,
            room2: data.room2
        }
    }
    preload(){
       
       
 
    }
    create (){
        this.soundOn = this.add.image(100,35,'soundOn').setScale(0.3).setVisible(false).setDepth(6)
        this.soundOff = this.add.image(100,35,'soundOff').setScale(0.3).setDepth(6)
        this.soundOn.setInteractive();
        this.soundOff.setInteractive();

        this.soundOn.on('pointerup', ()=>{
            this.soundOn.setVisible(false)
            this.soundOff.setVisible(true)
            window.opening.play()
        });
        this.soundOff.on('pointerup', ()=>{
            this.soundOff.setVisible(false)
            this.soundOn.setVisible(true)
            window.opening.stop()
            
        });
        this.room2bg1 = this.add.sprite(0,0,"room2bg1",0).setDepth(0).setScale(1).setOrigin(0);
        this.catapult = this.add.sprite(430,180,"catapult",0).setDepth(1).setScale(1.5).setDepth(1);
        this.tube = this.add.image(366,300,'tube').setDepth(2).setScale(1);
        this.catButtonRed = this.add.image(192,462,'catButtonRed').setScale(0.2).setVisible(true)
        this.catButtonGreen = this.add.image(192,462,'catButtonGreen').setScale(0.2).setVisible(false)
        this.catStay = this.add.sprite(50,550,'catStay').setScale(2.5);
        this.catMove = this.add.sprite(50,550,'catWalk').setScale(2.5).setVisible(false);
        this.aspersor = this.add.image(650,10,'aspersor').setDepth(3);
        this.catapult.flipX= true

        this.hero = this.physics.add.sprite(800,538,"hero",8).setDepth(0).setScale(0.15).setGravityY(0);
        this.hero.body.setAllowGravity(false);
        this.hero.setCollideWorldBounds(true);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        
        
        this.catMoving = false


    }
    update(){
       console.log(this.complete)
        
       
       if (this.catMoving == true){
            this.catMove.play('catWalk_animation',true);
            this.catMove.x+=7
       }
       if (this.catStay.active){
        this.catStay.play('catStay_animation',true);
       }
        
        
        this.room2bg1.play('room2bg1_animation',true);

        if (this.keyboard.D.isDown === true) {
            
            this.hero.setVelocityX(+constants.hero.speed_room1);
            

        }

        if (this.keyboard.W.isDown === true) {
            
            this.hero.setVelocityY(-constants.hero.speed_room1);
            
        }

        if (this.keyboard.S.isDown === true) {
            
            this.hero.setVelocityY(+constants.hero.speed_room1);
            
        }

        if (this.keyboard.A.isDown === true) {
            
            this.hero.setVelocityX(-constants.hero.speed_room1);
            
        }
        if (this.keyboard.A.isUp && this.keyboard.D.isUp) { //not moving on X axis
            
            this.hero.setVelocityX(0);
            
        }
        if (this.keyboard.W.isUp && this.keyboard.S.isUp) { //not pressing y movement
            
            this.hero.setVelocityY(0);
            
        }

        if (this.hero.body.velocity.x > 0) { //moving right
            this.hero.play("right", true);
        } else if (this.hero.body.velocity.x < 0) { //moving left
            this.hero.play("left", true);
        } else if (this.hero.body.velocity.y < 0) { //moving up
            this.hero.play("up", true);
        } else if (this.hero.body.velocity.y > 0) { //moving down
            this.hero.play("down", true);
        }
        if (this.hero.y <495){
            if (this.hero.x>180 && this.hero.x <216){
            this.catButtonGreen.setVisible(true);
            this.catButtonRed.setVisible(false);
            this.catapult.play('catapult_animation',true).on('animationcomplete',()=>{
                this.catStay.destroy();
                this.catMove.setVisible(true)
                this.catMoving = true
                
                
            });

            }
        }
        if (this.hero.y <496){
            this.hero.y = 496
        }
        if (this.hero.x > 885){
            this.scene.start('room2')
        }
        if (this.catMove.x > 885){
            this.scene.start('room2_passage1_animation',{
                room1:this.complete.room1,
                room2:this.complete.room2
            })
        }
    }
}
export default room2_passage2;

/* this.player.flipX= true; // flip the sprite to the left
this.player.play('walk', true); // play walk animation */