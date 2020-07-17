import constants from "./constants";

class room2 extends Phaser.Scene{

    constructor(){
        super({key:'room2'})
    }
    init(data){
        this.complete = {
            room1: data.room1,
            room2 : data.room2,
            
        }
        if (this.complete.room2==true){
            this.cat = true
        }else{
            this.cat = data.cat
        }
    }
    preload(){
        
        
 
    }
    create (){
        this.room2bg = this.add.sprite(0,0,"romm2_official",0).setDepth(0).setScale(2).setOrigin(0);
        this.hero = this.physics.add.sprite( 400,400,"hero",4).setDepth(0).setScale(0.2).setGravityY(0);
        this.hero.body.setAllowGravity(false);
        this.physics.world.bounds.width = this.room2bg.width*2;
        this.physics.world.bounds.height = this.room2bg.height*2;
        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        this.hero.setCollideWorldBounds(true);
        this.ex = this.add.text(this.hero.x,100, 'X: ',this.hero.x,
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.ys = this.add.text(this.hero.x,150, 'X: ',this.hero.y,
            { fontFamily: 'Georgia, "Gouady Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.catDone = this.add.text(70,380, 'Go to the first room',
        { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.catDone.setVisible(false);
    }
    update(){
        console.log(this.complete)
        
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
        if (this.hero.y < 151){
            this.hero.y = 151
        }
        if (this.hero.y <258){
            if (this.hero.x >694){
                this.hero.x =694
            }
        }
        if (this.hero.y >180 && this.hero.y<226){
            if (this.hero.x >619){
                if(this.cat != true){
                    this.scene.start('room2_passage2',{
                        room1:this.complete.room1,
                        room2:this.complete.room2
                    })
                }else{
                    console.log('nothing to see here')
                }
                
            }
        }
        if (this.hero.x >749){
            if(this.hero.y<380 && this.hero.y >299){
                if (this.cat == true){
                    this.scene.start('room2_passage1_done',{
                        room1:this.complete.room1,
                        room2:this.complete.room2
                    })
                }else{
                    this.scene.start('room2_passage1',{
                        room1:this.complete.room1,
                        room2:this.complete.room2
                    })
                }
                
            }
        }
        if (this.hero.y == 572){
            if (this.cat == true){
                this.catDone.setVisible(true)
            }else{
                this.scene.start('main',{
                    room1:this.complete.room1,
                    room2:this.complete.room2})
            }
            
        }

    }
}
export default room2;

/* this.player.flipX= true; // flip the sprite to the left
this.player.play('walk', true); // play walk animation */