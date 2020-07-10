import menu from './menu';
import loading from './loading';
const config = ()=>{
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: [loading, menu]
    };
    
    var game = new Phaser.Game(config);
    
    
    
}; 

export default config
/* this.load.setBaseURL('http://labs.phaser.io'); */