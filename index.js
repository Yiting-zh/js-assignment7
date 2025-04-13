
const word = document.getElementById('word');
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");
const newWordBtn = document.getElementById('new-word-btn');


const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

let randomWord;
let score = 0;
let time = 10;
let timerInterval;




settingsBtn.addEventListener('click', function() {
  settings.classList.toggle('show-settings'); 
});



difficultySelect.addEventListener('change', function () {
  const selectedDifficulty = difficultySelect.value;  
  
  if (selectedDifficulty === 'easy') {
    time = 10; 
  } else if (selectedDifficulty === 'medium') {
    time = 7;  
  } else if (selectedDifficulty === 'hard') {
    time = 4; 
  }
  timeEl.innerText = time + 's';  
});










startGame(); 

function startGame() {
  addWordToDOM(); 
  timerInterval = setInterval(updateTime, 1000); 
}



newWordBtn.addEventListener('click', addWordToDOM);






function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
}


function updateTime() {
  if (time > 0) {
    time--;  
    timeEl.innerText = time + 's';  
  } else {
    gameOver(); 
  }
}


text.addEventListener('input', function() {
  if (text.value.trim().toLowerCase() === word.innerText.toLowerCase()) {  
    updateScore();  
    addTime();     
    addWordToDOM(); 
    text.value = ''; 
  }
});





function updateScore() {
  score++;  
  scoreEl.innerText = score;  
}

function addTime() {
  time += 5; 
  timeEl.innerText = time + 's';  
}




function gameOver() {
  clearInterval(timerInterval); 
  endgameEl.style.display = 'flex';  
  endgameEl.style.flexDirection = 'column';
  endgameEl.innerHTML = `<h2>Game Over</h2>  <p>Your score: ${score}</p> <button id="restartGame">Restart Game</button>`; 
  document.getElementById('restartGame').addEventListener('click', restartGame);
}





function restartGame() {

  const selectedDifficulty = difficultySelect.value;  
    
  if (selectedDifficulty === 'easy') {
      time = 10; 
  } else if (selectedDifficulty === 'medium') {
      time = 7;  
  } else if (selectedDifficulty === 'hard') {
      time = 4; 
  }
  timeEl.innerText = time + 's';  

  score = 0;
  scoreEl.innerText = score;

  endgameEl.style.display = 'none';  
  addWordToDOM(); 
  timerInterval = setInterval(updateTime, 1000); 
}





  
