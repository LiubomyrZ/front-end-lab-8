function getFilteredArray(arr, predicateFunction) {
    filteredArray = [];
    forEach(arr, function (el) {
        if(predicateFunction(el)){
            filteredArray.push(el);
        }
    });
    return filteredArray;
}

