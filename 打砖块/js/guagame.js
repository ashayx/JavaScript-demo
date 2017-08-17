var GuaGame = function () {
	var canvas = document.querySelector('#id-canvas');
	var context = canvas.getContext('2d');
	var g = {
		canvas: canvas,
		context: context,
		actions: {},
		keydowns: {},
	};
	//draw
	g.drawImage = function (GuaImage) {
		g.context.drawImage(GuaImage.image, GuaImage.x, GuaImage.y);
	}
	//event
	window.addEventListener('keydown', function (event) {
		g.keydowns[event.key] = true;
		log(event.key)
	})
	
	window.addEventListener('keyup', function (event) {
		g.keydowns[event.key] = false;
	})
	//给按键key绑定函数
	g.registerAction = function (key,callback) {
			g.actions[key] = callback;
	}
	window.fps = 30;
	//timer
	var runloop =function () {
		// log(window.fps)
		//event
		var actions = Object.keys(g.actions);
		for (var i = 0; i < actions.length; i++) {
			var key = actions[i];
			if(g.keydowns[key]){
				// 如果按键被按下, 调用注册的 action
				g.actions[key]();
			}
		}
		//update
		g.update();
		//clear
		context.clearRect(0,0,canvas.width,canvas.height)
		//draw
		g.draw();

		//next
		setTimeout(function (argument) {
			runloop();
		}, 1000/fps)
	}
	setTimeout(function (argument) {
		runloop();
	}, 0.01)
	return g;
}