const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector("js-toDoList");

const TODOS_LS = "todos"

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        //todo리스트들이 있을 때
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();