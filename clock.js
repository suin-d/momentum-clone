const clockContainer = document.querySelector(".js-clock"), // js-clock이라는 class이름 찾아줌
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date(); // just object
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  // 작동하지만 매번 새로고침 필요
  // innerText: 객체 안에 텍스트를 넣기 위해
  // 삼항연산자: 만약 초가 10보다 작으면 첫번째 리턴하고, 그렇지 않으면 초를 그대로 리턴할 것
}

function init() {
  getTime(); // 초기화 과정에서 먼저 시간 얻기
  setInterval(getTime, 1000); // setInterval{함수, 실행할시간간격};
}

init();
