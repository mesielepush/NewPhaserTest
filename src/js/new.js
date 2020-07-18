        const newfunct = ()=>{
            this.soundOn = this.add.image(450,35,'soundOn').setScale(0.3).setVisible(false).setDepth(6)
            this.soundOff = this.add.image(450,35,'soundOff').setScale(0.3).setDepth(6)
            this.soundOn.setInteractive();
            this.soundOff.setInteractive();
    
            this.soundOn.on('pointerup', ()=>{
                this.soundOn.setVisible(false)
                this.soundOff.setVisible(true)
                window.opening.play()
            });
            this.soundOff.on('pointerup', ()=>{
                this.soundOff.setVisible(false)
                this.soundOn.setVisible(true)
                window.opening.stop()
                
            });
    
        }
        export default newfunct
        