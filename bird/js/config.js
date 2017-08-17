window.w = screen.availWidth < 640 ? screen.availWidth :640
window.h = screen.availHeight
var myCanvas = document.getElementById('myCanvas')

myCanvas.setAttribute("width", w);
myCanvas.setAttribute("height", h);

window.addEventListener('resize', resizeCanvas,false)
function resizeCanvas() {
	w = screen.availWidth
	h = screen.availHeight
}

var log = console.log.bind(console)

window.interface = 1  //1未开始，2开始，3结束
window.start = false

