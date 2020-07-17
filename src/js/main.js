import constants from "./constants";

class main extends Phaser.Scene{

    constructor(){
        super({key:'main'})
    }
    init(data){
        this.complete = {
            room1: data.room1,
            room2 : data.room2,
        }
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
            key: "up",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 12,
                end: 15
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
    }
    create (){
        this.mainbg = this.add.sprite(460,300,"main",0).setDepth(0).setScale(1);
        this.hero = this.physics.add.sprite(450,500,"hero",12).setDepth(3).setScale(0.2).setImmovable(true);
        this.hero.body.setAllowGravity(false);
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");


        this.ex = this.add.text(this.hero.x,100, 'X: ',this.hero.x,
        { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.ys = this.add.text(this.hero.x,150, 'X: ',this.hero.y,
            { fontFamily: 'Georgia, "Gouady Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});


        /* window.steps.stop() */
    }
    update(){
        
        
        this.ex.setText('X: '+this.hero.x);
       
        this.ys.setText('Y: '+this.hero.y);

        if (this.keyboard.D.isDown === true) {
            
            this.hero.setVelocityX(+constants.hero.speed);
            

        }

        if (this.keyboard.W.isDown === true) {
            
            this.hero.setVelocityY(-constants.hero.speed);
            
        }

        if (this.keyboard.S.isDown === true) {
            
            this.hero.setVelocityY(+constants.hero.speed);
            
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

        if (this.hero.y < 280){
            if (this.hero.x <220 && this.hero.x >103){
                
                this.scene.start('room1',{
                    room1:this.complete.room1,
                    room2:this.complete.room2
                })
            };
            if (this.hero.x >= 399 && this.hero.x <506){
                this.scene.start('secondLast',{
                    room1:this.complete.room1,
                    room2:this.complete.room2
                })
            };
            if (this.hero.x >= 706 && this.hero.x <818){
                this.scene.start('room2',{
                    room1:this.complete.room1,
                    room2:this.complete.room2
                })
            };
            
        }
        if (this.hero.y >506){
            this.hero.y = 506
        }
        if (this.hero.x>873){
            this.hero.x=873
        }
        if (this.hero.x <43){
            this.hero.x = 43
        }

    }
}
export default main;