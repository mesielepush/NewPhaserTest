class start3 extends Phaser.Scene{

    constructor(){
        super({key:'start3'})
    }
    preload (){
        
        
       
    }
    create (){
        
        this.bg3 = this.add.sprite(460,300,"bg3",0).setDepth(0).setScale(1);
        this.hero = this.add.sprite(-100,442,"hero",5).setDepth(3).setScale(0.1);
        this.second = this.add.sprite(550,480,"second",0).setDepth(2).setScale(0.7);
        
        this.animationPlayed = false;
        
        
            
        
    }
    update(){
        
        this.hero.play('right',true)
        this.hero.x+=15
        
        if (this.hero.x >= 75){
            this.hero.y = 452
        }
        if (this.hero.x >= 95){
            this.hero.y = 475
        }
        if (this.hero.x >= 115){
            this.hero.y = 490
        }
        
        if (this.hero.x ==180){
            
            if(this.animationPlayed === false) {
                let secondText = this.add.text(200,270, '...I try to stop him... I failed... ',
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
                this.animationPlayed = true;
                
                this.second.play('down_second',true);
            }
            
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
            window.steps.stop()
            this.scene.start('main')
        }
    }
    
}
export default start3