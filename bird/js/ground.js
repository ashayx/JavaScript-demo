class Ground extends GameImage {
	constructor(game) {
		super(game,'ground')
		this.x = 0
		this.y = h - 75
		this.w =  w
		this.h = 75
		this.count = 30
	}

	move() {
		this.count --
		if (this.count == 0) {
			this.x +=  150
			this.count = 30
		}
		this.x -= 5
	}
}