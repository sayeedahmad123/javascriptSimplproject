const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');

buttons.forEach(function (button){
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);

         switch(e.target.id){
            case 'orange':
                body.style.backgroundColor = 'orange';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id;
                break;
            case 'violet':
                body.style.backgroundColor = e.target.id;
                break;
            case 'magenta':
                body.style.backgroundColor = e.target.id;
                break;
            }
        
    });
});