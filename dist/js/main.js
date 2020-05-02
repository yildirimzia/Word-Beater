window.addEventListener('load',init);


const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');





let time = 5;
let score = 0;
let isplaying;



const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];



function init() {
  showWord(words);
 
  wordInput.addEventListener('input', startMatch);


  setInterval(coundown, 1000)

  setInterval(checkStatus, 1000)
}



function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length) 

  currentWord.innerHTML = words[randIndex]
}
 
function coundown() {
  if(time > 0) {
    time--;
  }else if(time === 0) {
    isplaying = false
  }

  timeDisplay.innerHTML = time
}

function checkStatus() {
  if(!isplaying && time === 0) {
    message.innerHTML = 'Game Over !!';
    score = -1
  }
}

function startMatch() {
  if(matchWords()) {
    isplaying = true;
    time = 6;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if(score === -1) {
    scoreDisplay.innerHTML = 0;
  }else {
    scoreDisplay.innerHTML = score
  }
}

function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct !!';
    return true
  }else {
    message.innerHTML = '';
    return false 
  }
}