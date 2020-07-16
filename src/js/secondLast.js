import constants from "./constants";

class secondLast extends Phaser.Scene{

    constructor(){
        super({key:'secondLast'})
    }
    init(data){
        
        
    }
    preload(){
        this.anims.create({
            key: "throne_animation",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("th", {
                start:0,
                end: 20
            }),
            repeat:0
        });
        this.anims.create({
            key: "left",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 8,
                end: 11
            }),
            repeat:0
        });
        this.anims.create({
            key: "down",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 0,
                end: 3
            }),
            repeat:0
        });
        this.anims.create({
            key: "right",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 4,
                end: 7
            }),
            repeat:0
        });
        
        
        this.anims.create({
            key: "up",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 12,
                end: 15
            }),
            repeat:0
        }); 


    }
    create (){
        this.hero = this.physics.add.sprite(450,450,"hero",8).setDepth(4).setScale(0.2);
        this.bg = this.add.sprite(450,360,"th",8).setDepth(4).setScale(1.18);
        this.hero.body.setAllowGravity(false);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");

        /* window.steps.stop() */
    }
    update(){
        this.bg.play('throne_animation',true)
        
        

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
            
            this.hero.setVelocityX(-constants.hero.speed);
            
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

        if (this.hero.y < 450){
            
            this.hero.y=450
        }
        if (this.hero.x ==875){
            if (this.open ==true){

                this.scene.start('room1',{ open:true,x: 990 })
            }else{
                this.scene.start('room1',{ x: 990 })
            }
            
        }

    }
}
export default secondLast;