window.w = screen.availWidth < 520 ? screen.availWidth :520
window.h = document.documentElement.clientHeight
var myCanvas = document.getElementById('myCanvas')

myCanvas.setAttribute("width", w);
myCanvas.setAttribute("height", h);

window.addEventListener('resize', resizeCanvas,false)
function resizeCanvas() {
	window.w = screen.availWidth
	window.h = document.documentElement.clientHeight
}

var log = console.log.bind(console)

window.interface = 1  //1未开始，2开始，3结束
window.start = false
window.score = 0
window.maxScore = 0
