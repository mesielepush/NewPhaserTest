import constants from "./constants";

class room2 extends Phaser.Scene{

    constructor(){
        super({key:'room2'})
    }
    preload(){
        
    }
    create (){
        this.add.text(200,270, '...This is ROOM TWOOOOOOOOOO... ',
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
                this.animationPlayed = true;

        /* window.steps.stop() */
    }
    update(){
    }
}
export default room2;