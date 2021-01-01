function backspace(){

    let string  = document.getElementById('userPin').value;

    document.getElementById('userPin').value=string.substring(0,string.length -1);

}

function check(){

    let code = '85543';

    let userInput = document.getElementById('userPin').value;

    if (userInput == code){

        window.location.href = 'results.html';

    } else {

        alert("Incorrect PIN");

    }

}