// CALCULATOR PROJECT

const theInput = document.querySelector("input");


function showElement(num) {
    theInput.value += num;
}

function calc() {
    try {
        theInput.value = eval(theInput.value);
    } catch (error) {
        theInput.value = 0;
    }
}

function clearAll() {
    theInput.value = "";
}











































































    





















   


























