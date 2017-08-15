var Bird = function () {
	var image = imageFromPath('resource/bird.png')

	var o = {
		x : 150,
		y : 200,
		w : 50,
		h : 40,
		sx : [0,36,72], //切片位置
		sy : 0,
		sw : 36,
		sh : 26,
		image : image,
		i : 0,	//切片坐标
		jumph: 45,
		jumped: false,
		g : 0.5,

	}
	o.jump = function () {
		o.jumped = true
		o.y -= o.jumph
		o.g = 0
	}
	o.fallDown = function () {
		// console.log(o.g)
		o.jumped = false
		o.y += o.g
		o.g += 1
		if (o.y > h- 110) {
			o.y = h -110
			o.g = 0
		}
	}
	
	return o
}