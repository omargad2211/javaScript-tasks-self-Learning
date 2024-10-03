const calcbtn = document.querySelector(".calc");
const datebtn = document.querySelector("#date");
const resultContainer = document.querySelector(".result");

const getAge = function () {
  resultContainer.innerHTML = "";
  const birthDate = datebtn.value;
  const birth = new Date(birthDate);
  console.log(birth);
  const now = new Date();
  console.log(now);

  let calcYears = now.getFullYear() - birth.getFullYear();
  console.log(calcYears);
  let calcMonths = now.getMonth() - birth.getMonth();
  if (calcMonths < 0) {
    calcYears--;
    calcMonths += 12;
  }
  console.log(calcYears);
  console.log(calcMonths);
  let calcDays = now.getDate() - birth.getDate();
  console.log(calcDays);
  if (calcDays < 0) {
    calcMonths--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    calcDays += previousMonth.getDate();
  }

  const markup = birthDate
    ? `
    <p>
          You are <span>${calcYears}</span> years, <span>${calcMonths}</span> months and
          <span>${calcDays}</span> years old
        </p>
    `
    : "";
  resultContainer.insertAdjacentHTML("beforeend", markup);
};
calcbtn.addEventListener("click", getAge);
