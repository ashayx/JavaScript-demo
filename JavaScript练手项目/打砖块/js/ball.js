var Ball = function () {
	var image = imageFromPath('images/ball.png');

	var o = {
		image: image,
		x: 120,
		y: 242 ,
		speedX: 10,
		speedY: 10,
		fired: false,
		}
	o.move = function () {
		if (o.fired) {
			var w = o.image.width;

			if(o.x < 0 || o.x > 400-w){
				o.speedX = -o.speedX;
			}else if (o.y < 0 || o.y > 300-w) {
				o.speedY = -o.speedY;
			}
			o.x += o.speedX;
			o.y -= o.speedY;
		}
	}
	o.fire = function () {
		o.fired = true;
	}
	o.rebound =function () {
		o.speedY *= -1;
		log('碰撞反弹');
	}
	//ball与其他对象碰撞函数
	o.collide = function (object) {
		var x1 = o.x,
			y1 = o.y,
			w1 = o.image.width,
			h1 = o.image.height,
			x2 = object.x,
			y2 = object.y,
			w2 = object.image.width,
			h2 = object.image.height;

		if ( x1 >= x2 && x1 >= x2 + w2) {
        	return false;  
        } else if (x1 <= x2 && x1 + w1 <= x2) {  
            return false;  
        } else if (y1 >= y2 && y1 >= y2 + h2) {  
            return false;  
        } else if (y1 <= y2 && y1 + h1 <= y2) {  
            return false;  
        }  

    	return true;  
	}
	return o;
}