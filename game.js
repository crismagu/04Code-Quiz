const question = document.getElementById("question");
const choice = Array.from(document.getElementsByClassName("choice-text"));
let currentQuestion = {}
let acceptAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [{
    question: "Commonly used data types DO NOT include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers"
},
{

    question: "The condition in an if / else statemtn is enclosed within _____.:",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parenthesis",
    choice4: "square brackets"
},
{
    question: "Arrays in JavaScript can be used to store ______:",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "boolenas",
    choice4: "all of the above"
},
{
    question: "String values must be enclosed within____ when being assigned to variables.",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parentheses"    
}
{
    question: "Arrays in JavaScript can be used to store ______:",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "boolenas",
    choice4: "all of the above"    
}
{
    question: "Arrays in JavaScript can be used to store ______:",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "boolenas",
    choice4: "all of the above"    
}
{
    question: "Arrays in JavaScript can be used to store ______:",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "boolenas",
    choice4: "all of the above"    
}
{
    question: "Arrays in JavaScript can be used to store ______:",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "boolenas",
    choice4: "all of the above"    
}









]