import start2 from './start2';
import start1 from './start1';
import start3 from './start3';
import main from './main'
import menu from './menu'
import loading from './loading';
import room1 from './room1';
import room2 from './room2';
import room3 from './room3';

const config = ()=>{
    var config = {
        type: Phaser.AUTO,
        width: 920,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 800 }
            }
        },
        scene: [loading, menu, start1,start2,start3,main,room1,room2,room3]
    };
    
    var game = new Phaser.Game(config);
    
    
    
}; 

export default config
/* this.load.setBaseURL('http://labs.phaser.io'); */