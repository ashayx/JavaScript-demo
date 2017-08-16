class GameScene {
    constructor(game) {
        this.game = game
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
