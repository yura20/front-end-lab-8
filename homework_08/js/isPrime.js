function isPrime(number){
    var prime = true;
    for(var i = 1; i < number; i++){
        if (number%i === 0 && i !== 1){
            prime = false;
            break;
        }
    }
    return prime;
}