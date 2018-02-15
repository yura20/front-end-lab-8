function getClosestToZero(){
    var closest = 0;
    for(var i = 1; i < arguments.length; i++){
        if (Math.abs(arguments[i]) < Math.abs(arguments[closest])){
            closest = i;
        }
    }
    return arguments[closest];
}