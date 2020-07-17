import constants from "./constants";

class room2_passage1_animation extends Phaser.Scene{

    constructor(){
        super({key:'room2_passage1_animation'})
    }
    init(data){
        this.complete = {
            room1: data.room1,
            room2 : data.room2,
            room3 :data.doom3

        }
        this.cat = data.cat
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
            key: "catWalk_animation",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("catWalk", {
                start: 0,
                end: 11
            }),
            repeat:-1
        });
    }
    create (){
        
        this.room2Background = this.add.sprite(386,300,"room2bg",0).setDepth(1).setScale(2.2).setDepth(0);
        this.alert = this.add.image(550,375,'alertWhite').setVisible(false)
        this.redAlert = this.add.image(550,375,'alertRed').setVisible(false)

        this.physics.world.bounds.width = this.room2Background.width*2.5;
        this.physics.world.bounds.height = this.room2Background.height*2.5;

        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");

        this.catMove = this.add.sprite(50,550,'catWalk').setScale(2.5).setVisible(true);
        this.no = this.add.image(840,150,'no_button').setDepth(3).setScale(0.7).setVisible(false)
        this.yes = this.add.image(840,150,'yes_button').setDepth(3).setScale(0.7).setVisible(true)

        this.ex = this.add.text(this.catMove.x,100, 'X: ',this.catMove.x,
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.ys = this.add.text(this.catMove.x,150, 'X: ',this.catMove.y,
            { fontFamily: 'Georgia, "Gouady Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.seenOnce = false
    }
    update(){
        this.room2Background.play("room2back",true);
        this.ex.setText('X: '+this.catMove.x);
       
        this.ys.setText('Y: '+this.catMove.y);
        
        if ( this.catMove.x >250){
            if(this.seenOnce == false){
                this.seenOnce = true
                this.alert = this.add.image(550,375,'alertWhite').setVisible(true)
            }
        }
        if ( this.catMove.x <250){
            if(this.seenOnce == true){
                this.seenOnce = false;
                this.alert.destroy();
                
            }
        }
        if ( this.catMove.x >532){
            this.alert.destroy();
            this.redAlert.setVisible(true);
            this.yes.setVisible(false);
            this.no.setVisible(true)
        }
        if (this.catMove.x == 45){
            console.log('out')
        }
    }
}
export default room2_passage1_animation;

/* this.player.flipX= true; // flip the sprite to the left
this.player.play('walk', true); // play walk animation */