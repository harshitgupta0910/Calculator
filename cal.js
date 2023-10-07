let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
      const result = eval(displayValue);
      displayValue = result.toString();
      document.getElementById("display").value = displayValue;
  } catch (error) {
      displayValue = "Error";
      document.getElementById("display").value = displayValue;
  }
}

function calculateSquareRoot() {
  try {
      const inputValue = parseFloat(displayValue);
      if (!isNaN(inputValue) && inputValue >= 0) {
          const result = Math.sqrt(inputValue);
          displayValue = result.toString();
          document.getElementById("display").value = displayValue;
      } else {
          throw new Error("Invalid input for square root");
      }
  } catch (error) {
      displayValue = "Error";
      document.getElementById("display").value = displayValue;
  }
}


function calculateSquare() {
  try {
      const inputValue = parseFloat(displayValue);
      if (!isNaN(inputValue)) {
          const result = inputValue * inputValue;
          displayValue = result.toString();
          document.getElementById("display").value = displayValue;
      } else {
          throw new Error("Invalid input for square");
      }
  } catch (error) {
      displayValue = "Error";
      document.getElementById("display").value = displayValue;
  }
}


function calculateFibonacci() {
  try {
      const n = parseFloat(displayValue);
      if (!isNaN(n) && n >= 0) {
          const result = fibonacci(n);
          displayValue = result.toString();
          document.getElementById("display").value = displayValue;
      } else {
          throw new Error("Invalid input for Fibonacci sequence");
      }
  } catch (error) {
      displayValue = "Error";
      document.getElementById("display").value = displayValue;
  }
}

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n == 1) return 0;

  let a = 0, b = 1, temp;
  for (let i = 2; i <= n-1; i++) {
      temp = a + b;
      a = b;
      b = temp;
  }

  return b;
}

function checkPrime() {
  try {
      const inputValue = parseFloat(displayValue);
      if (!isNaN(inputValue) && inputValue > 1) {
          if (isPrime(inputValue)) {
              displayValue = "Prime";
          } else {
              displayValue = "Not Prime";
          }
          document.getElementById("display").value = displayValue;
      } else {
          throw new Error("Invalid input for prime check");
      }
  } catch (error) {
      displayValue = "Error";
      document.getElementById("display").value = displayValue;
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function calculateFactorial() {
  try {
      const inputValue = parseFloat(displayValue);
      if (!isNaN(inputValue)) {
          const result = factorial(inputValue);
          displayValue = result.toString();
          document.getElementById("display").value = displayValue;
      } else {
          throw new Error("Invalid input for factorial");
      }
  } catch (error) {
      displayValue = "Error";
      document.getElementById("display").value = displayValue;
  }
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}


function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}


function calculateTrigFunction(trigFunction) {
    const angleDegrees = parseFloat(document.getElementById('display').value);

    if (isNaN(angleDegrees)) {
        document.getElementById('display').value = "Error";
        return;
    }

    const angleRadians = (angleDegrees * Math.PI) / 180;
    let result;

    switch (trigFunction) {
        case 'sin':
            result = Math.sin(angleRadians).toFixed(4);
            break;
        case 'cos':
            result = Math.cos(angleRadians).toFixed(4);
            break;
        case 'tan':
            if (Math.abs(angleDegrees % 180) === 90) {
                result = "Undefined";
            } else {
                result = Math.tan(angleRadians).toFixed(4);
            }
            break;
        default:
            document.getElementById('display').value = "Error: Invalid function";
            return;
    }

    if (Math.abs(result) < 1e-15) {
        result = 0;
    }

    document.getElementById('display').value = `${trigFunction}(${angleDegrees}°) = ${result}`;
}

