let eur = +prompt("Enter amount of EUR");
let usd = +prompt("Enter amount of USD");

var eurToUah = 33.2324;
var usdToUah = 27.124;

if(!isNaN(eur) && !isNaN(usd)){
    console.log(eur+" euros are equal "+Math.floor(eur*eurToUah)+" UAH, "+usd+" dollars are equal "+Math.floor(usd*usdToUah)+" UAH, one euro is equal "+Math.floor((eurToUah/usdToUah)*1000)/1000+" dollars");
}else{
    console.log("Incorrect data");
}
