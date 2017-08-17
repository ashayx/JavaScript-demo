class Game {
	constructor(fps, images, runCallback) {
		window.fps = fps
		this.images = images
		this.scene = null
		this.runCallback = runCallback
		
		this.ctx = myCanvas.getContext('2d');

		this.init()

	}

	drawImage(drawImage) {
		//
		this.ctx.drawImage(drawImage.texture, drawImage.x, drawImage.y,drawImage.w, drawImage.h)
	}

	update() {
		this.scene.update()
	}

	draw() {
		this.scene.draw()
	}

	runloop() {
		let that = this
		//update
	
		this.update()
		//clear
		this.ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
		//draw
		this.draw()
		setTimeout(function () {
			that.runloop()
		}, 1000/fps)
	}

	textureByName(name) {
<<<<<<< HEAD
		var	img = this.images[name]
		// log('textureByName' ,name ,img)
		
		return img 
=======
		var	image = this.images[name]
		log('img by name' ,name ,image)
		
		return image 
>>>>>>> 3c256b3ac6354e682ceb09c739207839d81cc738
	}

	runWithScene(scene) {
		this.scene = scene 
		this.runloop()
	}

	replaceScene(scene) {
		this.scene = scene
	}

	_start() {
		this.runCallback(this)
	}
	init() {
		var g = this
		var loads = []
		//预先载入所有图片
		var names = Object.keys(this.images)
		for (var i = 0; i < names.length; i++) {
			let name = names[i]
			let path = this.images[name]
			let img = new Image()
			img.src = path
			img.onload = function () {
				//存入g.images中
				g.images[name] = img
				//所有图片载入，调用run
				loads.push(1)
<<<<<<< HEAD
				log('全部图片：',names.length,'已加载:',loads.length,img)
=======
				log('全部图片：',names.length,'已加载:',loads.length)
>>>>>>> 3c256b3ac6354e682ceb09c739207839d81cc738

				if (loads.length === names.length) {
					g._start()
				}
			}

		}
	}

}
