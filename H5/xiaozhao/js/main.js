
		var swiper = new Swiper('.swiper-container', {
			noSwiping : true,
			noSwipingClass : 'stop-swiper ',
			slidesPerView: 1,
			pagination: '.swiper-pagination',
			// effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflow: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows : true
			},
			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				swiperAnimateCache(swiper); //隐藏动画元素 
				swiperAnimate(swiper); //初始化完成开始动画
			  }, 
			  onSlideChangeEnd: function(swiper){ 
				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			  } 
		})

		
		$(function () {
			/*page-1*/
			var page1 = function () {
				$('.page1').on('touchstart',  function() {
					// 手势消失
					$('.click').css('display', 'none');

					$('.cloud1_float > div').css({'animation-duration':'5s','animation-iteration-count':'1','opacity':'0.1'})
					
					$('.move_left').css({'animation':'bounceOutLeft 2s linear ','animation-fill-mode': 'forwards'})
					$('.move_left1').css({'animation':'bounceOutLeft 2s linear ','animation-fill-mode': 'forwards'})
					$('.move_right').css({'animation':'bounceOutRight 2s linear ','animation-fill-mode': 'forwards'})

					
					$('.page1_bg').css({
						'transition':'all 2s',
						'transform':'scale(2.5)', 
						'animation': 'moveMap 0.8s 1s forwards',
					})
					// $('.cloud1_float').css('visibility', 'hidden')
					setTimeout(function () {
						$('.page1_icon').css('display', 'block')
						$('.page1_smallmap').css('display', 'block')
					},2000)	
				})
			}
			

			$('.page1_icon').on('touchstart',  function() {
				$('.page1_icon').css('display', 'none')

				$('.page1').css({
					'transition':'all 1.5s',
					'transform':'scale(2.5)'
				})
				
				setTimeout(function () {
					//跳转第二页
					swiper.slideTo(1, 0,false)
				}, 1000)
			})

			var add =function () {
				$('.page4_item').addClass('animated rollIn')
			}


			/*page2*/
			$('.page2-icon').on('touchstart',  function() {
				$('.page2_bg').css({
					'transition':'all 1.5s',
					'transform':'scale(3.5)', 
				})

				$('.page2-icon').css('display', 'none')

				$('.page2_move_left').css({'animation':'page2moveLeft 1.5s linear ','animation-fill-mode': 'forwards'})
				$('.page2_move_right').css({'animation':'page2moveRight 1.5s linear ','animation-fill-mode': 'forwards'})

				setTimeout(function () {
					swiper.slideTo(2, 0,loadPage3())
				}, 1500)
			})
			
			/*page-3*/
			$('.page3_next').on('touchstart',  function(event) {
				swiper.slideTo(3, 600,add())
			});
			
			//左飘的云
			for (var i = 1; i < 8; i++) {
				var page = `.page3_cloud${i}`
				var ani = `page3Move${i}`
				$(page).css({'animation': ani,'animation-duration': '20s','animation-iteration-count':'infinite'});
			}
			var loadPage3 = function () {

				setTimeout(function () {
					$('.page3_bg').attr('src','images/1.png')
				}, 500)
				setTimeout(function () {
					$('.page3_bg').attr('src','images/2.png')
				}, 1000)
				setTimeout(function () {
					$('.page3_bg').attr('src','images/3.png')
				}, 1500)
				setTimeout(function () {
					$('.page3_bg').attr('src','images/4.png')
				}, 2000)
				setTimeout(function () {
					$('.page3_bg').attr('src','images/5.png')
				}, 2500)
				setTimeout(function () {
					$('.page3_bg').attr('src','images/6.png')
				}, 3000)
				setTimeout(function () {
					$('.page3_bg').attr('src','images/7.png')
					$('.page3-word').css('display','block')
				}, 3500)
		
			
			}


			/*page-5*/

			$('.page4_button2').on('touchstart', function() {
				
				swiper.slideTo(4, 600,false)
				for (var i = 1; i < 5; i++) {
					var item =  `.mid_ani${i}`
					console.log(item);
					if (i % 2 ) {
						$(item).addClass('animated bounceInLeft ')
					} else {
						$(item).addClass('animated bounceInDown ')
					}
				}
			})
		



			/*page-5*/

			



			$('body').on('touchmove', function (event) {
			    event.preventDefault();
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
			
			/*全部加载完显示*/
			$('.main').css('visibility', 'hidden')
			Pace.on('done', function(){
			 	Pace.stop()
			    $('.main').css({'visibility': 'visible'})
			    console.log('start');
			    page1()
			})
		})
