function decypherPhrase(obj, str){
    var rev_obj = {};
    for(key in obj){
        rev_obj[obj[key]] = key;
    }
    var decypher_str = cypherPhrase(rev_obj, str);
    return decypher_str;
}

