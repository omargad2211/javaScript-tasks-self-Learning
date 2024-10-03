const task = document.querySelector(".search input");
const add = document.querySelector(".search button");
const todo = document.querySelector(".todo-list");

const addedTask = function () {
    if (!task.value) alert("Please select a task");
    else {
        const markUp = `
    <li><div><p>${task.value}</p></div><button>x</button></li>
    `;
        todo.insertAdjacentHTML('beforeend', markUp);
        task.value = '';
        saveData();
    }
}

add.addEventListener("click", addedTask);

todo.addEventListener("click", function (e) {
console.log(e.target)
    if (e.target.tagName === 'P') {
        const target = e.target.closest('li');
        console.log(target)
        target.classList.toggle("checked")
        saveData();
    }

    if (e.target.tagName === "BUTTON") {
      const target = e.target.closest("li");
      console.log(target);
        target.classList.toggle("checked");
        target.remove();
        saveData();
    }
})
const saveData = function () {
   localStorage.setItem("todo", todo.innerHTML); 
}
const getData = function () { 
  todo.innerHTML=  localStorage.getItem('todo')
}
getData();

console.log(todo.innerHTML);
