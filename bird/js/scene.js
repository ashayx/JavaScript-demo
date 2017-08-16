var Scene = function (game) {

	var start = false

	var s = {
		game : game,
	}

	var back =  Back(game)
	var ground =  Ground(game)

	var bird1 =  Bird(game)
	var bird2 =  Bird(game)
	var bird3 =  Bird(game)

	window.addEventListener('touchstart', function (event) {
		bird1.jump()
		start = true
	})

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
		}

		if (bird1.y == h - 110) {
			var end = new SceneEnd(game)
			game.replaceScene(end)
		}
	}
	s.draw = function () {
		game.drawImage(back)
		game.drawImage(ground)
		game.drawImage(bird1)
		if (!start) {
			game.ctx.fillStyle = '#333'
			game.ctx.font = '30px 微软雅黑 bold'
			game.ctx.fillText('点击开始游戏', w/4, 350)
		}
	}

	return s
}