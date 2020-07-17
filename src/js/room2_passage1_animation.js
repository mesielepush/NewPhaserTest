import constants from "./constants";

class room2_passage1_animation extends Phaser.Scene{

    constructor(){
        super({key:'room2_passage1_animation'})
    }
    init(data){
        this.complete = {
            room1: data.room1,
            room2 : data.room2,
        }
        this.cat = data.cat
    }
    preload(){
        
        this.anims.create({
            key: "catIdle_animation",
            frameRate: 4,
            frames: this.anims.generateFrameNumbers("catIdle", {
                start: 0,
                end: 8
            }),
            repeat:2
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

        this.catMove = this.add.sprite(50,480,'catWalk').setScale(2.5).setVisible(true);
        this.catIdle = this.add.sprite(587,510,'catIdle').setScale(2.5).setVisible(false);
        this.yes = this.add.image(840,150,'yes_button').setDepth(3).setScale(0.7).setVisible(true)
        this.no = this.add.image(840,150,'no_button').setDepth(3).setScale(0.7).setVisible(false)
        this.ex = this.add.text(this.catMove.x,100, 'X: ',this.catMove.x,
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.ys = this.add.text(this.catMove.x,150, 'X: ',this.catMove.y,
            { fontFamily: 'Georgia, "Gouady Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.seenOnce = false
    }
    update(){
        console.log(this.complete)
        
        if (this.catMove.active){
            this.catMove.play('catWalk_animation',true);
            this.catMove.x +=7
        }
        
        
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
            
            this.no.setVisible(true)
        }
        if (this.catMove.x  > 570){
            this.catMove.destroy()
            this.catIdle.setVisible(true);
            this.tuna.destroy()
            this.catIdle.play('catIdle_animation',true).on('animationcomplete', ()=>{
                this.alertGreen.setVisible(true);
                this.yes.setVisible(true);
                this.no.destroy();
                this.catIdle.play('catIdle_animation',true).on('animationcomplete',()=>{
                    this.scene.start('room2',{
                        cat:true,
                        room1:this.complete.room1,
                        room2:this.complete.room2})
                })})
        }
    }
}
export default room2_passage1_animation;

/* this.player.flipX= true; // flip the sprite to the left
this.player.play('walk', true); // play walk animation */