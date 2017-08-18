class Scene extends GameScene {
	constructor(game){
		super(game)
		this.scoreCount = 100 //开始距离管子600减去小鸟的x，除以速度
		this.setup()
		this.setInput()
	}
	setup() {
		//初始背景，鸟
		this.back   = new Back(this.game)
		this.bird   = new Bird(this.game)
		//初始管子
		this.tubes = []
		this.tubeColumns = 5
		for (var i = 0; i < this.tubeColumns; i++) {
			var t1 = new Tube(this.game)
			var t2 = new Tube(this.game)
			t1.x = 600 + t1.distance * i 
			t2.x = t1.x
			t2.y = t1.y + t1.h + t1.tubeSpace
			this.addElement(t1)//添加
			this.addElement(t2)
			//奇数管口朝下，偶数朝上
			this.tubes.push(t1)
			this.tubes.push(t2)
		}
		//初始地板
		this.grounds = []
		for (var i = 0; i < 3; i++) {
			var g = new Ground(this.game)
			g.x = i * w
			this.addElement(g)//添加
			this.grounds.push(g)
		}
	}

    update(){
    	// super.update()
    	if (window.interface == 3) {
    		return
    	}
    	//小鸟翅膀动画
    	this.bird.frameAnimation()
    	//地板移动
	   	for (var i = 0; i < 3; i++) {
	   		var g = this.grounds[i]	   		
	   		g.move()
	   	}
    	//如果start，管子开始移动，小鸟落下
		if (start ) {
	   		this.bird.fallDown()
			//管子移动,碰撞检测，小鸟x > 管子 x，y 小于偶数管子 y,  y 大于奇数管子y
			for (var i = 0; i < this.tubeColumns * 2; i++) {
				var t = this.tubes[i]
				t.move()
				let bx = this.bird.x
				let by = this.bird.y
				let bw = this.bird.w
				let bh = this.bird.h
				//碰撞检测
				if (bx + bw > t.x && bx < t.x + t.w) {
					if (i % 2) {
						//下管子
						if ( bx + bw > t.x && by + bh > t.y) {
							this.bird.die()
							audHit.play()
							// log('下',i,bx + bw , t.x , by +bh , t.y )

						}
					}else {
						//上管子
						if ( bx + bw > t.x && by < t.y + t.h) {
							this.bird.die()
							audHit.play()
							// log(i,bx + bw , t.x , by , t.y + t.h)
						}
					}
				}	
			}
			//更新分数
			this.scoreCount --
			if (this.scoreCount == 0) {
				this.scoreCount = Math.floor((w-30)/5)  //管子间距 除以 管子速度
				audPoint.play()
				window.score ++

			}
			if (window.score >= window.maxScore) {
				window.maxScore = window.score
			}
			
	   		if (this.bird.rotation < 90) {
	   			this.bird.rotation += 5
	   		}

		}
	}
	draw() {
		//画背景
		this.back.draw()

		//画管子
		//画地面
		super.draw()

		//画鸟
		this.bird.draw()
		
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
     if (window.interface == 1) {

     	start = true
     	window.interface = 2
     }else if (window.interface == 2) {
     	this.bird.jump()
     	audJump.play()
     }else if (window.interface == 3) {
     	var s = new Scene(this.game)
		this.game.replaceScene(s)
     	this.bird.isalive = true
     	window.interface = 1
     	start = false
     	window.score = 0
     }
}

