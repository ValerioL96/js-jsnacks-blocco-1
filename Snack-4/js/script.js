//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const number = [
    1,
    2,
    3,
    4,
    5,
    20,
    25,
    21,
    100,
    105
];

for(let i = 0; i<number.length ; i++){
    if(i%2 == 1){
        somma += number[i];
    }
}
console.log(number,somma);