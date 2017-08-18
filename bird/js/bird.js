class Bird extends GameImage {
	constructor(game) {
		super(game,'bird')
		this.game = game 

		this.x = Math.floor(w/2.5)
		this.y = Math.floor(h/3)
		this.w = 54
		this.h = 40
		
		this.g = .5 //加速度
		this.isalive = true
		
		this.frames = []
		this.framecount = 3
		this.frameIndex = 1
		this.rotation = 0
		
		for (var i = 1; i < 4; i++) {
			var name = `bird${i}` 
			var bird = game.textureByName(name)
			this.frames.push(bird)
		}
		this.texture = this.frames[0]
	}

	frameAnimation() {
		this.framecount -- 
    	if (this.framecount == 0) {
    		this.framecount = 3
    		this.frameIndex ++

    		if (this.frameIndex == 3) {
    			this.frameIndex = 0	
    		}
		}
		this.texture = this.frames[this.frameIndex]

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
	jump() {
		this.y -= 50
		this.g = 0
		this.rotation = -60
		if (this.y <= 0) {
			this.y = 0
		}
	}
	fallDown() {
		this.y += this.g
		this.g += .5
		if (this.y >= h - 75 - this.h) {
			this.y = h -75 - this.h
			this.die()
		}
	}
	die() {
		this.isalive = false
		window.interface = 3 
	}
}