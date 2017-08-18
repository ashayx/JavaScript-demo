class Tube extends GameImage {
	constructor(game) {
		super(game,'tube1')
		this.x = w/1.5
		this.y = - h/20 * (Math.random() * 10 +3)
		this.w = w/4
		this.h = h
		this.count = 80
	}


}