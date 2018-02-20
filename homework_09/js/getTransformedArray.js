function getTransformedArray(arr, transformFunction) {    
    transformedArray = [];
    forEach(arr, function(el){
        transformedArray.push(transformFunction(el));
    });
    return transformedArray;
}

//console.log(getTransformedArray([1,2,3], function(el){return ++el;}));