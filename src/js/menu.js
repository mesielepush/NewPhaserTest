class menu extends Phaser.Scene{

    constructor(){
        super({key:'menu'})
    }
    preload (){
        this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('sky', 'assets/skies/sky1.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/particles/sparkle1.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }
    create (){
        this.add.image(400, 300, 'sky');
        this.add.image(400, 300, 'star');
    }
    
    
}
export default menu