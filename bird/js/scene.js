<<<<<<< HEAD


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

=======
class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []

    }
    addElement(img) {
    	this.elements.push(img)
    	log(img,this.elements)
    }
    draw() {
    	for (var i = 0; i < this.elements.length; i++) {
    		var e = this.elements[i]
    		this.game.drawImage(e)
    	}

    }
    update(){

    }
}

class Scene extends GameScene {
	constructor(game){
		super(game)
		this.setup()

	}
	setup() {
		var game = this.game 
		this.back = new GameImage(game,'back')
		this.bird1 = new GameImage(game,'bird1')
		this.bird1.w = 50
		this.bird1.h = 50

		this.addElement(this.back)
		this.addElement(this.bird1)

	}
	update() {
		this.bird1.y ++
>>>>>>> 3c256b3ac6354e682ceb09c739207839d81cc738
	}
	
}

// var Scene = function (game) {

// 	var s = {
// 		game : game,
// 	}

// 	var back =  Back(game)
// 	var ground =  Ground(game)

// 	var bird1 =  Bird(game)
// 	var bird2 =  Bird(game)
// 	var bird3 =  Bird(game)


// 	var startEvent = function () {
// 		//interface=1,点击开始，=2时，点击跳，=3时点击跳转场景到第一页
// 		if (interface == 1) {
// 			start = true
// 			console.log('test');
// 		}else if (interface == 2) {
// 			bird1.jump()
// 		}else if (interface == 3) {
// 			var s = Scene(game)
// 			game.replaceScene(s)
// 			start = false
// 			interface = 1
// 		}
// 	}
// 	window.addEventListener('touchstart', startEvent,false)

// 	var count = 3
// 	s.update = function () {
// 		count --
// 		if(count == 0){
// 			count = 3
// 			countList++
// 		}
// 		if (countList > 3) {
// 			countList = 1
// 		}
// 		 b = `bird${countList}`
// 		// log(b)
// 		if (start) {
// 			bird1.fallDown()
// 			interface = 2
// 			// log('落下')
// 		}
// 		bird1.alive()
// 		//结束场景
// 		if (bird1.isdie) {
// 			interface = 3
// 			// var end = new SceneEnd(game)
// 			// game.replaceScene(end)

// 		}
// 	}
// 	s.draw = function () {
// 		console.log(interface);
// 		game.drawImage(back)
// 		game.drawImage(ground)
// 		game.drawImage(bird1)
// 		if (!start) {
// 			game.ctx.fillStyle = '#333'
// 			game.ctx.font = '30px 微软雅黑 bold'
// 			game.ctx.fillText('点击开始游戏', w/4, 350)
// 		}
// 		if (bird1.isdie) {
// 			game.ctx.fillStyle = '#333'
// 			game.ctx.font = '30px 微软雅黑 bold'
// 			game.ctx.fillText('游戏结束', w/4, 350)
// 		}
// 	}

<<<<<<< HEAD
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
=======
// 	return s
// }
>>>>>>> 3c256b3ac6354e682ceb09c739207839d81cc738
