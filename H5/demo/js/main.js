
$(function () {

    

    var swiper = new Swiper('.S1', {
        grabCursor : true,
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
                'animation': 'b 1s ',
                'animation-delay': '0s',
                'animation-fill-mode': 'forwards'})
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
        
       $('.left-door').css({'animation':'moveLeft 2s '})
       $('.right-door').css({'animation':'moveRight 2s '})
       $('.page1').css({'transition':'all 2s','transform':'scale(1.8)'})

       setTimeout(function () {
              swiper.slideTo(0, 0,false)

              $('.show').css({
                  display: 'block',
                  animation: 'show 10s infinite linear',//添加css动画
              })
              //复原门大小，位置
              $('.left-door').css({'animation':'null'})
              $('.right-door').css({'animation':'null '})
              $('.page1').css({'transition':'all 0s','transform':'scale(1)','z-index':'0'})

       },2000 )

       //展示动画之后
       setTimeout(function () {
              $('.show').css({ display: 'none',})

              $('.swiper-slide-active .welcome').css({
                  'animation': 'b 1s linear',
                  'animation-delay': '0s',
                  'animation-fill-mode': 'forwards'})
       },12000 )
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
       $('.show-item-layer-1').css('display', 'block')
   });
   $('.close').click(function() {
       $('.show-item-layer-1').css('display', 'none')
       console.log('关闭')
   });
   
   $('.main').css('display', 'none')
    Pace.on('done', function(){
        $('.main').css({display: 'block'})
        aud.play()
        console.log('加载完成,播放音乐') 
    });

})

