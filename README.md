# How I have built this
###### Step by step Guide


### HTML for this

```HTML
<form>
      <h1>Temperature Conversion</h1>
      <hr />
      <input type="text" name="" id="tempValue"  value="0" /> <br />

      <input type="radio" name="tempCobversion" id="celciusToFahren" />
      <label for="celciusToFahren">Celcius ➡️ Fahrenheit</label>
      <br />
      <input type="radio" name="tempCobversion" id="fahrenToCelcius" />
      <label for="fahrenToCelcius">Fahrenheit ➡️ Celcius</label>
      <br />
      <button type="submit" id="btnSubmit" onclick="convert()">Convert</button>
      <br />
      <p id="resutl"></p>
    </form>
```

```CSS
Design your code
```


#### Get the needed ID based on HTML

```javascript
const tempValue = document.getElementById("tempValue");
const celciusToFahren = document.getElementById("celciusToFahren");
const fahrenToCelcius = document.getElementById("fahrenToCelcius");

const result = document.getElementById("resutl");
```

#### Create a function that will invoke onClick by Button

```javascript
function convert() {}
```

#### Apply your code with error Handle

```javascript
let temp;

  temp = tempValue.value;

  if (isNaN(temp)) {
    result.textContent = `Not a valid type ${temp}`;
  } else {
    if (celciusToFahren.checked) {
      temp = (temp * 9) / 5 + 32;
      console.log(typeof(temp));
      result.textContent = temp.toFixed(1) + " °F";
    } else if (fahrenToCelcius.checked) {
      temp = (temp - 32) * (5 / 9);
      result.textContent = temp.toFixed(1) + " °C";
    } else {
      result.textContent = "Please select a conversion method";
    }
  }
```



