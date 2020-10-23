
const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greetings");


 // querySelector : 원하는 셀렉터(클래스, 태그, 아이디 등) 찾은 첫번째 것을 가져옴 
// querySelectorAll : 찾은 모든 것을 가져오고, array를 줌(찾은 것이 유일한 하나의 클래스명일 때도 array)
// local storage : 작은 JS정보를 유저 컴퓨터에 저장하는 방법 

const User_LS ="currnetUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she is not
    }else{
        // she is 
        paintGreeting(currentUser);
    }

}
 
function init(){
    loadName();
}

init();