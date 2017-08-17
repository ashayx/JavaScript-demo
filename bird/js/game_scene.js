class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    addElement(img) {
    	this.elements.push(img)
    	log(img)
    }
    draw() {

    	for (var i = 0; i < this.elements.length; i++) {
    		var e = this.elements[i]
    		this.game.drawImage(e)
    	}
    	if (!this.bird.isalive) {
    		// log('die')
	    	this.game.ctx.fillStyle = '#fff'
			this.game.ctx.font = '30px  bolder'
			this.game.ctx.fillText('游戏结束', w/4, 350)
    	}

    }
    update() {

    }
}