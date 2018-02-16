function getMin(){
    var x = arguments[0];
    for(var i = 1; i < arguments.length; i++){
        if(arguments[i] < x){
            x = arguments[i];
        }
    }
    if(typeof(x)==="number"){
        return x;
    }else{
        return "Error. Arguments must be numbers!";
    }
}