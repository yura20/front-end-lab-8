function collectIds(arr){
    var new_arr = [];
    var filtered_arr = getFilteredArray(arr, element => element.rating > 3);
    getTransformedArray(filtered_arr, element => new_arr.push(element.id));
    return new_arr;
}
