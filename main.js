const minNumber = 1;
const maxNumber = 100;

const randomNumber =
  Math.floor(Math.random() * maxNumber - minNumber + 1) + minNumber;

let attempts = 0;
let guess;

let running = true;

while (running) {
  guess = window.prompt(`Enter a number between ${minNumber} to ${maxNumber}`);

  guess = Number(guess);

  if (isNaN(guess) || guess > maxNumber || guess < minNumber) {
    window.alert(`please enter a valid Number`);
  } else {
    attempts++;

    guess < randomNumber
      ? window.alert(`${guess} number is low. Try again...`)
      : guess > randomNumber
      ? window.alert(`${guess} number is High. Try again...`)
      : (window.alert(
          `Successfull... The right number is ${randomNumber}. You have finished it with ${attempts} attempts. Refresh to play again.`
        ),
        (running = false));
  }
}
