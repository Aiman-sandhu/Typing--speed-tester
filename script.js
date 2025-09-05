const sentenceEl = document.querySelector('.sentence');
const myInput = document.querySelector('#myInput');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const timerEl = document.querySelector('#timer');
const sentences =[
    "JavaScript makes web pages interactive",
  "Typing fast takes practice and focus",
  "Frontend development includes HTML CSS and JS",
  "Always keep learning new programming concepts"
];

function getRandomsentence(){
    const randomSentence = Math.floor(Math.random()*sentences.length);
    sentenceEl.innerText = sentences[randomSentence];
}
//timer function
let time =20;
let timer;
function startTimer(){
    timer= setInterval(() => {
        time--;
        timerEl.innerText = time + 's';
        if(time==0){
            clearInterval(timer);
            checkResult();
        }
    }, 1000);
}
function checkResult(){
    if(myInput.value===sentenceEl.innerText){
        alert("🎉 Correct typing!")
    }else{
        alert("❌ Typing mismatch!")
    }

    //word per minute 
const wordTyped = myInput.value.trim().split("").length;
const wpm = Math.round(wordTyped/(20/60));//time is 20s
alert(`Your speed is ${wpm} WPM`);
}

startBtn.addEventListener('click',()=>{
    getRandomsentence();
    myInput.value='';
    time=20;
    timerEl.innerText=time+'s';
    clearInterval(timer);
    startTimer();
    
});



resetBtn.addEventListener('click',()=>{
    myInput.value='';
    sentenceEl.innerText = "Random text appear here";
    clearInterval(timer);
    time = 20;
    timerEl.innerText = time + 's';
});

//some addition text 


myInput.addEventListener('input',() => {
    const typed = myInput.value;
    const target = sentenceEl.innerText;


    if(target.startsWith(typed)){
        myInput.style.bordercolor="green";
    }else{
        myInput.style.bordercolor = "red";
    }
    
});


