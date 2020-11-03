const weather = document.querySelector(".js-weather");

const API_KEY = "90d10f3bef0044dba835c0557fe001ff";
// 날씨 API : https://home.openweathermap.org/api_keys
// API: 다른 서버로부터 쉽게 데이터를 가져올 수 있는 수단
const COORDS = "coords";
// JS를 이용해서 특정 URL을 호출하는 방법
// 웹사이트로 Request를 보내고 응답을 통해 데이터를 얻을 수 있는데, 가져온 데이터를 새로고침 없이 웹사이트에 적용 가능 => JS가 강력해진 이유

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ) // 데이터를 얻는 방법: fetch() 사용 *따옴표가 아닌 backtick(`) 사용해야
    .then(function (response) {
      // then(): 데이터가 완전히 넘어왔을 때 함수 호출
      return response.json(); // JSON 데이터: JS Object
    })
    .then(function (json) {
      // JSON 데이터가 준비되면 Object 가져옴
      //console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSucces(position) {
  // 좌표 가져오기 성공 시 실행 함수
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    //   latitude: latitude,
    //   longitude: longitude
    // 객체 변수의 이름과 key이름 같게 저장할 때
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  // 좌표 가져오기 실패 시 실행 함수
  console.log("Cant access geo location");
}

function askForCoords() {
  // GPS 요청
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  // 첫째 인자는 요청성공시 콜백함수, 둘째 인자는 요청실패시 콜백함수, 셋째 인자는 옵션
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
    // local storage에 아무것도 없으면 askforCoords 함수 실행
    // -> 위치정보 가져옴 -> handleGeoSuccess 실행, API 호출
  } else {
    const parseCoords = JSON.parse(loadedCoords); // 이미 좌표 값을 가진 경우
    //console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
