var readlineSync = require('readline-sync');

let notes = [2000,500,200,100,50,20,10,5,2,1];

let amount = readlineSync.question("Enter the bill amount: "); 

console.log("Denomination notes we have : 2000,500,200,100,50,20,10,5,2,1");

let userNote = readlineSync.question("Enter the amount you are paying: "); 
 
let sub = parseInt(userNote-amount);

if(parseInt(userNote)<parseInt(amount)){
  console.log("Please enter the correct amount!");
}
else{ 
  console.log("Amount to be returned: "+sub);
}

let counter=0;
for(i=0;i<notes.length;i++){
  
  if(sub / notes[i] >= 1){
  counter = parseInt(sub / notes[i]);
  sub = sub - notes[i]*counter;
  console.log(notes[i]+ " :", counter);
  if(sub === 0){
    break;
  }
  
}
  
}




