// var Back = function (game) {
// 	var o = game.textureByName('back')

// 	o.x = 0
// 	o.y = 0
// 	o.w = w
// 	o.h = h

// 	return o
// }
class Back extends GameImage {
	constructor(game) {
		super(game,'back')
		this.x = 0
		this.y = 0
		this.w = w
		this.h = h
	}

}