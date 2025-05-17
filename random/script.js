let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    message.style.color = "orange";
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
    message.style.color = "lightgreen";
  } else if (userGuess < randomNumber) {
    message.textContent = "📉 Too low! Try a higher number.";
    message.style.color = "yellow";
  } else {
    message.textContent = "📈 Too high! Try a lower number.";
    message.style.color = "yellow";
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = '';
}



