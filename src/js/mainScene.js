class mainScene extends Phaser.Scene{

    constructor(){
        super({key:'mainScene'})
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
       
    }
    create (){
        this.bg3 = this.add.sprite(460,300,"bg3",0).setDepth(0).setScale(1);
        this.hero = this.add.sprite(-100,442,"hero",5).setDepth(3).setScale(0.1);
        
    }
    update(){
        
        this.hero.play('right',true)
        this.hero.x+=2
        console.log(this.hero.y)
        if (this.hero.x >= 75){
            this.hero.y = 452
        }
        if (this.hero.x >= 95){
            this.hero.y = 475
        }
        if (this.hero.x >= 115){
            this.hero.y = 490
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
           console.log('slkhs')
        }
    }
    
}
export default mainScene