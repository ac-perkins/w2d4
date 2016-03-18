
// DEFINE YOUR VARIABLES HERE
var total = 0;
var figure = document.querySelector("figure");
var currentNumber = '';
var haveIStartedYet = false;

// DEFINE YOUR FUNCTIONS HERE

function handleButtonClick(element) {
    // You can use this to get the value of the button:
    // element.value

    if (Number(element.value) ) {
      // console.log('num');
      figure.innerHTML = figure.innerHTML + element.value;
       currentNumber = currentNumber + element.value;
      //  console.log(total);
    }
    else if (element.value === "0") {
        // console.log ('in 0');
        figure.innerHTML = figure.innerHTML + element.value;
    currentNumber = currentNumber + element.value;
    }


    if (element.value === "+") {
        console.log(currentNumber, total, figure.innerHTML, element.value);
        total = addToTotal(Number(currentNumber), total);
        figure.innerHTML = figure.innerHTML + "+" ;
        console.log(total);
        currentNumber = "";
    }

    if (element.value === "-") {
        console.log(currentNumber, total, figure.innerHTML, element.value);
        if (!haveIStartedYet) {
          total = (Number(currentNumber));
          haveIStartedYet = true;
        } else {
          total = subtractFromTotal(Number(currentNumber), total);
        }
        figure.innerHTML = figure.innerHTML + "-" ;
        console.log(total);
        currentNumber = "";
    }

    if (element.value === "x") {
        // console.log(currentNumber, total, figure.innerHTML, element.value);
        if (!haveIStartedYet) {
          total = (Number(currentNumber));
          haveIStartedYet = true;
          console.log("if");
        }
        else {
          total = multiplyWithTotal(Number(currentNumber), total);
          console.log("else");
        }
        figure.innerHTML = figure.innerHTML + "x" ;
        console.log(total);
        currentNumber = "";
    }

    if (element.value === "/") {
        console.log(currentNumber, total, figure.innerHTML, element.value);
        if (!haveIStartedYet) {
          total = (Number(currentNumber));
          haveIStartedYet = true;
        } else {
          total = divideByTotal(Number(currentNumber), total);
        }
        figure.innerHTML = figure.innerHTML + "/" ;
        console.log(total);
        currentNumber = "";
      }

    if (element.value === ".") {
        figure.innerHTML = figure.innerHTML + '.';
        currentNumber = currentNumber + '.';
    }

    if (element.value === "=") {
      if (figure.innerHTML.indexOf("+") != -1) {
        total = addToTotal(Number(currentNumber), total);
        figure.innerHTML = total;
        currentNumber = '';
      }
      else if (figure.innerHTML.indexOf("-") != -1) {
        total = subtractFromTotal(Number(currentNumber), total);
        figure.innerHTML = total;
        currentNumber = '';
      }
      else if (figure.innerHTML.indexOf("x") != -1) {
        total = multiplyWithTotal(Number(currentNumber), total);
        figure.innerHTML = total;
        currentNumber = total;
        haveIStartedYet = false;
      }
      else if (figure.innerHTML.indexOf("/") != -1) {
        total = divideByTotal(Number(currentNumber), total);
        figure.innerHTML = total;
        currentNumber = total;
        haveIStartedYet = false;
      }
      console.log(total);
    }

    if (element.value === "clear") {
        figure.innerHTML = '';
        currentNumber = '';
        total = 0;
        haveIStartedYet = false;
      }
// console.log(currentNumber);
    }
function addToTotal(x, total){
  return total + Number(x);
}

function subtractFromTotal(x, total) {
  return total - x;
}

function multiplyWithTotal(x, total) {
  return x * total;
}

function divideByTotal (x, total) {
  if (total / x === Infinity) {
    return 0;
  }
  else {
    return total / x;
  }
}

/**
 * This event handler will fire for ALL button clicks. You need to decide
 * what to do based on which button was clicked in the handler function
 * defined above.
 *
 * DO NOT CHANGE THIS!
 */
[].slice.call(document.querySelectorAll('button')).forEach(function(element) {
    element.addEventListener('click', function() {
        handleButtonClick(this);
    });
});



/** **************************************************************
 * These are our tests. If any of them fail you will see a message
 * in the developer tools "Console" - in which case the assignment
 * will NOT be considered complete!
 *
 *                  DO NOT CHANGE THESE LINES
 ****************************************************************/

document.querySelector('.run-tests').addEventListener('click', function() {
    var testOutput = document.querySelector('figure');

    try {
        // Button click handler + Addition (multiple inputs)
        handleButtonClick({ value: '1' });
        console.assert(testOutput.innerHTML === '1', testOutput.innerHTML);
        handleButtonClick({ value: '3' });
        console.assert(testOutput.innerHTML === '13', testOutput.innerHTML);
        handleButtonClick({ value: '+' });
        console.assert(testOutput.innerHTML === '13+', testOutput.innerHTML);
        handleButtonClick({ value: '7' });
        console.assert(testOutput.innerHTML === '13+7', testOutput.innerHTML);
        handleButtonClick({ value: '+' });
        console.assert(testOutput.innerHTML === '13+7+', testOutput.innerHTML);
        handleButtonClick({ value: '2' });
        console.assert(testOutput.innerHTML === '13+7+2', testOutput.innerHTML);
        handleButtonClick({ value: '.' });
        console.assert(testOutput.innerHTML === '13+7+2.', testOutput.innerHTML);
        handleButtonClick({ value: '7' });
        console.assert(testOutput.innerHTML === '13+7+2.7', testOutput.innerHTML);
        handleButtonClick({ value: '=' });
        console.assert(testOutput.innerHTML === '22.7', testOutput.innerHTML);

        // Clear
        handleButtonClick({ value: 'clear' });
        console.assert(testOutput.innerHTML === '', testOutput.innerHTML);

        // Addition
        console.assert(addToTotal(10, 3) === 13);
        console.assert(addToTotal('10', 3) === 13);
        console.assert(addToTotal('0', 13) === 13);
        console.assert(addToTotal(0, 13) === 13);
        console.assert(addToTotal('-20', 10) === -10);

        handleButtonClick({ value: 'clear' });

        // Subtraction
        console.assert(subtractFromTotal(10, 30) === 20);
        console.assert(subtractFromTotal('10', 30) === 20);
        console.assert(subtractFromTotal('0', 13) === 13);
        console.assert(subtractFromTotal(0, 13) === 13);
        console.assert(subtractFromTotal('-20', 10) === 30);

        handleButtonClick({ value: 'clear' });

        // Division
        console.assert(divideByTotal(10, 30) === 3);
        console.assert(divideByTotal('10', 30) === 3);
        console.assert(divideByTotal('0', 13) === 0);
        console.assert(divideByTotal(0, 13) === 0);
        console.assert(divideByTotal('-2', 10) === -5);

        handleButtonClick({ value: 'clear' });

        // Multiplication
        console.assert(multiplyWithTotal(10, 30) === 300);
        console.assert(multiplyWithTotal('10', 30) === 300);
        console.assert(multiplyWithTotal('0', 13) === 0);
        console.assert(multiplyWithTotal(0, 13) === 0);
        console.assert(multiplyWithTotal('-2', 10) === -20);

        handleButtonClick({ value: 'clear' });

    } catch(e) {
        console.error('There was an error during the test run:', e);
    }
});
