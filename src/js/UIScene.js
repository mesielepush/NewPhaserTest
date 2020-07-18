import constants from "./constants";


class UIScene extends Phaser.Scene{

    constructor(){
        super({key:'UIScene'})
    }
    
    preload(){
       
        
    }
    create (){
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);        
        this.graphics.strokeRect(2, 350, 306, 250);
        this.graphics.fillRect(2, 350, 306, 250);

        this.graphics.strokeRect(308, 350, 306, 250);
        this.graphics.fillRect(308, 350, 306, 250);
        this.graphics.strokeRect(615, 350, 306, 250);
        this.graphics.fillRect(615, 350, 306, 250);
    }
    update(){
      
       
        
    }
}
export default UIScene;