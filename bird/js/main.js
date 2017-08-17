var _main = function () {
	var images = {
		back : 'resource/bg.png',
		ground : 'resource/ground.png',

		bird1 : 'resource/bird_01.png',
		bird2 : 'resource/bird_02.png',
		bird3 : 'resource/bird_03.png',

		tube1 : 'resource/tube1.png',
		tube2 : 'resource/tube2.png',
	}

	var game = new Game(30,images,function (g) {
		var s =  new Scene(g)
		// var s = new SceneStart(g)
		g.runWithScene(s)
		console.log('游戏开始');
		
	})


	
}
_main()