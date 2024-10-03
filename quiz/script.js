const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", isCorrect: true },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
      { text: "Rome", isCorrect: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Venus", isCorrect: false },
    ],
  },
  {
    question: "What is the largest mammal?",
    answers: [
      { text: "Elephant", isCorrect: false },
      { text: "Blue Whale", isCorrect: true },
      { text: "Giraffe", isCorrect: false },
      { text: "Polar Bear", isCorrect: false },
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: "Mark Twain", isCorrect: false },
      { text: "Harper Lee", isCorrect: true },
      { text: "F. Scott Fitzgerald", isCorrect: false },
      { text: "Ernest Hemingway", isCorrect: false },
    ],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Iron", isCorrect: false },
      { text: "Gold", isCorrect: false },
      { text: "Diamond", isCorrect: true },
      { text: "Silver", isCorrect: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Au", isCorrect: true },
      { text: "Ag", isCorrect: false },
      { text: "Pb", isCorrect: false },
      { text: "Fe", isCorrect: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Claude Monet", isCorrect: false },
    ],
  },
  {
    question: "Which element has the atomic number 1?",
    answers: [
      { text: "Helium", isCorrect: false },
      { text: "Oxygen", isCorrect: false },
      { text: "Hydrogen", isCorrect: true },
      { text: "Nitrogen", isCorrect: false },
    ],
  },
  {
    question: "Which country is the largest by land area?",
    answers: [
      { text: "Canada", isCorrect: false },
      { text: "China", isCorrect: false },
      { text: "Russia", isCorrect: true },
      { text: "USA", isCorrect: false },
    ],
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: [
      { text: "50°C", isCorrect: false },
      { text: "100°C", isCorrect: true },
      { text: "0°C", isCorrect: false },
      { text: "200°C", isCorrect: false },
    ],
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Atlantic", isCorrect: false },
      { text: "Indian", isCorrect: false },
      { text: "Arctic", isCorrect: false },
      { text: "Pacific", isCorrect: true },
    ],
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answers: [
      { text: "Elephant", isCorrect: false },
      { text: "Tiger", isCorrect: false },
      { text: "Lion", isCorrect: true },
      { text: "Cheetah", isCorrect: false },
    ],
  },
  {
    question: "Who discovered gravity?",
    answers: [
      { text: "Albert Einstein", isCorrect: false },
      { text: "Galileo Galilei", isCorrect: false },
      { text: "Isaac Newton", isCorrect: true },
      { text: "Niels Bohr", isCorrect: false },
    ],
  },
  {
    question: "What is the smallest unit of matter?",
    answers: [
      { text: "Atom", isCorrect: true },
      { text: "Molecule", isCorrect: false },
      { text: "Cell", isCorrect: false },
      { text: "Electron", isCorrect: false },
    ],
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "8", isCorrect: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon River", isCorrect: false },
      { text: "Yangtze River", isCorrect: false },
      { text: "Nile River", isCorrect: true },
      { text: "Mississippi River", isCorrect: false },
    ],
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    answers: [
      { text: "Oxygen", isCorrect: false },
      { text: "Carbon Dioxide", isCorrect: false },
      { text: "Nitrogen", isCorrect: true },
      { text: "Hydrogen", isCorrect: false },
    ],
  },
  {
    question: "Who was the first person to step on the Moon?",
    answers: [
      { text: "Buzz Aldrin", isCorrect: false },
      { text: "Yuri Gagarin", isCorrect: false },
      { text: "Neil Armstrong", isCorrect: true },
      { text: "Michael Collins", isCorrect: false },
    ],
  },
  {
    question: "Which country hosted the 2020 Summer Olympics?",
    answers: [
      { text: "Brazil", isCorrect: false },
      { text: "Japan", isCorrect: true },
      { text: "USA", isCorrect: false },
      { text: "Australia", isCorrect: false },
    ],
  },
  {
    question: "What is the speed of light in a vacuum?",
    answers: [
      { text: "300,000 km/s", isCorrect: true },
      { text: "150,000 km/s", isCorrect: false },
      { text: "1,000,000 km/s", isCorrect: false },
      { text: "500,000 km/s", isCorrect: false },
    ],
  },
];

const quizItem = document.querySelector(".quiz");
const nextbtn = document.querySelector(".next");

let current = 0;
let score = 0;

const showQuiz = function () {
  const markUp = `
    <p class="header">${current + 1}- ${questions[current].question}</p>
           ${questions[current].answers.map((answer) =>
             answer.isCorrect
               ? `
             
            <button class="answer" data-correct='true'>${answer.text}</button>
            `
               : `<button class="answer" >${answer.text}</button>`
           )}
    `;
  quizItem?.insertAdjacentHTML("beforeend", markUp);
};

const startQuiz = function () {
  current = 0;
  score = 0;

  showQuiz();
};
startQuiz();

const finalscore = function (score) {
  const markUp = `
<h1>your final score is ${score}/${questions.length} </h1>
    `;
  quizItem?.insertAdjacentHTML("afterend", markUp);
  nextbtn.style.display = "none";
};

const rightAnswer = function (e) {
  const target = e.target.closest(".answer");
  if (!target) return;
  console.log(target);

  const iscorrect = target.dataset.correct === "true";

  if (iscorrect) {
    target.style.backgroundColor = "green";
    score += 1;
  }
  if (!iscorrect) {
    target.style.backgroundColor = "red";
    const correctAnswer = document.querySelector("[data-correct='true']");
    correctAnswer.style.backgroundColor = "green";
  }
  const allButtons = document.querySelectorAll(".answer");
  allButtons.forEach((btn) => {
    btn.disabled = true;
  });
  console.log(score);
};

nextQuiz = function () {
  quizItem.innerHTML = "";
  current += 1;
  current < questions.length ? showQuiz() : finalscore(score);
};

nextbtn?.addEventListener("click", nextQuiz);
quizItem?.addEventListener("click", rightAnswer);
