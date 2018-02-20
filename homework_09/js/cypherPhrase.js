function cypherPhrase(obj, str){
    var str_arr = [];
    getTransformedArray(str, element => {
        for(key in obj){
            if(key === element){
                element = obj[key];
                break;
            }
        }
        str_arr.push(element);
    });
    return str_arr.join('');
}


