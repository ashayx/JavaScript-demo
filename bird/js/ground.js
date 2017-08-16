var Ground = function (game) {
	var o = game.imageByName('ground')

	o.x = 0
	o.y = h - 75
	o.w = 2 * w
	o.h = 75

	return o
}
