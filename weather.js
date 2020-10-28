const COORDS = "coords";

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
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();
