var Block = function (position) {
	var image = imageFromPath('images/block.png');
	var p = position;
	var o = {
		image: image,
		x: p[0],
		y: p[1],
		alive: true,
	}
	o.kill =function () {
		o.alive = false;
	}

	return o;
}