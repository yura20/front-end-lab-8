function forEach(arr, def) {
    for(var i = 0; i < arr.length; i++) {
        def(arr[i]);
    }
}