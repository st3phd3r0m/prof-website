let input = document.querySelector('#typed');
let previous = document.querySelector('#previoustype');
let observer = new MutationObserver(checkMutation);
// Options for the observer (which mutations to observe)
let config = { attributes: true };
let expression = '';

$(function () {
    input.value = " ";
    previous.textContent = "";

    let buttons = document.querySelectorAll('#calc>div>div>span'); 

    for (let button of buttons) {
        button.addEventListener('click', numPadToScreen);
    }

    // document.querySelector('body').addEventListener('keyup', checkKey);
    input.addEventListener('keyup', checkKey);
    let screen = document.querySelector('#screen');
    screen.addEventListener('click', switchBorder);

    // Start observing the target node for configured mutations
    observer.observe(input, config);

}); // Fin chargement page web

// Callback function to execute when mutations are observed
function checkMutation(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
            // console.log('The ' + mutation.attributeName + ' attribute was modified.');
            observer.disconnect();
            input.setAttribute('readonly', true);
            observer.observe(input, config);
        }
    }
};

function switchBorder(){
    input.style.boxShadow = "0 0 5px red";
    input.focus();
    input.addEventListener('blur', switchOffBorder);
}

function switchOffBorder(){
    input.style.boxShadow = "0 0 0 black";
}

function numPadToScreen(){
    let value = this.dataset.touch;
    if (value != "=" && value != "C") {
        input.value += this.textContent;
        expression += value;
    }else if(value== "="){
        treatExpr(expression);
        input.value = '';
        expression = '';
    }else{
        input.value = '';
        expression = '';
    }
}

function treatExpr(expr){
    if(expr.includes("=")){
        regex = /=/;
        expr = expr.replace(regex, '');
    }
    let result = new Function("return "+expr)();
    if(expr.includes("/")){
        regex = /\//;
        expr = expr.replace(regex, String.fromCharCode(247) );
    }else if(expr.includes("*")){
        regex = /\*/;
        expr = expr.replace(regex, String.fromCharCode(215) );
    }
    previous.innerHTML += expr + ' = ' + result + String.fromCharCode(60) +'br'+String.fromCharCode(62);
}

function checkKey(e){
    let key = e.key;
    let regex = /[\.\+\-\*\/\(\)\%]/;
    if(key <= 9 && key >= 0 || regex.test(key) ){
        expression += key;
        switch (key) {
            case "/":
                input.value += String.fromCharCode(247);
                break;
            case "*":
                input.value += String.fromCharCode(215);
                break;
            default:
                input.value += key ;
                break;
        }
    }
    switch (key) {
        case "Delete":
            input.value = '';
            expression = '';
            break;
        case "=":
            treatExpr(expression);
            input.value = '';
            expression = '';
            break;
        case "Enter":
            treatExpr(expression);
            input.value = '';
            expression = '';
            break;
        default:
            break;
    }
}