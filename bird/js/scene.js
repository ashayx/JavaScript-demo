class Scene extends GameScene {
	constructor(game){
		super(game)

		this.back   = new Back(game)
		this.bird   = new Bird(game)
		this.tube   = new Tube(game)

		this.setup()
		this.setInput()

		
	}
	setup() {
		this.addElement(this.back)
		// this.addElement(this.bird)
		this.addElement(this.tube)
		//ground
		this.grounds = []
		for (var i = 0; i < 3; i++) {
			var g = new Ground(this.game)
			g.x = i * w
			this.addElement(g)
			this.grounds.push(g)
		}
	}

    update(){
    	// super.update()
    	if (window.interface == 3) {
    		return
    	}
    	//地板移动
	   	for (var i = 0; i < 3; i++) {
	   		var g = this.grounds[i]
	   		g.move()
	   	}
    	//小鸟
		this.bird.frameAni()
		if (start ) {
	   		this.bird.fallDown()
	   		if (this.bird.rotation < 90) {
	   			this.bird.rotation += 5
	   		}
		}

	}

	setInput() {
      	log('是否支持touch:',"ontouchstart" in document)
      	
      	if ("ontouchstart" in document) {
      		document.addEventListener( 'touchstart', birdJump.bind(this), false )
      	}else {
      		document.addEventListener( 'click', birdJump.bind(this), false )
      	}
	}
}
//不太好的事件绑定
function birdJump(event){
     start = true
     if (window.interface == 1) {
     	window.interface = 2
     }else if (window.interface == 2) {
     	this.bird.jump()
     }else if (window.interface == 3) {
     	var s = new Scene(this.game)
		this.game.replaceScene(s)
     	this.bird.isalive = true
     	window.interface = 1
     }
}

