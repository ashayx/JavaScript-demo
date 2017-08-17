var Bird = function (game) {
	var o = game.imageByName(`bird${countList}`)

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
		if (o.y <= 0) {
			o.y = 0
		}
	}
	o.fallDown = function () {
		// console.log(o.g)
		// o.jumped = false
		o.y += o.g
		o.g += 1
		if (o.y > h- 110) {
			o.y = h -110
			o.g = 0
		}
	}
	o.alive = function () {
		if (o.y == h - 110) {
			o.isdie = true
		}
	}
	
	return o
}