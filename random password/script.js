const generate = document.querySelector(".generation");
const copy = document.querySelector(".copy");
const passValue = document.querySelector(".password input");

const capitals = `QWERTYUIOPLKJHGFDSAZXCVBNMDAW`;
const smalls = `qwertyuiooplerkasddfghjklmnbvcxzd`;
const sympols = `!~#$%^&*_-?><./\|`;
const length = 12;
const allChar = capitals + smalls + sympols;

const generatePassword = function () {
  let password = ``;
  password += capitals[Math.floor(Math.random() * capitals.length)];
  password += smalls[Math.floor(Math.random() * smalls.length)];
  password += sympols[Math.floor(Math.random() * sympols.length)];
  while (password.length < length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passValue.value = password;
};

generate.addEventListener("click", generatePassword);

const copyPassword = async function () {
  // 1
  // passValue.select();
  // document.execCommand("copy");

  // 2

  try {
    if (passValue.value) {
      passValue.select();
      await navigator.clipboard.writeText(passValue.value);
    } else {
      alert("No password to copy! Please generate a password first.");
    }
  } catch (err) {
    console.error("Failed to copy password:", err);
    alert("Failed to copy the password. Please try again.");
  }
};

copy.addEventListener("click", copyPassword);
