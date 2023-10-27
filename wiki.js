// const searchButton = document.getElementById('searchButton');
// var bar = document.getElementById("searchBar");
// searchButton.onclick = (event) =>{
//     event.preventDefault()
//     window.alert("button works");
//     bar.style.display = "none";
// }


// /*function hideBar() {
//     var bar = document.getElementById("searchBar");
//     if (checkLogin() == false) {
//         bar.style.display = "none";
//     }

// }*/

function toggleDropdown(button) {
    var content = button.nextElementSibling;
    content.classList.toggle("active");
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const questions = [
  {
    question: "What type of government is the U.S. trying to follow?",
    options: ["Democracy", "Aristocracy", "Tyranny"],
    correctAnswer: "a"
  },
  {
    question: "How are individual voices heard in the U.S. government?",
    options: ["By shouting opinions at the president", "Voting for representatives that would put forth similar demands", "Turning up the volume"],
    correctAnswer: "b"
  },
  // Add more questions in a similar format
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreSpan = document.getElementById("score");

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
  const selectedAnswer = document.querySelector("input[name='answer']:checked");

  if (selectedAnswer && selectedAnswer.value === questions[currentQuestion].correctAnswer) {
      score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
  } else {
      showResults(score);
  }
}

function showQuestion(index) {
  questionContainer.textContent = `Question ${index + 1}: ${questions[index].question}`;
  optionsContainer.innerHTML = "";

  questions[index].options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="answer" value="${String.fromCharCode(97 + optionIndex)}"> ${String.fromCharCode(97 + optionIndex)}) ${option}`;
      optionsContainer.appendChild(label);
  });
}

function showResults(score) {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";
  scoreSpan.textContent = score;
}

showQuestion(currentQuestion);


