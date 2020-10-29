const API_KEY = "90d10f3bef0044dba835c0557fe001ff";
const COORDS = "coords";
// JS를 이용해서 특정 URL을 호출하는 방법
// 웹사이트로 Request를 보내고 응답을 통해 데이터를 얻을 수 있는데, 가져온 데이터를 새로고침 없이 웹사이트에 적용 가능 => JS가 강력해진 이유

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  );
}
// 데이터를 얻는 방법: fetch() 사용 *따옴표가 아닌 backtick(`) 사용해야

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
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    //console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
