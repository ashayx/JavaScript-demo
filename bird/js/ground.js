class Ground extends GameImage {
	constructor(game) {
		super(game,'ground')
		this.x = 0
		this.y = h - 75
		this.w = 2 * w
		this.h = 75
		this.count = 80
	}

	move() {
		this.count --
		if (this.count == 0) {
			this.x += w
			this.count = 80
		}
		this.x -= 4
		// log(this.count)
	}
}