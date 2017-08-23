$(function () {
	var IMAGE_NUMBER = 2

	var swiper = new Swiper('.S1', {
		slidesPerView: 1,
		spaceBetween : -1,
		freeMode: true,
		freeModeMomentum : false,//缓冲关闭
		// freeModeSticky : true,
		resistanceRatio : 0,//阻力回系数
		onTouchStart:function (swiper,event) {
			console.log(swiper.activeIndex)
			//点击取消展示动画
			$('.show').css({'display': 'none',});

			$('.swiper-slide-active .welcome').css({
				'animation': 'welcome 1s ',
				'animation-delay': '0s',
				'animation-fill-mode': 'forwards'})
		},

	})



	$(".main").click(function(event) {  

		var xx = event.pageX;  
		var yy = event.pageY;   
		  
		console.log(xx/320,yy/520,'x',xx,'y',yy)
	});  

	$('.door').on('click tap',function () {
		
	   $('.left-door').css({'animation':'moveLeft 2s '})
	   $('.right-door').css({'animation':'moveRight 2s '})
	   $('.page1').css({'transition':'all 2s','transform':'scale(1.8)'})

	   setTimeout(function () {
			  swiper.slideTo(0, 0,false)
			  console.log( swiper)

			  $('.show').css({
				  display: 'block',
				  animation: 'show 10s infinite linear',//添加css动画
			  })
			  //复原门大小，位置
			  $('.left-door').css({'animation':'null'})
			  $('.right-door').css({'animation':'null '})
			  $('.page1').css({'transition':'all 0s','transform':'scale(1)','z-index':'0'})
			  //欢迎
			  $('.swiper-slide-active .welcome').css({
				  'animation': 'welcome 1s linear',
				  'animation-delay': '0.3s',
				  'animation-fill-mode': 'forwards'})

	   },2000 )

	   //展示动画之后
	   setTimeout(function () {
			  $('.show').css({ display: 'none',})

			  
	   },0 )
	})

	var music = $("#music")
	var aud = $("#aud")[0]
	
	music.on('click tap',function () {
		if(aud.paused){
			aud.play()
			this.style.background =  "url('images/音乐.png')"
			this.style.backgroundSize =  "100% 100%"
			this.style.animation = "rotateArrow 5s infinite linear" 
		}else{
			aud.pause()
			this.style.background =  "url('images/音乐关闭.png')"
			this.style.backgroundSize =  "100% 100%"
			this.style.animation= "null"
		}
	})


   // $('.show-item-1 ').click(function() {
	  //  $('.show-item-layer-1').css('display', 'block')
   // });
   $('.close').click(function() {
	   $('.show-item-layer-1').css('display', 'none')
	   console.log('关闭')
   });

	for (let i = 1; i < IMAGE_NUMBER + 1; i++) {
		let s = `.item-${i}`
		let l = `.layer-${i}`

		let item = $(s)
		let layer = $(l)
		let close = $('.close')

		console.log(l)
		item.on('click tap', function() {
			layer.css('display', 'block')
		})
		close.on('click tap', function() {
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
        $('.main').css({display: 'block'})
            aud.play()
            document.addEventListener("WeixinJSBridgeReady", function () {
               aud.play()
            }, false)
        console.log('加载完成,播放音乐') 
    });

   // $.ajax({  
   //        //请求方式为get  
   //        type:"GET",  
   //        //json文件位置  
   //        url:"data.json",  
   //        //返回数据格式为json  
   //        dataType: "json",  
   //        //请求成功完成后要执行的方法  
   //        success: function(data){  
   //           console.log(data.people)
   //        }  
   //    })  
	
	   
	
})

