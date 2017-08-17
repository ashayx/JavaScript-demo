<<<<<<< HEAD

class Bird extends GameImage {
	constructor(game) {
		super(game,'bird')
		this.game = game 

		this.x = 130
		this.y = 150
		this.w = 50
		this.h = 50

		this.g = .5 //加速度
		this.isalive = true
		
		this.frames = []
		this.framecount = 3
		this.frameIndex = 1
		
		for (var i = 1; i < 4; i++) {
			var name = `bird${i}` 
			// var bird = new GameImage(game,name)
			var bird = game.textureByName(name)
			bird.w = 50
			bird.h = 50
			this.frames.push(bird)
		}
		this.texture = this.frames[0]
		log(this)


=======
var Bird = function (game) {
	var o = game.textureByName(`bird${countList}`)

	o.x = w/2 - 25,
	o.y = 200,
	o.w = 50,
	o.h = 40,
	o.jumph = 45,
	o.jumped = false,
	o.g = 0.5,
	o.isdie = false,

	o.jump = function () {
		o.jumped = true
		o.y -= o.jumph
		o.g = 0
>>>>>>> 3c256b3ac6354e682ceb09c739207839d81cc738
	}

	frameAni() {
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
	jump() {
		this.y -= 50
		this.g = 0
		if (this.y <= 0) {
			this.y = 0
		}
	}
	fallDown() {
		this.y += this.g
		this.g += .5
		if (this.y >= h- 125) {
			this.y = h-125
			this.die()
		}
		// log(this.g)
	}
	die() {
		this.isalive = false
		window.interface = 3 
	}
}