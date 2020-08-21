//Should I wear a jacket?

let outsideTemp = 34;

let insideTemp = 70;

let iAmInside = false;

let myName = 'TOM';

if(iAmInside || (!iAmInside && outsideTemp > 65) || ((outsideTemp > 30 || insideTemp > 40) && myName === 'TOM')){

console.log('No');

}else{

console.log('Yes');

}