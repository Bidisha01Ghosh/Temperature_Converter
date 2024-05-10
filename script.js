document.getElementById('convertBtn').addEventListener('click', function() {
  var temperature = parseFloat(document.getElementById('temperature').value);
  var unit = document.getElementById('unit').value;
  var resultElement = document.getElementById('result');
  var result;

  if (isNaN(temperature)) {
    resultElement.textContent = "Please enter a valid number for temperature.";
    return;
  }

  switch (unit) {
    case 'fahrenheit':
      result = (temperature * 9/5) + 32;
      resultElement.textContent = result.toFixed(2) + " °F";
      break;
    case 'celsius':
      result = (temperature - 32) * 5/9;
      resultElement.textContent = result.toFixed(2) + " °C";
      break;
    case 'kelvin':
      result = temperature + 273.15;
      resultElement.textContent = result.toFixed(2) + " K";
      break;
    default:
      resultElement.textContent = "Invalid unit selected.";
  }
});