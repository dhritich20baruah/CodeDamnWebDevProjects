let input = document.getElementById('input');
tds = document.querySelectorAll('td');
let inputValue = '';
for(item of tds){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='X'){
            buttonText = '*';
            inputValue += buttonText;
            input.value = inputValue;
        }
        else if (buttonText == 'C'){
            inputValue = "";
            input.value = inputValue;
        }
        else if(buttonText == '√'){
            inputValue = Math.sqrt(inputValue);
            input.value = inputValue
        }
        else if(buttonText == 'log'){
            inputValue = Math.log(inputValue);
            input.value = inputValue
        }
        else if(buttonText == 'sin'){
            inputValue = Math.sin(inputValue);
            input.value = inputValue
        }
        else if(buttonText == 'cos'){
            inputValue = Math.cos(inputValue);
            input.value = inputValue
        }
        else if(buttonText == 'tan'){
            inputValue = Math.tan(inputValue);
            input.value = inputValue
        }
        else if(buttonText == 'π'){
            buttonText = 'π';
            inputValue = Math.PI;
            input.value = inputValue
        }
        else if (buttonText == '='){
            input.value = eval(inputValue);
        }
        else{
            inputValue += buttonText;
            input.value = inputValue;
        }
    })
}