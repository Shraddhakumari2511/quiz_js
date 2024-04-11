const quizData = [
    {
        question:"What is the meaning of name 'SHRADDHA'?",
        option:[
            "Faith",
            "efficient",
            "traveler",
            "moon"
        ],
        correct: 0,
    },
    {
        question:"What is SHRADDHA height",
        option:[
            "5.6",
            "5.4",
            "5.3",
            "5.5"
        ],
        correct: 3,
    },
    {
        question:"SHRADDHA's Primary school name",
        option:[
            "st. nevedita",
            "st. Mount carmel",
            "st. Michel Montessari school",
            "abacus play school"
        ],
        correct: 2,
    },
    {
        question:"What's my zodiac sign",
        option:[
            "aries",
            "leo",
            "virgo",
            "gemini"
        ],
        correct: 1,
    },
    {
        question:"SHRADDHA's favourite book",
        option:[
            "Her last wish",
            "Atomic habits",
            "I too had a love story",
            "Like it happened yesterday"
        ],
        correct: 2,
    },
];
const quiz = document.querySelector("#quiz1");
const ans = document.querySelectorAll(".answer");
const [ques, option1, option2, option3, option4] = document.querySelectorAll("#question, #option_1, #option_2 ,#option_3, #option_4");
const submit = document.querySelector(".btn");

let currQuiz = 0;
let score = 0;


const loadQuiz = () =>{
    const {question, option} = quizData[currQuiz];
    ques.innerText = question;
    option.forEach((curroption)=>(option1.innerText = option[0])  
    );
    option.forEach((curroption)=>(option2.innerText = option[1])  
    );
    option.forEach((curroption)=>(option3.innerText = option[2])  
    );
    option.forEach((curroption)=>(option4.innerText = option[3])  
    );
}
loadQuiz();

const getselected = () =>{
    
    let answerelem = Array.from(ans);
    return answerelem.findIndex((curelem)=> curelem.checked)
};
const deselected = () =>{
    let answerelem = Array.from(ans);
    return answerelem.forEach((curelem) => curelem.checked = false);
};

submit.addEventListener('click', () =>{
    const selected = getselected();
    console.log(selected);

    if(selected === quizData[currQuiz].correct){
        score = score+1;
    }
    currQuiz++;
    if(currQuiz < quizData.length){
        deselected();
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class ="result">
        <h2>your score is: ${score}/${quizData.length}</h2>
        <button class="reload" onclick="location.reload()">play again</button>
        `;
    }
})