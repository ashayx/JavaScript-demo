var Scene = function (game) {

	var s = {
		game : game,
	}

	var back =  Back(game)
	var ground =  Ground(game)

	var bird1 =  Bird(game)
	var bird2 =  Bird(game)
	var bird3 =  Bird(game)


	var startEvent = function () {
		//interface=1,点击开始，=2时，点击跳，=3时点击跳转场景到第一页
		if (interface == 1) {
			start = true
			console.log('test');
		}else if (interface == 2) {
			bird1.jump()
		}else if (interface == 3) {
			var s = Scene(game)
			game.replaceScene(s)
			start = false
			interface = 1
		}
	}
	window.addEventListener('touchstart', startEvent,false)

	var count = 3
	s.update = function () {
		count --
		if(count == 0){
			count = 3
			countList++
		}
		if (countList > 3) {
			countList = 1
		}
		 b = `bird${countList}`
		// log(b)
		if (start) {
			bird1.fallDown()
			interface = 2
			// log('落下')
		}
		bird1.alive()
		//结束场景
		if (bird1.isdie) {
			interface = 3
			// var end = new SceneEnd(game)
			// game.replaceScene(end)

		}
	}
	s.draw = function () {
		console.log(interface);
		game.drawImage(back)
		game.drawImage(ground)
		game.drawImage(bird1)
		if (!start) {
			game.ctx.fillStyle = '#333'
			game.ctx.font = '30px 微软雅黑 bold'
			game.ctx.fillText('点击开始游戏', w/4, 350)
		}
		if (bird1.isdie) {
			game.ctx.fillStyle = '#333'
			game.ctx.font = '30px 微软雅黑 bold'
			game.ctx.fillText('游戏结束', w/4, 350)
		}
	}

	return s
}