let demo = document.querySelector('#demo');
let style = document.querySelector('#style')

let emp = '';
let string = `
/* 你好，我是一名前端新人
 * 接下来我要演示下我的前端功底
 * 首先准备一个div
 */
#div1{ 
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 然后我变个八卦
 * 注意看
 * 首先把div变成圆
 */
#div1{ 
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳的
 * 一黑一白
 */
#div1{ 
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加入余下的部分
 * 加2个神秘的小球
 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let n = 0;

let step = () => {
    setTimeout(() => {

        if (string[n] === '\n') {
            emp += '<br>'
        }
        else if (string[n] === ' ') {
            emp += '&nbsp;'
        }
        else {
            emp += string[n];
        }

        if (n < string.length - 1) {
            step();
        }

        demo.innerHTML = emp;
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 6999)
        demo.scrollTo(0, 6999)
        n += 1;

    }, 20);
}

step();



