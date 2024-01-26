const tempValue = document.getElementById("tempValue");
const celciusToFahren = document.getElementById("celciusToFahren");
const fahrenToCelcius = document.getElementById("fahrenToCelcius");

const result = document.getElementById("resutl");

function convert() {
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
}
