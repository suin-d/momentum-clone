const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// querySelector : 원하는 셀렉터(클래스, 태그, 아이디 등) 찾은 첫번째 것을 가져옴
// querySelectorAll : 찾은 모든 것을 가져오고, array를 줌(찾은 것이 유일한 하나의 클래스명일 때도 array)
// local storage : 작은 JS정보를 유저 컴퓨터에 저장하는 방법

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // event의 preventDefault : 보통 이벤트가 발생하면 root에서 일어나고 document까지 올라가고, 프로그램이 되어진 대로 다른곳으로 가 새로고침 됨. like 거품.
  // 이 event의 기본 동작을 막고자!
  event.preventDefault(); // 이벤트의 기본동작을 막는데 필요한 1단계, 이 parameter의 현재 value 필요
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit); // 사용자가 form에 submit하면 이것을 처리
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  // name을 불러오도록 프로그래밍
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName(); // currentUser가 없으면 user의 이름 호출
  } else {
    // she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
