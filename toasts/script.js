const btns = document.querySelector(".btns");
const toastsContainer = document.querySelector(".toasts-container");

const successMessage = `successfully created`;
const failureMessage = `failed to create`;
const errorMessage = `invalid toast`;

const toastMaker = function (message) {
  let markUp = `<div class=" toast">${message}</div>`;
  toastsContainer.insertAdjacentHTML("beforeend", markUp);
  const toast = toastsContainer.lastElementChild;
  console.log(message.includes("fail"));
  if (message.includes("success")) toast.classList.add("success");
  if (message.includes("fail")) toast.classList.add("fail");
  if (message.includes("invalid")) toast.classList.add("invalid");

  setTimeout(() => {
    toast.remove();
  }, 3000);
};
