const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
//   Uncaught TypeError: Cannot read property 'appendChild' of null 오류 발생
//   -> js-toDoList 앞에 . 안찍어서 ^^!

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li"); //empty li 만들기
  const delBtn = document.createElement("button"); // button 만들기
  delBtn.innerHTML = "❌";
  const span = document.createElement("span"); // span 만들기
  span.innerText = text; // submit function에서 온 값
  li.appendChild(span); // appendChild: 무언가를 father element 안에 넣는 것
  li.appendChild(delBtn); // span & delBtn li 안에 넣기
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
