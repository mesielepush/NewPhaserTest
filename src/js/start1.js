class start1 extends Phaser.Scene{

    constructor(){
        super({key:'start1'})
    }
    preload (){

        this.steps = this.sound.add('steps',{
            loop: true,
            volume: 2
        }) 
        window.steps = this.steps
        this.steps.play()

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
        this.hero = this.add.sprite(-150,380,"hero",5).setDepth(3).setScale(0.2);
        
    }
    update(){
        this.bg.play('country',true)
        this.hero.play('right',true)
        this.hero.x+=2
        if (this.hero.x >= 1050){
            this.scene.start('start2','Hellow from the loade scene')

        }
    }
    
}
export default start1