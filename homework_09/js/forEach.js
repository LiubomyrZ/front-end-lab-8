function forEach(arr, numberFunction) {    
    for ( var i=0; i<arr.length; i++){
        numberFunction(arr[i]);
    }
}
