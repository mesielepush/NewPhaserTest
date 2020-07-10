class menuScene0 extends Phaser.Scene{

    constructor(){
        super({key:'menu0'})
    }
    preload (){
        this.anims.create({
            key: "country",
            frameRate: 24,
            frames: this.anims.generateFrameNumbers("countryhouse", {
                start: 0,
                end: 79
            })
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
        this.bg = this.add.sprite(460,300,"countryhouse",0).setDepth(0).setScale(1.7);
        this.hero = this.add.sprite(100,380,"hero",5).setDepth(3).setScale(0.2);
        
    }
    update(){
        this.bg.play('country',true)
        this.hero.play('right',true)
        this.hero.x+=2
        if (this.hero.x >= 1100){
            this.scene.start('menu','Hellow from the loade scene')

        }
    }
    
}
export default menuScene0