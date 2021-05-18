const form = document.querySelector(".js-form"),
     input = form.querySelector("input"),
     greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
     SHOWING_CN = "showing";//그냥 문자열일뿐

function saveName(text){
     //유저네임을 기억하기위한 함수
     localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
     event.preventDefault();
     const currentValue = input.value;
     paintGreeting(currentValue);
     saveName(currentValue);
}

function askForName() {
     //이름을 물어보는 함수
     form.classList.add(SHOWING_CN);//폼이 나타나도록
     form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
     form.classList.remove(SHOWING_CN);//폼은 사라지고
     greeting.classList.add(SHOWING_CN);//인삿말 등장
     greeting.innerText = `Hello ${text}`;
}

function loadName(){
     const currentUser = localStorage.getItem(USER_LS);
     if(currentUser === null){
          //유저가 없을때
          askForName();
     }else{
          //유저가 있을때
          paintGreeting(currentUser);
     }
}

function init(){
     loadName();
}

init();