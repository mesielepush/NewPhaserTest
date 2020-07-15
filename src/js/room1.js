import constants from "./constants";

class room1 extends Phaser.Scene{

    constructor(){
        super({key:'room1'})
    }
    preload(){
        
        this.load.image('ground',"../src/images/ground.png");
        this.load.image('room1_stuff',"../src/images/room1_stuff.png");



        this.anims.create({
            key: "left",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 8,
                end: 11
            }),
            repeat:0
        });
        this.anims.create({
            key: "up",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 12,
                end: 15
            }),
            repeat:0
        }); 
        this.anims.create({
            key: "down",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 0,
                end: 3
            }),
            repeat:0
        });
        this.anims.create({
            key: "right",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("hero", {
                start: 4,
                end: 7
            }),
            repeat:0
        }); 
    }
    create (){
        
        this.room1_passage = this.add.image(0,0,"room1_passage").setOrigin(0).setDepth(-1);
        this.room1_stuff = this.add.image(1800,295,'room1_stuff').setDepth(1)
        this.hero = this.physics.add.sprite(0,400,"hero",4).setDepth(0).setScale(0.2).setGravityY(0);
        /* window.steps.stop() */
        this.groundLayer  = this.physics.add.image(0,400,"ground").setOrigin(0).setDepth(-2);

        
        this.physics.world.bounds.width = this.groundLayer.width;
        this.physics.world.bounds.height = this.groundLayer.height;
        
        /* this.hero.setBounce(0.2); */ // our player will bounce from items
        this.hero.setCollideWorldBounds(true); // don't go out of the map
        this.groundLayer.setCollideWorldBounds(true)
        this.physics.add.collider(this.groundLayer, this.hero);

        this.keyboard = this.input.keyboard.addKeys("W,A,S,D");
        this.cameras.main.setBounds(0,0,this.room1_passage.displayWidth,this.room1_passage.displayHeight);
        this.cameras.main.startFollow(this.hero);
        this.physics.world.bounds.width = this.room1_passage.width;
        this.physics.world.bounds.height = this.room1_passage.height;
        
    }
    update(){
        console.log(this.hero.x)
        if (this.keyboard.D.isDown === true) {
            
            this.hero.setVelocityX(+constants.hero.speed_room1);
            

        }

        if (this.keyboard.W.isDown === true) {
            
            this.hero.setVelocityY(-constants.hero.speed_room1);
            
        }

        if (this.keyboard.S.isDown === true) {
            
            this.hero.setVelocityY(+constants.hero.speed_room1);
            
        }

        if (this.keyboard.A.isDown === true) {
            
            this.hero.setVelocityX(-constants.hero.speed_room1);
            
        }
        if (this.keyboard.A.isUp && this.keyboard.D.isUp) { //not moving on X axis
            
            this.hero.setVelocityX(0);
            
        }
        if (this.keyboard.W.isUp && this.keyboard.S.isUp) { //not pressing y movement
            
            this.hero.setVelocityY(0);
            
        }

        if (this.hero.body.velocity.x > 0) { //moving right
            this.hero.play("right", true);
        } else if (this.hero.body.velocity.x < 0) { //moving left
            this.hero.play("left", true);
        } else if (this.hero.body.velocity.y < 0) { //moving up
            this.hero.play("up", true);
        } else if (this.hero.body.velocity.y > 0) { //moving down
            this.hero.play("down", true);
        }
        if (this.hero.y<300){
            this.hero.y=300
        }
        if (this.hero.y<350){
            if (this.hero.x <970 && this.hero.x >900){
                this.scene.start('room1_door1')
            };
            if (this.hero.x <1770 && this.hero.x >1700){
                /* console.log('HERE°!!!!!') */
                this.add.text(this.hero.x,0, '...This is DOOR TWO... ',
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
            };

            if (this.hero.x <2800 && this.hero.x >2740){
                /* console.log('HERE°!!!!!') */
                this.add.text(this.hero.x,0, '...This is DOOR THREE... ',
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
            };
        }

    }
}
export default room1;