class menu extends Phaser.Scene{

    constructor(){
        super({key:'menu'})
    }
    preload (){
        this.anims.create({
            key: "houseColors",
            frameRate: 2,
            frames: this.anims.generateFrameNumbers("house", {
                start: 0,
                end: 10
            })
        });
        this.anims.create({
            key: "citiesColors",
            frameRate: 12,
            frames: this.anims.generateFrameNumbers("city", {
                start: 0,
                end: 6
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
        this.city = this.add.sprite(555,350,"city",0).setDepth(0);
        this.house = this.add.sprite(700,350,"house",0).setDepth(1);
        this.blocks = this.add.sprite(476,490,"block",0).setDepth(2); 
        this.hero = this.add.sprite(100,500,"hero",5).setDepth(3).setScale(0.14);
        this.passsage = this.add.sprite(500,300,"passage",0).setDepth(4); 
    }
    update(){
        this.city.play('citiesColors',true);
        this.house.play('houseColors',true);
        this.hero.play('right',true)
        this.hero.x+=2
    }
    
}
export default menu