function getTransformedArray(arr, transformFunction) {    
    transformedArray = [];
    forEach(arr, function(el){
        transformedArray.push(transformFunction(el));
    });
    return transformedArray;
}
