const calculatorDisplay = document.querySelector('.calculator__display');

function resetDisplay()
{
    calculatorDisplay.innerHTML = '0';
}

function addInput(input) 
{
    if (calculatorDisplay.innerHTML == '0' && ! isNaN(parseInt(input))) {
        calculatorDisplay.innerHTML = input;
        return;
    }

    calculatorDisplay.innerHTML += input;
}

function result()
{
    calculatorDisplay.innerHTML = eval(calculatorDisplay.innerHTML);
}

function isClearOperation(element) {
    return element.dataset.hasOwnProperty('action') && element.dataset.action == 'clear';
}

function isCalculateOperation(element) {
    return element.dataset.hasOwnProperty('action') && element.dataset.action == 'calculate';
}

document.querySelectorAll(".calculator__keys>button")
    .forEach((element) => {
        element.addEventListener('click', () => {
            if (isClearOperation(element)) {
                resetDisplay();
                return;
            }
            if (isCalculateOperation(element)) {
                result();
                return;
            }

            addInput(element.innerHTML);
        })
    })

resetDisplay();