import constants from "./constants";

class secondLast extends Phaser.Scene{

    constructor(){
        super({key:'secondLast'})
    }
    init(data){
        this.complete = {
            room1: data.room1,
            room2 : data.room2,
            room3 :data.doom3

        }
        
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
        console.log(this.complete)
        this.hero = this.physics.add.sprite(450,450,"hero",8).setDepth(4).setScale(0.2);
        this.bg = this.add.sprite(450,360,"th",8).setDepth(0).setScale(1.18);
        this.roombg = this.add.sprite(457,300,"bg2",0).setDepth(-1).setScale(1).setVisible(false);
        this.physics.world.bounds.width = this.roombg.width;
        this.physics.world.bounds.height = this.roombg.height;
        this.backDoors = this.add.image(465,590,"backDoor",8).setDepth(1).setScale(1.18);
        this.hero.setCollideWorldBounds(true);
        this.hero.body.setAllowGravity(false);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        
        this.oneDone = this.add.text(70,380, 'Room1 clear',
        { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.oneDone.setVisible(false);
        
        this.oneTwo = this.add.text(450,380, 'Room2 clear',
        { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.oneTwo.setVisible(false);


        this.ex = this.add.text(this.hero.x,100, 'X: ',this.hero.x,
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.ys = this.add.text(this.hero.x,150, 'X: ',this.hero.y,
            { fontFamily: 'Georgia, "Gouady Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});

        /* window.steps.stop() */
    }
    update(){
        this.oneDone.setVisible(false)
        this.bg.play('throne_animation',true);
        
        this.ex.setText(this.hero.x);
       
        this.ys.setText(this.hero.y);

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

        if (this.hero.y < 350){
            
            this.hero.y=350
        }
        if (this.hero.y >530){
            if (this.hero.x>56 && this.hero.x <248){
                console.log(this.complete.room1)
                if (this.complete.room1 == true ){
                    console.log('TRUEEE')

                    this.oneDone.setVisible(true)
                }else{
                    this.scene.start('room1', {x:3450,complete: this.complete})
                }
            }
            if (this.hero.x>400 && this.hero.x <550){
                
                if (this.complete.room2 == true ){
                    this.oneTwo.setVisible(false);
                }
                else{
                    this.scene.start('room2', {complete: this.complete})
                }
            }
        }
        

    }
}
export default secondLast;