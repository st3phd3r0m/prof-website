let input = document.querySelector('#typed');
let previous = document.querySelector('#previoustype');

$(function () {
    input.textContent = " ";
    previous.textContent = "";

    let buttons = document.querySelectorAll('#calc>div>span'); 

    for (let button of buttons) {
        button.addEventListener('click', renderToScreen);        
    }

    input.focus();
    document.querySelector('body').addEventListener('keyup', checkKey);

}); // Fin chargement page web

function renderToScreen(){

    let value = this.textContent;

    if (value != "=" && value != "C") {
        input.textContent += value;
    }else{
        switch (value) {
            case "C":
                input.textContent = "";
                break;
            case "=":
                treatExpr(input.textContent);
                break;
            default:
                break;
        }
    }
}

function treatExpr(expr){

    if(expr.includes("=")){
        regex = /=/;
        expr = expr.replace(regex, '');
    }

    previous.textContent = expr;
    input.textContent =  new Function("return "+expr)();
}

function checkKey(e){

    console.log(e);
    e.preventDefault();
    
    let key = e.key;

    // let regex = /[\u0025\u0028-\u002F\u0030-\u0039\u002D\u007F]/u;
    let regex = /[\.\+\-\*\/\(\)\%]/;

    // if(regex.test(e.key)){
    //     input.textContent += e.key;// input.textContent.replace(regex, '');
    // }

    if(key <= 9 && key >= 0 || regex.test(key) ){
        input.textContent += key;// input.textContent.replace(regex, '');
    }

    switch (e.key) {
        case "Delete":
            input.textContent = "";
            break;
        case "=":
            treatExpr(input.textContent);
            break;
        case "Enter":
            treatExpr(input.textContent);
            break;
        default:
            break;
    }

    input.focus();

}