import constants from "./constants";

class battleTest extends Phaser.Scene{

    constructor(){
        super({key:'battleTest'})
    }
    
    preload(){
        this.load.spritesheet('player',"../src/images/sprites/RPG_assets.png",{
            frameHeight:16,
            frameWidth:16
        });
        this.load.image('dragonblue', "../src/images/dragonblue.png");
        this.load.image('dragonorrange', "../src/images/dragonorrange.png");
        
    }
    create (){
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
        this.scene.launch('UIScene');
    }
    
    
}
export default battleTest;