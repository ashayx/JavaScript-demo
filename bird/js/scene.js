

class Scene extends GameScene {
	constructor(game){
		super(game)

		this.back   = new Back(game)
		this.ground = new Ground(game)
		this.bird   = new Bird(game)
		this.tube   = new Tube(game)


		this.setup()
		this.setInput()

		console.log('back',this.back ,'ground',this.ground);
		
	}
	setup() {
		this.addElement(this.back)
		this.addElement(this.ground)
		this.addElement(this.bird)
		this.addElement(this.tube)

		
	}

    update(){
    	if (window.interface == 3) {
    		return
    	}
		this.bird.frameAni()
		if (start) {
	   		this.bird.fallDown()
		}
	   	this.ground.move()
	}

	setInput() {
      	document.addEventListener( 'touchstart', birdJump.bind(this), false );

	}

}

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
     log(this.bird.isalive)
}
