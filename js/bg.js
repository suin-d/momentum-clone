const body = document.querySelector("body"); // body로 설정

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`; // +1 => Math.random()함수가 0을 줄 수 있기 때문에
  body.prepend(image); // appendChild or prepend?
  image.classList.add("bgImage"); //이미지 추가
}

function genRandom() {
  //자바스크립트에서 random number 생성하는 방법
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
