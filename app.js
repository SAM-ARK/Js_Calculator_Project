///Calculator


const display = document.querySelector('#display');


//append function to display
function appendToDisplay(value) {
    display.value += value;
    console.log(display.value);
}

//function to clear display
function clearDisplay() {
    display.value = '';
}

//function to calculate the result
function calculate() {

    if (display.value !== '') {
       try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
    } else {
        display.value = "Please Enter a Value";
    }
}

