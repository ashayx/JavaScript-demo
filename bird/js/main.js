var _main = function () {
	var game =  Game()
	var bird =  Bird()
	var bg =  Back()
	var ground =  Ground()
	var start = false
	
	window.addEventListener('touchstart', function (event) {
		bird.jump()
		start = true
		// event.preventDefault()
		console.log(event)
	})
	// window.addEventListener('click', function (event) {
	// 	bird.jump()
	// 	console.log('1')
	// })
	window.addEventListener('keydown', function (event) {
		switch(event.keyCode) {
			case 65:
				bird.x -= 10
				break;
			case 68:
				bird.x += 10
				break;
			case 32:
				bird.jump()
				break;	
		}
		
		// console.log(event.keyCode)
	})
	var birdCount = 3
	var groundCount = 65
	setInterval(function () {
		//update
		birdCount -- 
		if (birdCount == 0) {
			bird.i ++
			
			if ( bird.i == 3) {
				bird.i =0
			}
			birdCount =3
		}

		if(start){
			bird.fallDown()
		}

		groundCount --
		if (groundCount == 0) {
			ground.x = 0
			
			groundCount = 65

		}
			// console.log(ground.x)
		ground.move()
		
		
		//clear
		game.ctx.clearRect(0,0,myCanvas.width,myCanvas.height)

		//draw 
		game.drawImage(bg)
		game.drawImage(ground)	



	
		game.ctx.save();//保存状态
		game.ctx.translate(bird.x,bird.y);//设置画布上的(0,0)位置，也就是旋转的中心点
		game.ctx.rotate(45*Math.PI/180);
		// cgametx.drawImage(img,-img.width/2,-img.height/2);//把图片绘制在旋转的中心点，
		game.sliceImage(bird)
		game.ctx.restore();//恢复状态

			
	}, 1000/30)
}
_main()