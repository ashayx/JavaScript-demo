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
            this.game.ctx.moveTo(150,20);
            this.game.ctx.lineTo(150,170);
	    	this.game.ctx.fillStyle = '#fff'
			this.game.ctx.font = '40px  Fantasy '
            this.game.ctx.textAlign="center"
            this.game.ctx.fillText(window.score, w/2, h/3)
			this.game.ctx.fillText('GAME OVER ', w/2, h/2.4)
            this.game.ctx.fillText('HIGH SCORE ', w/2, h/2)
            this.game.ctx.fillText(window.maxScore, w/2, h/1.5)
    	}else {
            this.game.ctx.fillStyle = '#fff'
            this.game.ctx.font = '50px  Fantasy '
            this.game.ctx.textAlign="center"
            this.game.ctx.fillText(window.score, w/2, h/5)
        }
        // log(window.score)
    }
    update() {

    }
}