class menuScene2 extends Phaser.Scene{

    constructor(){
        super({key:'menu2'})
    }
    preload (){
        
        
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
            key: "down",
            frameRate: 5,
            frames: this.anims.generateFrameNumbers("second", {
                start: 0,
                end: 9
            }),
            loop:false,
            killOnComplete:true
        });
       
    }
    create (){
        this.bg3 = this.add.sprite(460,300,"bg3",0).setDepth(0).setScale(1);
        this.hero = this.add.sprite(-100,442,"hero",5).setDepth(3).setScale(0.1);
        this.second = this.add.sprite(550,480,"second",0).setDepth(2).setScale(0.7);
        
        this.animationPlayed = false;
        let secondText = this.add.text(250,350, 'I try to stop him... I failed... ',
                         { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:20 });
        secondText.setInteractive();
            
        
    }
    update(){
        
        this.hero.play('right',true)
        

        if(this.animationPlayed === false) {
            
            this.animationPlayed = true;
            console.log('TRUE once')
            this.second.play('down',true);
        }
        this.hero.x+=2
        console.log(this.hero.x)
        if (this.hero.x >= 75){
            this.hero.y = 452
        }
        if (this.hero.x >= 95){
            this.hero.y = 475
        }
        if (this.hero.x >= 115){
            this.hero.y = 490
        }
        
        if (this.hero.x ==380){
            
            this.waiting()
            
        }
        
        if (this.hero.x > 670){
            this.hero.y -=15
        }
        if (this.hero.x > 695){
            this.hero.y -=15
        }
        if (this.hero.x > 715){
            this.hero.y -=15
        }if (this.hero.x > 740){
            this.hero.y -=20
        }if (this.hero.x > 775){
            this.hero.y -=25
        }if (this.hero.x > 805){
            this.hero.y -=25
        }
        if (this.hero.x > 845){
            this.hero.y -=25
        }
        if (this.hero.x >900){
            this.scene.start()
        }
    }
    
}
export default menuScene2