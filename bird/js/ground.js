var Ground = function () {
	var image = imageFromPath('resource/ground.png')

	var o = {
		x : 0,
		y : h-75,
		w : 2*w,
		h : 75,
		image : image,	
		offset : 5,	
	}
	o.move = function () {
		o.x -= o.offset
	}
	return o
}
