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
        this.load.image('ground',"../src/images/ground.png");
        this.load.image('floor1',"../src/images/room1_floor1.png");
        this.load.image('bg2',"../src/images/room1_door2.png");
        this.load.image('corral',"../src/images/corral.png");
        this.load.image('corral2',"../src/images/corral1_2.png");
        this.load.image('corral1',"../src/images/corral1.png");
        this.load.image('no_button',"../src/images/buttonNo.png");
        this.load.image('yes_button',"../src/images/buttonYes.png");
        this.load.image('backDoor',"../src/images/backDoors.png");
        this.load.audio('opening','../src/music/inevitable.mp3');
        this.load.audio('steps','../src/music/steps.mp3');
        this.load.image('alertWhite',"../src/images/alertWhite.png");
        this.load.image('alertRed',"../src/images/alertRed.png");
        this.load.image('tube',"../src/images/tube.png");
        this.load.image('aspersor',"../src/images/aspersor.png");
        this.load.image('romm2_official',"../src/images/romm2_official.png");
        this.load.image('catButtonRed',"../src/images/catButtonRed.png");
        this.load.image('catButtonGreen',"../src/images/catButtonGreen.png");
        this.load.image('tuna',"../src/images/tuna.png");
        this.load.image('alertGreen',"../src/images/alertGreen.png");
        this.load.image('soundOn',"../src/images/sound.png");
        this.load.image('soundOff',"../src/images/soundOff.png");
        this.load.image('throne_back',"../src/images/throne_door.png");
        this.load.image('throne_black',"../src/images/throne_door_black.png");





        this.load.spritesheet('boos', "../src/images/sprites/boos.png",{
            frameHeight:207.5,
            frameWidth:132
        });

        this.load.spritesheet('catIdle', "../src/images/sprites/catIdle.png",{
            frameHeight:32,
            frameWidth:31.1
        });
        this.load.spritesheet('catWalk', "../src/images/sprites/catWalk.png",{
            frameHeight:25,
            frameWidth:31.1
        });
        this.load.spritesheet('catStay', "../src/images/sprites/catStay.png",{
            frameHeight:20,
            frameWidth:32
        });
        this.load.spritesheet('catapult', "../src/images/sprites/catapult.png",{
            frameHeight:181,
            frameWidth:214
        });
        this.load.spritesheet('room2bg1', "../src/images/sprites/room2_bg1.png",{
            frameHeight:640,
            frameWidth:960
        });
        this.load.spritesheet('room2bg', "../src/images/sprites/room2bg.png",{
            frameHeight:215,
            frameWidth:512
        });
        this.load.spritesheet('machine', "../src/images/sprites/machine.png",{
            frameHeight:750,
            frameWidth:784
        });
        this.load.spritesheet('th', "../src/images/sprites/th.png",{
            frameHeight:600,
            frameWidth:800
        });
        this.load.spritesheet('chicken', "../src/images/sprites/chicken.png",{
            frameHeight:35,
            frameWidth:32
        });
        this.load.spritesheet('room_1bg', "../src/images/sprites/room1_door1.png",{
            frameHeight:540,
            frameWidth:784
        });
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
        
        this.scene.start('battleTest')
       
    }
    
}
export default loading