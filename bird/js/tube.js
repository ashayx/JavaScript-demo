class Tube extends GameImage {
	constructor(game) {
		super(game,'tube')
		this.x = w/1.5
		this.y = - this.game.randomBetwen(340,670)
		this.w = 104
		this.h = 720
		this.tubeSpace = 200  //管口间距
		this.distance = w-30  //管子间距
		this.rotation = 0
			
		
	}
	move() {
		
		if (this.x < -600) {
			this.x +=  this.distance * 5
		}

		this.x -= 5
	}

	draw() {
		var ctx = this.game.ctx
		var w2 = this.w / 2
		var h2 = this.h / 2
		ctx.save()
		ctx.translate(this.x + w2 , this.y + h2) //画布原点
		ctx.rotate(this.rotation * Math.PI / 180) //旋转	
		ctx.translate(-w2 , -h2)//画布原点
		ctx.drawImage(this.texture, 0, 0, this.w, this.h)
		ctx.restore()
	}
	update() {
	
	}
	

}