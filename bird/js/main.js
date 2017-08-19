var _main = function () {
	var images = {
		back : 'resource/bg.png',
		ground : 'resource/ground.png',

		bird1 : 'resource/bird_01.png',
		bird2 : 'resource/bird_02.png',
		bird3 : 'resource/bird_03.png',

		tube : 'resource/tube.png',
	}

	var game = new Game(40,images,function (g) {
		var s =  new Scene(g)
		// var s = new SceneStart(g)
		g.runWithScene(s)	
	})
	
}
_main()