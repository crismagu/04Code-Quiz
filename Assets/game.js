const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3
    },
    {

        question: "The condition in an if / else statemtn is enclosed within _____.:",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4: "square brackets",
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store ______:",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "boolenas",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "String values must be enclosed within____ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parentheses",
        answer: 4
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choice1: "JavaScript",
        choice2: "terminal / bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4
    }
];

const CORRECT_BONUS = 0;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.floor() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })
}

startGame();