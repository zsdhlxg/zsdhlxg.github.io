/*
let myHeading = document.querySelector('h1'); //对象变量
myHeading.textContent = 'Hello world!'; //textContent属性
*/
/*
document.querySelector('html').onclick = function(){ //对象，属性，匿名函数
    alert('别这样');
}

document.querySelector('html').addEventListener('click', ()=> {
    alert('别这样');
});
*/

function multipy(num1, num2) {
    let result = num1 * num2;
    return result;
}

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/WechatIMG1.jpeg' ){
        myImage.setAttribute('src', 'images/flower.jpeg');
    } else {
        myImage.setAttribute('src', 'images/WechatIMG1.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This is my text page,' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This is my text page,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}