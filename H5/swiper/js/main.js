var e = sel =>document.querySelector(sel)
// var music=document.getElementById("music")
var music = e("#music")
// var aud=document.getElementById("aud")
var aud = e("#aud")

music.onclick=function(){
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
    alert('play')
}

var left = e(".left-door")
var right = e(".right-door")
var door = e(".door")
var page = e(".page1")

// door.onclick = function () {
//     setTimeout(function () {
//         swiper.slideTo(1, 0,false)
//     },2000 )
//     left.style.animation = "moveLeft 2s infinite"
//     right.style.animation = "moveRight 2s infinite"
//     page.style.transition = "all 2s"
//     page.style.transform = "scale(1.8)"

//     alert('open')
// }
// door.addEventListener('touchstart',function () {
//     setTimeout(function () {
//         swiper.slideTo(1, 0,false)
//     },2000 )
//     left.style.animation = "moveLeft 2s infinite"
//     right.style.animation = "moveRight 2s infinite"
//     page.style.transition = "all 2s"
//     page.style.transform = "scale(1.8)"

//     alert('open')
// })
