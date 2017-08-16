
class GameImage {
    constructor(game,name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = w
        this.h = h
    }
    draw() {

    }
    update(){

    }
}
class SceneEnd extends GameScene {
    constructor(game) {
        super(game)
        window.addEventListener('keydown',function (e) {
            if (e.key == 'r') {
                var s = new SceneStart(game)
                game.replaceScene(s)
            }
        })

    }

    draw() {
        log('游戏结束')
        // console.log(this.game)
        this.game.ctx.fillText('按r返回开始界面', 100, 290)

    }

}
