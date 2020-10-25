const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
//   Uncaught TypeError: Cannot read property 'appendChild' of null 오류 발생
//   -> js-toDoList 앞에 . 안찍어서 ^^!

const TODOS_LS = "toDos";

function filterFn(toDo) {
  //filter : array의 모든 아이템을 통해 함수를 실행하고, true인 아이템들만 가지고 새로운 array를 만듬
  return toDo.id === 1; //id가 1일 경우만 return
}

const toDos = [];
//해야할 일 생성 시, toDos array에 추가

function deleteToDo(event) {
  //  console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode; // 지워야할 li
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(filterFn);
  console.log(cleanToDos);
}

function saveToDos() {
  // toDos를 가져와서 로컬에 저장
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li"); //empty li 만들기
  const delBtn = document.createElement("button"); // button 만들기
  const newId = toDos.length + 1;
  const span = document.createElement("span"); // span 만들기
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text; // submit function에서 온 값
  li.appendChild(span); // appendChild: 무언가를 father element 안에 넣는 것
  li.appendChild(delBtn); // span & delBtn li 안에 넣기
  li.id = newId; // id 추가: 버튼 클릭 시, 어떤 li 지워야 하는지 알 수 있게
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj); // push를 써서, 'toDos' array안에 element 'toDoObj' 넣기
  saveToDos(); //push한 이후 호출
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //  console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    //  console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      //  console.log(toDo.text);
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
