//L'utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore

const firstNumber = Number.parseInt(prompt('Type first number'), 10);
const secondNumber = Number.parseInt(prompt('Type first second'), 10);

if(firstNumber === secondNumber){
    console.log(firstNumber,secondNumber);
}
else if(firstNumber>secondNumber){
    console.log(firstNumber);
}
else(secondNumber>firstNumber){
    console.log(secondNumber):
}
