function cypherPhrase(charactersMap, stringLine){
    var stringArr = stringLine.split("");
    var transformedArray = getTransformedArray(stringArr, function(el){
        return charactersMap[el] || el;
    });
    return transformedArray.join("");
}

