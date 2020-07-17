class start2 extends Phaser.Scene{

    constructor(){
        super({key:'start2'})
    }
    preload (){
        this.anims.create({
            key: "houseColors",
            frameRate: 3,
            frames: this.anims.generateFrameNumbers("house", {
                start:0,
                end:7
            }),
        });
        this.anims.create({
            key: "citiesColors",
            frameRate:2,
            frames: this.anims.generateFrameNumbers("city", {
                start: 0,
                end: 6
            }),
            repeat:0
        });
        
        this.cityPlayed = false;
        this.housePlayed = false;

    }
    create (){
        
        this.city = this.add.sprite(555,350,"city",0).setDepth(0);
        this.house = this.add.sprite(700,350,"house",0).setDepth(1);
        this.blocks = this.add.sprite(476,490,"block",0).setDepth(2); 
        this.hero = this.add.sprite(100,525,"hero",5).setDepth(3).setScale(0.14);
        this.passsage = this.add.sprite(500,300,"passage",0).setDepth(4); 
    } 
    update(){
        if(this.cityPlayed === false) {
            
            this.cityPlayed = true;
            this.city.play('citiesColors',true);
        }
        if(this.housePlayed === false) {
            
            this.housePlayed = true;
            this.house.play('houseColors',true).on('animationcomplete',()=>{
                this.add.image(690,364,'house0').setDepth(1);
            })
        }
        
        this.hero.play('right',true)
        this.hero.x+=15
        if (this.hero.x >= 1050){
            this.scene.start('start3','Hellow from the loade scene')

        }
    }
    
}
export default start2