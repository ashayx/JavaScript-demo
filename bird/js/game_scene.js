class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    addElement(img) {
    	this.elements.push(img)
    }
    draw() {

    	for (var i = 0; i < this.elements.length; i++) {
    		var e = this.elements[i]
    		this.game.drawImage(e)

    	}
    	if (!this.bird.isalive) {
    		// log('die')
	    	this.game.ctx.fillStyle = '#fff'
			this.game.ctx.font = '40px  Fantasy '
            this.game.ctx.fillText(window.score, w/2.1, h/3)
			this.game.ctx.fillText('GAME OVER ', w/4, h/2)
    	}else {
            this.game.ctx.fillStyle = '#fff'
            this.game.ctx.font = '50px  Fantasy '
            this.game.ctx.fillText(window.score, w/2.1, h/3)
        }
        // log(window.score)
    }
    update() {

    }
}