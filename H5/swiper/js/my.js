$(function () {

    var swiper = new Swiper('.main', {
        grabCursor : true,
        noSwipingClass : 'stop-swiping',//不能滑动的类
        slidesPerView: 1,
        freeMode: true,
        freeModeMomentum : false,//缓冲关闭
        // freeModeSticky : true,
        resistanceRatio : 0,//阻力回系数
        //第二页不能左滑动
        onTouchStart:function (swiper,event) {
            console.log(swiper.activeIndex)
            //点击取消展示动画
            $('.show').css({'display': 'none',});
            $('.swiper-slide-active .welcome').css({
                'animation': 'b 1s linear',
                'animation-delay': '1s',
                'animation-fill-mode': 'forwards'})

            if (swiper.activeIndex == 1) {
                swiper.lockSwipeToPrev();
            }else {
                swiper.unlockSwipeToPrev();
            }
            
        },

    })



    var swiper2 = new Swiper('.layer', {
        grabCursor : true,
        slidesPerView: 1,
        resistanceRatio : 0,//阻力回系数
        direction: 'vertical',
        effect : 'cube',
        loop: true,
        observeParents:true,
        observer:true,
        onTouchStart:function (swiper,event) {
            console.log(swiper.activeIndex)
           }
    })

    $(".main").click(function(event) {  

        var xx = event.pageX;  
        var yy = event.pageY;   
          
        console.log(xx/320,yy/520,'x',xx,'y',yy)
    });  

    $('.door').on('click tap',function () {
        
       $('.left-door').css({'animation':'moveLeft 2s infinite'})
       $('.right-door').css({'animation':'moveRight 2s infinite'})
       $('.page1').css({'transition':'all 2s','transform':'scale(1.8)'})

       setTimeout(function () {
              swiper.slideTo(1, 0,false)

              $('.show').css({
                  display: 'block',
                  animation: 'show 10s infinite ',//添加css动画
              })
              //同上动画
              // $('.show').animate({left:'-900%'}, 9000,function () {
              //     $(this).animate({left:0},1000)
              // })

       },2000 )


       setTimeout(function () {
              $('.show').css({
                  display: 'none',
              });
       },12000 )
    })

    var music = $("#music")
    var aud = $("#aud")[0]
    aud.play()
    music.on('click tap',function () {
        if(aud.paused){
            aud.play()
            this.style.background =  "url('images/musicBtn.png')"
            this.style.backgroundSize =  "100% 100%"
            this.style.animation = "rotateArrow 5s infinite linear" 
        }else{
            aud.pause()
            this.style.background =  "url('images/musicBtnOff.png')"
            this.style.backgroundSize =  "100% 100%"
            this.style.animation= "null"
        }
    })
    //diff扩散
    var shade = function () {
        $('.diff > img:eq(0)').addClass('shade').css({opacity: 1})

        setTimeout(function () {
            $('.diff > img:eq(1)').addClass('shade').css({opacity: 1})
        }, 300)

        setTimeout(function () {
            $('.diff > img:eq(2)').addClass('shade').css({opacity: 1})
        }, 600)

        setTimeout(function () {
            $('.diff > img:eq(0)').removeClass('shade').css({opacity: 0})
            $('.diff > img:eq(1)').removeClass('shade').css({opacity: 0})
            $('.diff > img:eq(2)').removeClass('shade').css({opacity: 0})
        }, 950)
    }
    setInterval(shade, 1000)

   $('.show-item-1 ').click(function() {
       $('.show-item-layer-1').css('display', 'block');
   });
   $('.close').click(function() {
       $('.show-item-layer-1').css('display', 'none');
       console.log('关闭')
   });



})