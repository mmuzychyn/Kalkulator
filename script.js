const display = document.querySelector('.calculator-screen');

const buttons = document.querySelectorAll(".calculator-keys>button");

let buttonNum = [];
let buttonOperator = [];
let buttonFunction = [];
let cache = [];
let cacheValue =  "";
let cacheOperator = '';
buttons.forEach((button) => {
    if(button.classList.contains('operator')) {
        buttonOperator.push(button);
        const operator = button.value;
        switch(operator) {
            case '+':
                button.addEventListener('click', (e) => {
                    cacheOperator = '+'
                    if (cacheValue !== "") {
                        add(parseFloat(cacheValue));
                    }
                });
                break;
            case '-':
                button.addEventListener('click', (e) => {
                    cacheOperator = '-'
                    if (cacheValue !== "") {
                        subtract(parseFloat(cacheValue));
                    }
                });
                break;
            case '*':
                button.addEventListener('click', (e) => {
                    cacheOperator = '*'
                    if (cacheValue !== "") {
                        mltp(parseFloat(cacheValue));
                    }
                });
                break;
            case '/':
                button.addEventListener('click', (e) => {
                    cacheOperator = '/'
                    if (cacheValue !== "") {
                        sharing(parseFloat(cacheValue));
                    }
                });
                break;
        }
    }else if(button.classList.contains('decimal')) {

        
    }else if(button.classList.contains('all-clear')) {
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            clearDisplay();
            cache = [];
        });
    }else if(button.classList.contains('equal-sign')) {
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            equal();
        });
    }else {
        buttonNum.push(button);
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            setDisplayValue(e.target.value);
            console.log(e.target.value);
        });
    }

});


function setDisplayValue(value) {
    
    display.innerText += value;
    console.log("value:"+value)
    cacheValue += value;
}
function clearDisplay() {
    display.innerText = "";
    cacheValue = "";
}
function add(a) {
    console.log(a)
    if(a==""){
        a = cacheValue;
    }
    cache.push(a);
    console.log("cacheNum",cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = parseFloat(cache[0]) + parseFloat(cache[1]);
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
}
function subtract(a) {
    cache.push(a);
    console.log("cacheNum",cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] - cache[1];
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    // else {
    //     clearDisplay();
    // }


}
function equal(){
    switch(cacheOperator){
        case '+':
            add("")
            break;
        case "-":
            console.log("dupa");
            break;
    }
    cache[0]

    // if (cacheOperator !== "") {
    //     cache.push(parseFloat(cacheValue));
    // }

    // if (cache.length > 0) {
    //     setDisplayValue()
    //     cache = [0];
    // }

    // Sprawdź, jaki operator został wybrany jako ostatni i czy została podana liczba, wtedy wykonaj działanie ostatniego operatora.
    // Jeśli nie podano liczby, a kliknięto operator, wyświetl wartość z pamięci podręcznej (cache).
}

// Metoda/funkcja mnożenia
function mltp(a){
    cache.push(a);
    console.log("cacheNum",cache);
    if(cache.length >= 2) {
        clearDisplay();
    let sum = cache[0] * cache[1];
    cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
 }
// Metoda/funkcja dzielenia
function sharing(a){
    cache.push(a);
    console.log("cacheNum",cache);
    if(cache.length >= 2) {
        clearDisplay();
    let sum = cache[0] / cache[1];
    cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
 }

// Metoda/funkcja dodawania liczb zmiennoprzecinkowych: dodawany jest przecinek, a wartości float muszą zawierać kropkę (np. 1.2 zamiast 1,2).

// Te zmienne nie są wykorzystywane. Dodaje się do nich przyciski z kalkulatora, ale potem nie są używane.
// Pasowałoby je usunąć z kodu.
// let buttonNum = [];
// let buttonOperator = [];
// let buttonFunction = [];

// Gdy wszystko będzie działać, dopisz komentarze wyjaśniające działanie kodu oraz udokumentuj go w plikach Markdown dokumentacji:
// https://github.com/Code-V-Craft/Documentation
// Ten kod powinien być w Moduł 0: Kalkulator
