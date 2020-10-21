const clockContainer = document.querySelector(".js-clock"), // js-clock이라는 class이름을 찾아줌 
    clockTitle = clockContainer.querySelector("h1");
// queryselector는 element의 자식을 탐색한다. 이 경우 clock class의 자식을 탐색하고 싶은 것. 

function getTime(){
    const date = new Date(); // 객체 
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();// 작동하지만 새로고침을 해야! 
    clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`; 
    // innerText 객체 안에 텍스트를 넣기 위해 
}

function init(){
    getTime();
}

init();