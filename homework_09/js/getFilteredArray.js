function getFilteredArray(arr, def){
    var new_arr = [];
    forEach(arr, element => {
        if(def(element)){
            new_arr.push(element);
        }
    });
    return new_arr;
}