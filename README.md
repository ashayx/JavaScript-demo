# JavaScript demo
## 一些平常练习用的小案例
-------------------
- [JS滚动论播](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS滚动轮播.html)
- [JS二级菜单](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS多级菜单.html)
- [JS定位导航](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS定位导航.html)
- [JS返回顶部](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS返回顶部.html)
- [JS图片放大镜](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS图片放大镜.html)
- [JS鼠标悬停提示](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS鼠标悬停提示.html)
- [JS改变透明度](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/Js改变透明度.html)
- [JS榜单效果](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS榜单效果.html)
- [JS数字时钟](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS数字时钟.html)
- [JS延迟加载图片](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS延迟加载图片.html)
- [JS延迟加载面向对象](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS延迟加载面向对象.html)
- [JS乘法口诀](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS乘法口诀.html)
- [JS生成迷宫](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS迷宫.html)
- [JS简易计算器](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS计算机.html)
- [JS生成随机验证码](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS生成随机验证码.html)
- [JS移动的小蛇](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS小球移动.html)
- [JS仿苹果菜单](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS仿苹果菜单.html)
- [JS滑动验证](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS滑动验证.html)
- [JS.显示KeyCode](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS.显示KeyCode.html)
- [JS粒子背景](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/JS粒子背景.html)
- [JS打砖块](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/打砖块/index.html)
- [flappy bird](http://peiyingqiang.win/JavaScript-demo/bird/index.html)
- [JS粒子背景](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/重力.html)
- [alabo](http://peiyingqiang.win/JavaScript-demo/H5/alabo/index.html)
- [holiday](http://peiyingqiang.win/JavaScript-demo/H5/holiday/index.html)
## 几个js练习
#### 1.写一个函数，比较两个字符串组成是否相等，例如'abcd' 和'acbd'返回true，'abcd'和'abcf'返回false
    const compare = (a,b)=> a.split('').sort().join('') == b.split('').sort().join('')
#### 2.写个函数多维数组转一维数组[1,[2,[[3,4],5],6]] =>[1, 2, 3, 4, 5, 6]
    const flatten = arr => arr.reduce((acc,val) => acc.concat(Array.isArray(val)? flatten(val):val),[])
#### 3.还有个把数字转换成中文的，12345 => 一万两千三百四十五，最多支持5位数
    const fnc = a => {
	// 最多支持到万位，5位数字
	let arr = a.toString().split('')
	let cnArr = '零一二三四五六七八九'.split('')
	let andArr = '万千百十'.split('')
	let arrLen = arr.length
	let andArrLen = andArr.length
	andArr = arrLen > 1 ? andArr.splice(andArrLen + 1 - arrLen,arrLen - 1) : [] 
	let str = arr.map((v,i) => i < arrLen - 1 ? cnArr[v] + andArr[i] : cnArr[v])
	return str.join('')
    }


------------------------------
# jQuery练习

- [jQuery滚动轮播](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/jQuery滚动轮播.html)
- [jQuery淡入淡出轮播](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/jQuery淡入淡出轮播.html)
- [jQuery定位导航](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/jQuery定位导航.html)
------------
# CSS练习
- [CSS多级菜单](https://ashayx.github.io/JavaScript-demo/JavaScript练手项目/CSS多级菜单.html)
