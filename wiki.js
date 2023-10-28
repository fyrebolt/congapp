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

const allQuestions = [
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
  {
    question: "When is the next presidential election?",
    options: ["November 5, 2023", "November 2, 2024", "November 5, 2024"],
    correctAnswer: "c"
  },
  {
    question: "Which government position represents your congressional district?",
    options: ["State governor", "City mayor", "Congressman/congresswoman"],
    correctAnswer: "a"
  },
  {
    question: "What happens on election day?",
    options: ["People cast their vote for who they believe will best represent the people and guide the nation towards prosperity", "Candidates as representatives are elected finally to become candidates of their respective political parties", "Candidates as representatives are elected finally to become candidates of their respective political parties"],
    correctAnswer: "a"
  },
  {
    question: "Why are electoral votes used instead of direct votes?",
    options: ["There is no difference between the two other than wording.", "Electoral votes are a compromise between the federal government and state governments; this guarantees that states with significant populations cannot determine the outcome of the vote", "Direct votes may be counterfeit and not contribute to an accurate vote"],
    correctAnswer: "b"
  },
  {
    question: "How many electoral votes are required to win the election?",
    options: ["270", "271", "269"],
    correctAnswer: "a"
  },
  // {
  //   question: "",
  //   options: ["", "", ""],
  //   correctAnswer: "a"
  // },
  // {
  //   question: "",
  //   options: ["", "", ""],
  //   correctAnswer: "a"
  // },
  // {
  //   question: "",
  //   options: ["", "", ""],
  //   correctAnswer: "a"
  // }
  // Add more questions in a similar format
];

const originalEntries = Object.entries(allQuestions);

// Shuffle the array to randomize the order
shuffleArray(originalEntries);

// Create a new dictionary with the first 3 shuffled items
const questions = Object.fromEntries(originalEntries.slice(0, 3));

// console.log(newDict);

// Shuffle function to randomize the array
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

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


