$(function () {

	var IMAGE_NUMBER = 24
	var time = 2000

	var swiper = new Swiper('.S1', {
		slidesPerView: 1,
		spaceBetween : -1,
		freeMode: true,
		freeModeMomentumRatio : 0.12,//缓冲系数
		// freeModeMomentum : false,//缓冲关闭
		// freeModeSticky : true,
		resistanceRatio : 0,//阻力回系数
		// onTouchStart:function (swiper,event) {
		// },

	})
	// $(".main").click(function(event) {  

	// 	var xx = event.pageX;  
	// 	var yy = event.pageY;   
		  
	// 	console.log(xx/320,yy/520,'x',xx,'y',yy)
	// });  

	$('.door').on('touchstart',function () {
	   $('.left-door').css({'animation':'moveLeft 2s '})
	   $('.right-door').css({'animation':'moveRight 2s '})
	   $('.page1').css({'transition':'all 2s','transform':'scale(1.8)'})

	   setTimeout(function () {
			  //复原门大小，位置
			  $('.left-door').css({'animation':'null'})
			  $('.right-door').css({'animation':'null '})
			  $('.page1').css({'transition':'all 0s','transform':'scale(1)','z-index':'0','display':'none'})
			  //欢迎
			  $('.swiper-slide-active .welcome').css({
				  'animation': 'welcome 1s linear',
				  'animation-delay': '0.3s',
				  'animation-fill-mode': 'forwards'})

	   },time )
	})

	var music = $("#music")
	var aud = $("#aud")[0]
	
	music.on('touchstart',function () {
		if(aud.paused){
			aud.play()
			this.style.background =  "url('images/musicon.png')"
			this.style.backgroundSize =  "100% 100%"
			this.style.animation = "rotateArrow 5s infinite linear" 
		}else{
			aud.pause()
			this.style.background =  "url('images/musicoff.png')"
			this.style.backgroundSize =  "100% 100%"
			this.style.animation= "null"
		}
	})
	function audioAutoPlay() {
		aud.play();
		document.addEventListener("WeixinJSBridgeReady", function () {
		 	aud.play();
		}, false);
	}
	audioAutoPlay()


	for (let i = 0; i < IMAGE_NUMBER ; i++) {
		let s = `.item-${i}`
		let l = `.layer-${i}`

		let item = $(s)
		let layer = $(l)
		let close = $('.close')

		item.on(' click', function() {
			layer.css('display', 'block')
		})
		close.on(' click', function() {
			layer.css('display', 'none')
		})
		//初始化多个swiper
		var c = `container${i}`
		let cc = `.container${i}`

		c = new Swiper(cc, {
			slidesPerView: 1,
			resistanceRatio : 0,//阻力回系数
			// direction: 'vertical',
			effect : 'flip',
			loop: true,
			observeParents:true,
			observer:true
		})
	}
   
   $('.main').css('display', 'none')
    Pace.on('done', function(){
    	Pace.stop()
        $('.main').css({display: 'block'})
        $('.logo').css('display', 'none')
        audioAutoPlay()
    })

   $('.share').on('touchstart ', function() {
   		$('.share img').attr({'src': 'images/share2.png'})
   })
   $('.share').on('touchend ', function() {
   		$('.share img').attr({'src': 'images/share.png'})
   		$('.layer-share').css({'display':'block'})
   })

   $('.layer-share').on('touchstart', function() {
   		$('.layer-share').css({'display':'none'})
   })
	

   /*微信白条*/
   $('body').on('touchmove', function (event) {
       event.preventDefault();
   })

})

