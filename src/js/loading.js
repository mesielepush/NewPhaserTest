import constants from './constants'
class loading extends Phaser.Scene {
    constructor(){
        super({key:"loading"});
    }
    preload(){
        let loadingBar = this.add.graphics({
            fillStyle:{
                color: 0xffffff
            }
        });
        

        this.load.image('passage',"../src/images/passage.png");
        this.load.image('block',"../src/images/blocks.png");
        this.load.image('bg3',"../src/images/menu3.png");
        

        


        this.load.spritesheet('house', "../src/images/sprites/houseSprites.png",{
            frameHeight:510,
            frameWidth:511.5
        });
        this.load.spritesheet('hero', "../src/images/sprites/generichero.png",{
            frameHeight:590,
            frameWidth:450
        });
        this.load.spritesheet('city', "../src/images/sprites/citys.png",{
            frameHeight:600,
            frameWidth:920
        });
        this.load.spritesheet('countryhouse', "../src/images/sprites/menuScene0.png",{
            frameHeight:326,
            frameWidth:540
        });
        this.load.spritesheet('second', "../src/images/sprites/second.png",{
            frameHeight:108,
            frameWidth:109
        })



        this.load.on('progress', (percent) =>{
            loadingBar.fillRect(0,this.game.renderer.height / 2,this.game.renderer.width * percent, 50)
        });
        
    }
    create(){
        this.scene.start('menu2','Hellow from the loade scene')
       
    }
    
}
export default loading