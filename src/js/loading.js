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
        this.load.image('block',"../src/images/blocks.png")


        this.load.spritesheet('house', "../src/images/sprites/houseSprites.png",{
            frameHeight:510,
            frameWidth:511.5
        });
        this.load.spritesheet('hero', "../src/images/sprites/generichero.png",{
            frameHeight:550,
            frameWidth:450
        });
        this.load.spritesheet('city', "../src/images/sprites/citys.png",{
            frameHeight:600,
            frameWidth:920
        })


        this.load.on('progress', (percent) =>{
            loadingBar.fillRect(0,this.game.renderer.height / 2,this.game.renderer.width * percent, 50)
        });
        
    }
    create(){
        this.scene.start(constants.scenes.menu,'Hellow from the loade scene')
       
    }
    
}
export default loading