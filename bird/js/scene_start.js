class SceneStart extends GameScene {
    constructor(game) {
        super(game)
        window.addEventListener('keydown',function (e) {
            if (e.key == 'k') {
                var s = Scene(game)
                game.replaceScene(s)
            }
        })
    }

    draw() {
        // console.log(this.game)
        this.game.ctx.fillText('按k开始游戏', 100, 290)
    }

}