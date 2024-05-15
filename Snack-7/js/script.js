//Snack7
//Fai inserire un numero, che chiameremo N,all'utente.
//Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo

let userNumber= Number.parseInt(prompt('scrivi un numero'), 10);

if(userNumber>20 || userNumber<1 || Number.isNaN(userNumber)){
    userNumber = 12;
}

//Creo ciclo for da 0 auserNumber

for(let i= 0; i<userNumber; i++){

    //creo la mia array
       //genero un ciclo for per 10 elementi casuali aggiunti nell'array
    const array= [];

    for(let i=0; i<10 ; i++){
        array.push(Math.floor(Math.random()*100)+1);
    }
    
    console.log(array);
}