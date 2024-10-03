const qr = document.querySelector(".qr-title");
const qrContainer = document.querySelector(".qr-img");
const generateBtn = document.querySelector(".generate");

console.log(qr, qrContainer, generateBtn);
const generateQr = function () {
  const qrvalue = qr.value;
  qrContainer.innerHTML = ``;
  if (qrvalue) {
    const markup = `
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}" alt="" />
    `;
    qrContainer.insertAdjacentHTML("beforeend", markup);
  }
  if (!qrvalue) {
    qr.classList.add("error");
    setTimeout(() => {
      qr.classList.remove("error");
    }, 1000);
    const markup = `
     <p> nooooooooooooo enter a url or a text </p>
    `;
    qrContainer.insertAdjacentHTML("beforeend", markup);
  }
};
