import constants from "./constants";

class room2_passage1_done extends Phaser.Scene{

    constructor(){
        super({key:'room2_passage1_done'})
    }
    init(data){
        this.complete={
            room1: data.room1,
            room2: data.room2
        }
    }
    preload(){
        this.anims.create({
            key: "room2back",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("room2bg", {
                start: 0,
                end: 7
            }),
            repeat:-1
        });
        
        this.anims.create({
            key: "catIdle_animation",
            frameRate: 4,
            frames: this.anims.generateFrameNumbers("catIdle", {
                start: 0,
                end: 8
            }),
            repeat:2
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
        
        this.room2Background = this.add.sprite(386,300,"room2bg",0).setDepth(1).setScale(2.2).setDepth(0);
        this.alert = this.add.image(550,375,'alertWhite').setVisible(false)
        this.redAlert = this.add.image(550,375,'alertRed').setVisible(false);
        this.alertGreen = this.add.image(550,375,'alertGreen').setVisible(false)

        this.tuna = this.add.image(580,480,'tuna')
        this.physics.world.bounds.width = this.room2Background.width*2.5;
        this.physics.world.bounds.height = this.room2Background.height*2.5;

        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        this.hero = this.physics.add.sprite(70,400,"hero",4).setDepth(0).setScale(0.2).setGravityY(0);
        this.hero.body.setAllowGravity(false);
        this.hero.setCollideWorldBounds(true);
        
        this.catIdle = this.add.sprite(587,510,'catIdle').setScale(2.5).setVisible(false);
        this.yes = this.add.image(840,150,'yes_button').setDepth(3).setScale(0.7).setVisible(true)
        
        this.ex = this.add.text(this.hero.x,100, 'X: ',this.hero.x,
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.ys = this.add.text(this.hero.x,150, 'X: ',this.hero.y,
            { fontFamily: 'Georgia, "Gouady Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        
    }
    update(){
                
        
        this.room2Background.play("room2back",true);
        this.ex.setText('X: '+this.hero.x);
       
        this.ys.setText('Y: '+this.hero.y);
        this.catIdle.setVisible(true);
        this.catIdle.play('catIdle_animation',true)
        this.ex.setText('X: '+this.hero.x);
       
        this.ys.setText('Y: '+this.hero.y);
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
        if (this.hero.x >749){
            if(this.hero.y<380 && this.hero.y >299){
                this.scene.start('room2_passage1')
            }
        }
        if (this.hero.y < 430){
            this.hero.y =430
        }
        if (this.hero.x >965){
            this.scene.start('secondLast',{
                room1:this.complete.room1,
                room2: true})
        }
    }
}
export default room2_passage1_done;

/* this.player.flipX= true; // flip the sprite to the left
this.player.play('walk', true); // play walk animation */