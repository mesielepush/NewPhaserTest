import constants from './constants'
class loading extends Phaser.Scene {
    constructor(){
        super({key:"loading"});
    }
    preload(){
        
        this.load.image('logo',"../src/images/logo.png")
        
        
    }
    create(){
        this.scene.start(constants.scenes.menu,'Hellow from the loade scene')
       
    }
    
}
export default loading