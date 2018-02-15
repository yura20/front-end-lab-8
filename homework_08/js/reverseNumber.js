function reverseNumber(number){
    var n_str = number.toString();
    if(n_str.search(/-/i) == -1){
        return parseInt(n_str.split("").reverse().join(""));
    }else{
        return parseInt("-"+n_str.split("").reverse().join(""));
    }
}
console.log(reverseNumber(1000));
