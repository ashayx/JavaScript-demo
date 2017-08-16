
var log = console.log.bind(console);

var imageFromPath = function (path) {
	var img = new Image();
	img.src = path;
	return img;
}