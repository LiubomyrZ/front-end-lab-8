function getFilteredArray(arr, predicateFunction) {
    filteredArray = [];
    forEach(arr, function (el) {
        if(predicateFunction(el)){
            filteredArray.push(el);
        }
    });
    return filteredArray;
}

// function predicateFunction(num) {
//     return num > 3;
// } 

// console.log(getFilteredArray([1, 7, 20], predicateFunction)); // -> [7, 20]
