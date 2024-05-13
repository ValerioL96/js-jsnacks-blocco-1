//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
const invitati = [
    "Francesco",
    "Roberto",
    "Giggetta",
    "Francesco",
    "Roberto",
    "Giggetta",
    "Francesco",
    "Roberto",
    "Giggetta",
    "Francesco",
    "Roberto",
    "Giggetta"
];
console.log(invitati);

 //chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

 const userName = prompt('Type your name');
 userName = userName.charAt(0),toUpper.Case() + userName.substring(1,userName.length.tolowerCase());
 
 if(invitati.includes(userName)){
    console.log('invitato!');
 }
 else{
    console.log('non invitato!')
 }