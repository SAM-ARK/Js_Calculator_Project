///Calculator


const display = document.querySelector('#display');


//append funtion to display
function appendToDisplay(value) {
    display.value += value;
}

//function to clear display

function clearDisplay() {
    display.value = '';
}

//function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}