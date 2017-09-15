<template>
    <div class="container" @click="alet">
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <label class="weui-label">图片上传</label>
                </div>
                <div class="weui-cell__bd">
                    <div class="image-upload-container">
                        <span class="image-container" v-for="(src,index) in baseSrc" :key="src">
                            <img :src="src" v-show="src" class="images" @click="preview(index)">
                            <i @click="delImg(index)">-</i>
                        </span>
                        <span class="add-btn-container" >
                            <input type="file" accept="image/*"  @change="imgUpload" id="file-input">
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 大图预览 -->
        <div class="swiper-container photoShow" v-show="previewShow">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="img in baseSrc" :key='img' @click="previewShow = false">
                    <img :data-src="img" class="swiper-lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </div>
            </div>
            <p class="return-tips">轻触返回</p>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
</template>

<script>
import '@/js/zepto'
import weui from 'weui.js'
import lrz from 'lrz'

export default {
    data() {
        return {
            baseSrc: [],
            imgUrls: [],
            imgCount: 0,
            previewShow: false,

        }
    },
    methods: {
        alet() {
            // alert('sssssss')
        },
        preview(imgIndex) {
            this.previewShow = true
            let index = imgIndex
            setTimeout(() => {
                var photoShow = new Swiper('.photoShow', {
                    pagination: '.swiper-pagination-white',
                    initialSlide: index,
                    paginationClickable: true,
                    preloadImages: false,
                    lazyLoading: true,
                    zoom: true,
                    zoomToggle: false,
                    effect: 'coverflow',
                    loop: true,
                    autoplay: 1500,
                    // observeParents: true,
                    // observer: true
                })
            }, 300)
        },
        delImg(index) {
            this.baseSrc.splice(index, 1)
            this.imgUrls.splice(index, 1)
        },
        imgUpload(e) {
            // console.log(e)
            var _this = this
            _this.imgCount++;
            if (_this.imgCount > 4) {
                weui.alert('只能上传4张图片哦！')
                return
            }
            if (e.target.files[0]) {
                var loading = weui.loading('图片上传中...')
            } else {
                return
            }
            lrz(e.target.files[0], {
                width: 500,
                height: 500,
                quality: 0.7
            }).then(function(rst) {
                    // 处理成功会执行
                    _this.baseSrc.push(rst.base64)
                    // console.log(rst)

                    $.post('http://h5.sjzzimu.com/weixinUpload/uploadImage.action', {
                        base: rst.base64,
                        // encode: 'base64',
                    }, function(response) {
                        console.log(response)
                        // var response = JSON.parse(response)
                        // if (response.errcode == 0) {
                        //     _this.imgUrls.push(response.data.img_path);
                            loading.hide()
                        // } else {
                        //     weui.alert('图片传输失败，请重试')
                        // }
                    })
                })
                .catch(function(err) {
                    console.log(err)
                })
                .always(function() { })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-upload-container {
    flex: 1;
    flex-wrap: wrap;
    text-align: left;
}

.image-upload-container .image-container {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-right: 5px;
}

.image-upload-container .image-container img {
    width: 100%;
    height: 100%;
}

.image-upload-container .image-container i {
    position: absolute;
    width: 14px;
    height: 14px;
    line-height: 14px;
    border-radius: 50%;
    text-align: center;
    background-color: red;
    top: -0.3rem;
    right: -0.2rem;
    color: #fff;
    font-size: 1rem;
}

.image-upload-container .add-btn-container {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    line-height: 40px;
    color: #a7a7a7;
    font-size: 35px;
    font-style: normal;
    font-weight: 100;
    text-align: center;
    vertical-align: top;
    background: url("../assets/add-btn.png") center no-repeat;
    background-size: contain;
}

.image-upload-container .add-btn-container #file-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 45px;
    height: 45px;
    opacity: 0;
    z-index: 10;
}

.swiper-container {
    background: #fff;
    position: absolute;
    z-index: 1000;
    background-color: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.swiper-container .swiper-slide {
    text-align: center;
    background: #fff;
}

.swiper-container .swiper-slide img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
}

.swiper-container p {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translate(-50%);
    font-size: 0.6rem;
    z-index: 1001;
    color:#fff;
}



/*# sourceMappingURL=index.css.map */
</style>

