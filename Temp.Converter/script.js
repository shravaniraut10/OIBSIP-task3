function convertTemp() {
  let temp = parseFloat(document.getElementById("tempInput").value);
  let unit = document.getElementById("unit").value;
  let result = "";

  if (isNaN(temp)) {
    result = "⚠️ Please enter a valid number!";
  } else {
    if (unit === "celsius") {
      result = `${temp} °C = ${(temp * 9/5 + 32).toFixed(2)} °F | ${(temp + 273.15).toFixed(2)} K`;
    } 
    else if (unit === "fahrenheit") {
      result = `${temp} °F = ${((temp - 32) * 5/9).toFixed(2)} °C | ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K`;
    } 
    else if (unit === "kelvin") {
      result = `${temp} K = ${(temp - 273.15).toFixed(2)} °C | ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }
  }

  document.getElementById("result").innerHTML = result;
}