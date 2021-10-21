const buttons = document.querySelectorAll('.span');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function(span){
    span.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})