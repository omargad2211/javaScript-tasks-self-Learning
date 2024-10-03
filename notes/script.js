const createbtn = document.querySelector(".create");
const deletebtn = document.querySelector(".delete");
const notesContainer = document.querySelector(".notes-container");

const createNote = function () {
  const markup = `
            <p contenteditable="true" class="input-box">
            <img class="delete" src="./images/delete.png" alt="">
        </p>
    `;
  notesContainer.insertAdjacentHTML("beforeend", markup);
};

createbtn.addEventListener("click", createNote);

const saveData = function () {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

notesContainer.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === `P`) {
    e.target.addEventListener("keydown", saveData);
  }
  if (e.target.tagName === "IMG") {
    e.target.closest(".input-box").remove();
    saveData();
  }
});
const getData = function () {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
getData();
console.log( notesContainer.innerHTML);
