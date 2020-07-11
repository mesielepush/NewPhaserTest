import menuScene1 from './menuScene1';
import menuScene0 from './menuScene0';
import menuScene2 from './menuScene2';
import loading from './loading';

const config = ()=>{
    var config = {
        type: Phaser.AUTO,
        width: 920,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: [loading, menuScene0,menuScene1,menuScene2]
    };
    
    var game = new Phaser.Game(config);
    
    
    
}; 

export default config
/* this.load.setBaseURL('http://labs.phaser.io'); */