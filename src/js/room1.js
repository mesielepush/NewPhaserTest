import constants from "./constants";

class room1 extends Phaser.Scene{

    constructor(){
        super({key:'room1'})
    }
    init(data){
        this.heroCurrentX = data.x
        this.chickensOn = data.chickens
        console.log('DATA OPEN: ',data.open)
        this.openGate = data.open,
        this.complete =  {
            room1: data.room1,
            room2 : data.room2,
            
        }
    }
    preload(){
        
        this.load.image('ground',"../src/images/ground.png");
        this.load.image('room1_stuff',"../src/images/room1_stuff.png");
        if (this.complete.room1 == true){
            this.open = true
        }else{
            this.open = this.openGate || false
        }
        


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
        this.anims.create({
            key: "left_chicken",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("chicken", {
                start: 3,
                end: 5
            }),
            repeat:-1
        });
        this.anims.create({
            key: "right_chicken",
            frameRate: 8,
            frames: this.anims.generateFrameNumbers("chicken", {
                start: 7,
                end: 9
            }),
            repeat:-1
        });
    }
    create (){
        
        this.room1_passage = this.add.image(0,0,"room1_passage").setOrigin(0).setDepth(-1);
        this.room1_stuff = this.add.image(1800,295,'room1_stuff').setDepth(1)
        this.hero = this.physics.add.sprite(this.heroCurrentX || 236,400,"hero",4).setDepth(0).setScale(0.2).setGravityY(0);
        /* window.steps.stop() */
        this.hero.body.setAllowGravity(false)
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
        this.no = this.add.image(3600,450,'no_button').setDepth(3).setScale(0.7).setVisible(true)
        this.yes = this.add.image(3600,150,'yes_button').setDepth(3).setScale(0.7).setVisible(false)
        this.ex = this.add.text(this.hero.x,100, 'X: ',this.hero.x,
            { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
        this.ys = this.add.text(this.hero.x,150, 'X: ',this.hero.y,
            { fontFamily: 'Georgia, "Gouady Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});

        
        if (this.chickensOn == true){
            this.chicken = this.physics.add.sprite(600,351,"chicken",0).setDepth(0).setScale(4);
            this.chickens = this.physics.add.group({ immoavable: true });
            this.chickens.add(this.chicken);
            for (let i = 0; i < 5; i++) { 
                let x = 1500;
                let y = 0;
                switch (Phaser.Math.Between(0, 1)) {
                    case 0: x = Phaser.Math.Between(1500, 2000);
                        break;
                    case 1: y = Phaser.Math.Between(400, this.game.renderer.height);
                }
                this.chickens.add(this.physics.add.sprite(x,y,"chicken",0).setDepth(0).setScale(4).setCollideWorldBounds(true));
            }
        }
    }
    update(){
        this.ex.setText('X: '+this.hero.x);
        this.ys.setText('Y: '+this.hero.y);
        
        if (this.chickensOn==true){
            for (let i = 0; i < this.chickens.getChildren().length; i++) {
                this.physics.accelerateToObject(this.chickens.getChildren()[i], this.hero,50);
                this.chickens.getChildren()[i].body.setAllowGravity(false).setCollideWorldBounds(true)
                if (this.chickens.getChildren()[i].body.velocity.x > 0){
                    this.chickens.getChildren()[i].play('right_chicken',true);
                }
                if (this.chickens.getChildren()[i].body.velocity.x < 0){
                    this.chickens.getChildren()[i].play('left_chicken',true);
                }
                
                            
            }
        }
        if (this.open == true){
            this.yes.setVisible(true);
            this.no.setVisible(false)
        }
        
        
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
            if (this.hero.x >914 && this.hero.x <1000){
                if (this.chickensOn==true){
                    this.scene.start('room1_door1',{
                        chickens:true,
                        room1:this.complete.room1,
                        room2:this.complete.room2})
                }
                else{
                    this.scene.start('room1_door1',{
                        chickens:false,
                        room1:this.complete.room1,
                        room2:this.complete.room2})
                }
            };
            if (this.hero.x <1880 && this.hero.x >1800){
                if (this.open == true){
                    this.add.text(this.hero.x,0, '...Nothing to do here... ',
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
                    
                }else{
                    this.scene.start('room1_door2',{
                        room1:this.complete.room1,
                        room2:this.complete.room2})
                }
                
            };

            if (this.hero.x <2800 && this.hero.x >2740){
                /* console.log('HERE°!!!!!') */
                this.add.text(this.hero.x,0, '...This is DOOR THREE... ',
                { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:40 , backgroundColor:'black',align:'center'});
            };
        }
        if (this.hero.x > 3550){
            if (this.open == true){
                this.scene.start('secondLast', {
                    room1: true,
                    room2:this.complete.room2})
            }
        }
        if (this.hero.x ==45){
            this.scene.start('main')
        }

    }
}
export default room1;