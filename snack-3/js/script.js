//Crea un array vuoto.

const array[];

//Chiedi per 6 volte all'utente di inserire un numero,

for(i=0; i<=6; i++){

    const  number = Number.parseInt(prompt('Type number'), 10);

    //se è dispari inseriscilo nell'array.
    if(number%2 == 1){
        array.push(number);
    }
    else{
        console.log('undefined');
    }
}


 