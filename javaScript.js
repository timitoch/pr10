let images = ['🍎', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🥥', '🍍'];
let userName = document.getElementById("userName");
let inputName = prompt("Введіть ваше ім'я");
if (inputName) {
  userName.textContent = inputName;
} else {
  userName.textContent = "Гравець";
}

let resultDiv = document.getElementById('result');
let slotItems = document.querySelectorAll('.slot-item');
let message = document.getElementById('message');
let wins = 0;
let round = 0;

function playGame() { 
  if (round < 3) {
    resultDiv.innerHTML = '';
    wins = 0;
 
    for (let i = 0; i < 3; i++) {
      let result = spin();
      for (let j = 0; j < slotItems.length; j++) {
        slotItems[j].textContent = result[j];
      }
      resultDiv.innerHTML += result.join(' | ') + '<br>';
      if (result[0] === result[1] && result[1] === result[2]) {
        wins++;
      } 
    }
    message.innerHTML = `Ви виграли ${wins} разів.`;
    round++;
  }
  if (round >= 3) {
    playButton.disabled = true;
  }
}

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function spin() {
  let result = [];
  for (let i = 0; i < 3; i++) {
    let image = getRandomImage();
    result.push(image);
  }
  return result;
}
