function getTransformedArray(arr, def){
    var new_arr = [];
    forEach(arr, element => new_arr.push(def(element)));
    return new_arr;
}
