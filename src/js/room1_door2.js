import constants from "./constants";

class room1_door2 extends Phaser.Scene{

    constructor(){
        super({key:'room1_door2'})
    }
    preload(){
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
            key: "on",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("machine", {
                start: 0,
                end: 2
            }),
            repeat:-1
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

        this.anims.create({
            key: "left_chicken",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("chicken", {
                start: 3,
                end: 5
            }),
            repeat:-1
        });
        this.anims.create({
            key: "right_chicken",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("chicken", {
                start: 7,
                end: 9
            }),
            repeat:-1
        });
        this.anims.create({
            key: "up_chicken",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("chicken", {
                start: 10,
                end: 12
            }),
            repeat:-1
        });
        this.anims.create({
            key: "idle",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("chicken", {
                start: 0,
                end: 2
            }),
            repeat:-1
        });
        

    }
    create (){
        
        
        this.hero = this.physics.add.sprite(800,600,"hero",8).setDepth(4).setScale(0.2);
        this.chicken = this.physics.add.sprite(600,351,"chicken",0).setDepth(2).setScale(4);
        this.chicken.body.setAllowGravity(false)
        

        this.roombg = this.add.sprite(457,300,"bg2",0).setDepth(0).setScale(1);
        this.corral = this.add.image(450,335,'corral').setDepth(0);
        this.corral1 = this.add.image(450,360,'corral1').setDepth(3);
        
        

        this.hero.setCollideWorldBounds(true); 
        
        

        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        
        this.physics.world.bounds.width = this.roombg.width;
        this.physics.world.bounds.height = this.roombg.height;

        
      
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        this.chickens = this.physics.add.group({ immovable: true });
        this.chickens.add(this.chicken);

        for (let i = 0; i < 5; i++) { 
            let x = 250;
            let y = 0;
            switch (Phaser.Math.Between(0, 1)) {
                case 0: x = Phaser.Math.Between(250, 580);
                    break;
                case 1: y = Phaser.Math.Between(400, this.game.renderer.height);
            }
            this.chickens.add(this.physics.add.sprite(x,y,"chicken",0).setDepth(2).setScale(4));
        }
        

        /* window.steps.stop() */
    }
    update(){
        
        console.log(this.hero.x)
        /* this.hero.setScale() */
        for (let i = 0; i < this.chickens.getChildren().length; i++) {
            this.physics.accelerateToObject(this.chickens.getChildren()[i], this.hero,150);

            if (this.chickens.getChildren()[i].body.velocity.x > 0){
                this.chickens.getChildren()[i].play('right_chicken',true);
            }
            if (this.chickens.getChildren()[i].body.velocity.x < 0){
                this.chickens.getChildren()[i].play('left_chicken',true);
            }

            if (this.chickens.getChildren()[i].y > 400){
                this.chickens.getChildren()[i].y = 400
            }
            if (this.chickens.getChildren()[i].x > 590){
                this.chickens.getChildren()[i].x =590
            }
            if (this.chickens.getChildren()[i].x < 250){
                this.chickens.getChildren()[i].x = 250
            }
            
                
            
            
        }
        
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
            this.scene.start('room1',{ x: 990 })
        }

    }
}
export default room1_door2;