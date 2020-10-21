
/* 우리만의 객체 만들기! 
math 객체 (object) 만들기 

console.log()와 같이 calculator.plus()를 갖고싶어 
 */
/* 
const calculator = {
 plus: function(a, b){ // plus: 함수, plus함수는 2개의 인자를 받음(like chicken, potato)
     return a+b;   
 },
 multifly: function(a, b){
     return a*b;
 }, 
 minus: function(a, b){
     return a-b;
 },
 division: function(a, b){
     return a/b;
 },
 squre: function(a, b){
     return a**b;
 }
}


const plus = calculator.plus(5, 5);
const multifly = calculator.multifly(5, 5); 
const minus = calculator.minus(5, 1);
const division = calculator.division(4, 2);
const squre = calculator.squre(2, 2);

console.log(`plus ${plus}, multifly ${multifly}, minus ${minus}, division ${division}, squre ${squre}`);

 */
// 변수는 sayHello를 호출 
//Hello Nicolas you ar 14 years old. undefined. 

/* 
console.log 대신 return 
return 내가 돈을 내면 반드시 잔돈을 받아야 한다. 

greetNicolas는 sayhello 함수의 실행된 결과값과 같다.
== sayHello 함수의 리턴값
그런데 undefined 발생! 
--> function안에 console은 무언갈 찍어 내지만, console.log(greetNicoalas)는 정의되지 않음. 아무것도 반환되지 않은 것. 
--> 정의안된 상태가 되질 않는다면 return해야함! 
단지 하나의 console.log만을 갖게된다. 왜냐면 이 sayhello 함수는 어떤 값을 반환하지만, console.log로 찍어주지는 않으니까. 
 */



 /* 
브라우저에서 우리에세 제공하는 더 많은 함수가 있음
HTML이 JS하고 함께 쓰려면 어떻게 동작하는지 보여주려고함
이미 존재하는 걸 조금만 연습하면 됨.
*/


//const title = document.getElementById("title");
//const title = document.querySelector("#title");

// querySelector 노드의 첫번째 요소를 반환, css 선택자와 비슷 id로 찾고 싶으면 #, 클래스는 . 
// 많이 쓸 것. 
/* 
title.innerHTML = "love is all"; // 이 코드를 지우면 다시 this work! 뜸 
title.style.color = 'white';
document.title ='love is all';
 */
/* 어떻게 HTML을 수정할 수 있는지! 
어떻게 click을 감지할 수 있는지. 
 */


/*
DOM (Document Object Module)
자바스크립트는 HTML에 있는 모든 요소를 가져와서 객체로 바꾼다
 */

// #2.4 Events and event handlers
/* JS는 단지 html과 css를 바꾸기 위해 만들어진 것이 아님 
이벤트에 반응하기 위해서 만들어짐!

이벤트란, 웹사이트에서 발생하는 것드 click, resize, brfore close printing... 
좋은 것은 우리가 이 이벤트를 중간에 가로챌 수 있음 
 */


//window.addEventListener("resize", handleResize); // handleResize() 라고 쓰면 안됨! 지금 바로 호출하라는 뜻이 됨. 아직 호출 안했는데. 난 원하지 않았는데.
// 윈도우 사이즈가 변경될 때, 이 함수를 호출하자. 함수 즉시 호출 안하는 게 중요!   
// JS는 이벤트 받기를 기다리고 있는데, 우리는 분명히 어떤 것인지 말해줘야 한다. (기다리는시간, 웹사이트느리게 만들고)

//폼을 만들거나, 링크 클릭할 때 유용 

/* const title = document.querySelector("#title");

function handleClick(){
    title.style.color ='blue';
} // 클릭이벤트는 한번 클릭해서 파란색으로 바뀌고 나면 그냥 그 상태로 머무름. 다시 안변함. 

title.addEventListener("click", handleClick);
 */
/* 
if(condition){
    block 
} else {
    block
} */
/* 
if("10" === 10){
    console.log("hi");
} else if("10" === "10"){ 
    console.log("lalala");
} else{
    console.log("ho");
} // lalala
 */
//=== 뭔가를 할당하는 게 아니라 체크하는 것. 10이 5와 같은지 

/* block : 자바스크립트 문법 
console.log, alert, 아무거나 와도 되고 
조건이란 그게 뭐든 참을 의미하면 올 수 있음 
 */

/* 
 if(20 > 5 && "nicolas" === "nicolas"){
     console.log("yes");
 }else{
     console.log("no");
 } // yes 
 */
/*  피연산자 
 다른 조건들을 합치게 하는 것 

 && 앞뒤 다 참이어야 함. (And)
 || 둘 중 하나만 참이어도 됨 (Or)
 
 */

/*  const age = prompt("how old are you");

 if(age > 18 && age < 21){
     console.log('you can drink but you should not');
 }else if (age > 21){
     console.log('go ahed');
 }else{
     console.log('too young');
 }
 */
/* const title = document.querySelector("#title");

const BASE_COLOR = "thistle";
const OTHER_COLOR = "#ffdd59";

function handleClick(){
    const currentColor = title.style.color; // 누군가 타이틀을 클릭하면 지금 가진 색을 가져옴 
    if(currentColor === BASE_COLOR){ // 누군가 TITLE을 처음으로 클릭하면 currentColor는 현재 컬러일 것이고, 이게 참이면, title.style.color는 OTHER_COLOR가 될 것.
        title.style.color = OTHER_COLOR; 
    }else{
        title.style.color = BASE_COLOR; // BASE_COLOR 가 아니면 다시 BASE_COLOR로 
    }
} 
function init() {//어플리케이션을 초기화 하는 함수 
    title.style.color =BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init(); // 함수 호출  */

// 이게 로직을 추가하는 방법, 이벤트에 반응하는 방법!

/* 
const title = document.querySelector("#title");

const BASE_COLOR = "thistle";
const OTHER_COLOR = "#ffdd59";

function handleClick(){
    const currentColor = title.style.color; // 누군가 타이틀을 클릭하면 지금 가진 색을 가져옴 
    if(currentColor === BASE_COLOR){ // 누군가 TITLE을 처음으로 클릭하면 currentColor는 현재 컬러일 것이고, 이게 참이면, title.style.color는 OTHER_COLOR가 될 것.
        title.style.color = OTHER_COLOR; 
    }else{
        title.style.color = BASE_COLOR; // BASE_COLOR 가 아니면 다시 BASE_COLOR로 
    }
} 
function init() {//어플리케이션을 초기화 하는 함수 
    title.style.color =BASE_COLOR;
    title.addEventListener("mouseenter", handleClick); //마우스 들어갈때마다 바뀜
    //이런 이벤트들 어디서?  https://developer.mozilla.org/ko/docs/Web/Events
}
init();


function handleOffLine(){
    console.log("Bye"); //Bye 오호 와이파이 꺼지면 콘솔에 찍힘
}

function handleOnLine(){
    console.log("hello Welcome back"); //hello Welcome back
}
window.addEventListener("offline", handleOffLine);
window.addEventListener("online", handleOnLine);

 */
// #2.7 DOM - If else - Function practice Two

/* const title = document.querySelector("#title");
 
const CLICKED_CLASS = "clicked"; // 변수에 저장 

function handleClick(){ // class이름을 얻는 것 
//    const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS);
    // 우리한테 true/false 줌. 만약 title.classList가 click을 포함하고 있으면 true가 됨 

    if(hasClass){ // 이것도 수정해야함 한개 클래스만 체크할 수 있으니까 
        // contains라고 불리는 객체가 필요. value가 존재하는지 체크함. 
        // title.className = ""; // console창 아니고 element창에서 확인 가능 
        title.classList.remove(CLICKED_CLASS);
        //btn class를 제거할 수 없는 우리를 도와줌. 계속 머물고 뒤로 돌아가지 않음. currentClass는 더이상 CLICKED 상태가 아니니까
        //currentClass는 btn clicked 상태 
        /* 만약 hassClass가 CLICKED_CLASS를 가지면 CLICKED_CLASS를 remove 시키고,
        가지고 있지 않으면 add 해주자  */
 /*    } else{
      //title.className = CLICKED_CLASS; 
        //만약 title.className과 CLICKED_CLASS가 같지 않으면 그 className을 줘, 값이 같으면, ""; 
        title.classList.add(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleClick); 
}

init();
 */

/* 
'==' '===' '!=' '!==' 차이 
https://velog.io/@filoscoder/-%EC%99%80-%EC%9D%98-%EC%B0%A8%EC%9D%B4-oak1091tes 
 '==='는 엄격한 비교를 하는 것으로 알려져 있다 ([값 & 자료형] -> true).
*/

/* 
class methods 

classList
add 
remove  */

//toggle은 함수인데 정확히 우리가 했던 같은 일을 해준다. 

const title = document.querySelector("#title");
 
const CLICKED_CLASS = "clicked"; 

function handleClick(){ 
    title.classList.toggle(CLICKED_CLASS); // 클래스가 거기 있는지 체크해서 거기 있으면 ADD 아니면 REMOVE 
    }

function init() {
    title.addEventListener("click", handleClick); 
}

init();
