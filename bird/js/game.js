var Game = function () {
	var ctx = myCanvas.getContext('2d');

	var g = {
		ctx : ctx,
	}
	g.drawImage = function (drawImage) {

		g.ctx.drawImage(drawImage.image, drawImage.x, drawImage.y,drawImage.w, drawImage.h)
		
	}
	g.sliceImage = function (drawImage) {
		g.ctx.drawImage(drawImage.image, drawImage.sx[drawImage.i], drawImage.sy,drawImage.sw, drawImage.sh,
										 -18, -13,drawImage.w, drawImage.h)
	}

	return g
}