<<<<<<< HEAD
// var Back = function (game) {
// 	var o = game.textureByName('back')
=======
var Back = function (game) {
	var o = game.textureByName('back')
>>>>>>> 3c256b3ac6354e682ceb09c739207839d81cc738

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