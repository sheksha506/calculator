const button = document.querySelectorAll('.btn');
const input = document.querySelector('#input');


button.forEach(button => {
    button.addEventListener('click', ()=> {
        const value = button.textContent;

        if(value === 'AC'){
            input.value = '';
        }
        else if(value === 'clc'){
            input.value = input.value.slice(0,-1);
        }
        else if(value === "="){
            input.value = math.evaluate(input.value);
            input.style.color = "green";
            
        }
        else {
            input.value+= value;
        }
    });
});
