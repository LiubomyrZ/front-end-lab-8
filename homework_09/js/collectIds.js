 function collectIds(movies) {
    var filteredArray = getFilteredArray(movies, function(el){return el.rating > 3;})
    return getTransformedArray(filteredArray, function(el){return el.id;});
}

  