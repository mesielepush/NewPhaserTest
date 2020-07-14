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
        this.load.image('house0',"../src/images/house0.png");
        this.load.image('logo',"../src/images/logo.png");
        this.load.image('start',"../src/images/starts.png");
        this.load.image('main',"../src/images/main.png");
        this.load.image('room1_passage',"../src/images/room1_passage.png");
        this.load.image('room1_stuff',"../src/images/room1_stuff.png");




        this.load.audio('opening','../src/music/inevitable.mp3');
        this.load.audio('steps','../src/music/steps.mp3');


        this.load.spritesheet('house', "../src/images/sprites/houseSprites.png",{
            frameHeight:510,
            frameWidth:511.5
        });
        this.load.spritesheet('hero', "../src/images/sprites/generichero.png",{
            frameHeight:600,
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
        this.scene.start('room2')
       
    }
    
}
export default loading