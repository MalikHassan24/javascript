const input = document.querySelector('input[type="text"]');
const buttons = document.querySelectorAll('.button');


let currentInput = '';
let previousValue ='';
let operator = '';
let shouldResetInput= false;

buttons.forEach(button =>
{
    button.addEventListener('click',()=>
    {
         const value = button.textContent;

         if(value >= '0' && value <= '9' || value==='.')
        {
            if(shouldResetInput)
            { 
                currentInput = '';
                shouldResetInput = false;
            }

            currentInput += value;
            input.value = currentInput;
        }

        else if (value === '+' || value === '-' || value === '*' || value === '/')
        {
            if(currentInput !== '')
            {
                previousValue = currentInput;
                operator = value;
                currentInput = '';
            }
        }

        else if (value === '=')
        {
            if (  previousValue !== '' && currentInput !== '' && operator !== '')
            {
                const result = calculate(parseFloat(previousValue), parseFloat(currentInput), operator);
                input.value = result;
                currentInput = result.toString();
                previousValue = '';
                shouldResetInput = true;
            }
        }
    });
});

function calculate(num1, num2,operator)
{
    switch(operator)
    {
        case '+':
           return num1 + num2;

        case '-':
           return num1 - num2;

        case '*':
           return num1 * num2;
            
        case '/':
           return num1 / num2;    

        default:
           return num2;   
    }
}