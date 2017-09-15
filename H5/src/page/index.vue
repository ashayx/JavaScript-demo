<template>
    <swiper :options="swiperOption" class="swiper-box" ref="mySwiper">
        <!-- page1 -->
        <swiper-slide class="swiper-item">
            <page6></page6>
        </swiper-slide>
        <!-- page2 -->
        <swiper-slide class="swiper-item">
            <!-- <page2></page2> -->
            <page1></page1>
        </swiper-slide>
        <!-- page3 -->
        <swiper-slide class="swiper-item">
            <page3></page3>
        </swiper-slide>
        <!-- page4 -->
        <swiper-slide class="swiper-item">
            <page4></page4>
        </swiper-slide>
        <!-- page5 -->
        <swiper-slide class="swiper-item">
            <page5></page5>
        </swiper-slide>
        <!-- page6 -->
        <swiper-slide class="swiper-item">
            <page6></page6>
        </swiper-slide>
        <!-- page7 -->
        <swiper-slide class="swiper-item">
            <page7></page7>
        </swiper-slide>
        
        <div class="swiper-pagination swiper-pagination-main" slot="pagination"></div>
    </swiper>

</template>


<script>
import page1 from '@/page/video'
// import page1 from '@/page/page1'
import page2 from '@/page/page2'
import page3 from '@/page/page3'
import page4 from '@/page/page4'
import page5 from '@/page/page5'
import page6 from '@/page/page6'
import page7 from '@/page/page7'


export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination-main',
                direction: 'vertical',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 0,
                mousewheelControl: true,
                effect: 'fade',
                onSlideChangeEnd: function(swiper) {
                    if( swiper.activeIndex === 1 ) {
                        $('.page2').css('display', 'block')
                        $('.page2').addClass('animated  zoomInLeft')
                        // console.log('添加第二页动画')
                    }else if( swiper.activeIndex === 2 ) {
                       
                        $('.page3').css('display', 'block')
                        $('.page3 > h1').addClass('animated  zoomInLeft')
                    }
                } 
            }
        }
    },
    created() {
        this.initDisplay()
        // console.log('创建')
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        // console.log( this.swiper.activeIndex)
        // this.swiper.slideTo(3, 1000, false)
    },
    methods: {
        initDisplay() {
            $('.page2').css('display', 'none')
        }
    },
    components: {
        page1,
        page2,
        page3,
        page4,
        page5,
        page6,
        page7,
    }
}
</script>

<style >
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app {
    position: relative;
    height: 100%;
    width: 100%;
}

body {
    background: #eee;
}

.swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
</style>