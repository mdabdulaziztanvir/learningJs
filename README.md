# Logic for the guesssing game

### 1.input nite hobe and number a convert korte hobe


### 2.input jodi number na hoy tahole userke alert korte hobe

**Code Snippet:**
if (isNaN(guess)) {
    window.alert(`please enter a valid Number`);
  } else {
    running = false;
  }

  
### 3.input er beshi ba kom number neya jabena

if (isNaN(guess) || guess > maxNumber || guess < minNumber ) {
    window.alert(`please enter a valid Number`);
  } else {
    running = false;
  }

### 4.input jodi guess er theke kom ba beshi hoye seta check kora shob error handle er por
if (guess < randomNumber) {
      window.alert(`${guess} number is low. Try again...`);
    } else if (guess > randomNumber) {
      window.alert(`${guess} number is High. Try again...`);

### 5.input number jodi thikhoy tahole success message show korte hobe with all attempts
else {
    attempts++;
    if (guess < randomNumber) {
      window.alert(`${guess} number is low. Try again...`);
    } else if (guess > randomNumber) {
      window.alert(`${guess} number is High. Try again...`);
    } else {
      window.alert(
        `Successfull... The right number is ${randomNumber}. You have finished it with ${attempts} attesmpt. Refresh to play again.`
      );
      running = false;
    }

**Shorten Code Snippet: of (5)**
    else {
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



> happyCoding.


