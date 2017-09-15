
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
        }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

// wx.onMenuShareTimeline({
//     title: '2017中阿博览会抢先看', // 分享标题
//     link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//     imgUrl: '../images/min.png', // 分享图标
//     success: function () { 
//         // 用户确认分享后执行的回调函数
//     },
//     cancel: function () { 
//         // 用户取消分享后执行的回调函数
//     }
// });
    
// wx.onMenuShareAppMessage({
//     title: '2017中阿博览会抢先看', // 分享标题
//     desc: '2017中阿博览会抢先看', // 分享描述
//     link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//     imgUrl: '../images/min.png', // 分享图标
//     type: '', // 分享类型,music、video或link，不填默认为link
//     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//     success: function () { 
//         // 用户确认分享后执行的回调函数
//     },
//     cancel: function () { 
//         // 用户取消分享后执行的回调函数
//     }
// });

