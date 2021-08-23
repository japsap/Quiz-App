// const Click = () => {
//     alert('neshto')
// }

const quizData = [
    {
        question: "When Han Kubrat died?",
        a: "653 AD",
        b: "665 AD",
        c: "658 AD",
        d: "689 AD",
        correct: "b",
    },
    {
        question: "When bulgaria was founded?",
        a: "681",
        b: "861",
        c: "862",
        d: "682",
        correct: "a",
    },
    {
        question: "What is the old capital of Bulgaria?",
        a: "Ohrid",
        b: "Plovdiv",
        c: "Sofia",
        d: "None of the answer above",
        correct: "d",
    },
    {
        question: "Who was the first president in Bulgaria",
        a: "Rosen Plevneliev",
        b: "Rumen Radev",
        c: "Zhelyu Zhelev.",
        d: "Petar Stoyanov",
        correct: "c",
    },
];

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const goToOther = document.getElementById("goToOther");

let currentQuestion = 0;

function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];
    question.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;
}
goToOther.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        alert("You completed the quiz now leave :)");
    }
});

function Validate() {
    if( a || b || c || d.checked ){
        currentQuestion++
    } else{
        alert('Please give us an answer')
    }
}