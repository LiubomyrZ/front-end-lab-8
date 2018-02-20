// function forEach(arr, numberFunction) {    
//     for ( var i=0; i<arr.length; i++){
//         numberFunction(arr[i]);
//     }
// }

// function getTransformedArray(arr, transformFunction) {    
//     transformedArray = [];
//     forEach(arr, function(el){
//         transformedArray.push(transformFunction(el));
//     });
//     return transformedArray;
// }

// function cypherPhrase(charactersMap, stringLine){
//     var stringArr = stringLine.split("");
//     var transformedArray = getTransformedArray(stringArr, function(el){
//         return charactersMap[el] || el;
//     });
//     return transformedArray.join("");
// }

function decypherPhrase(charactersMap, stringLine){
    var revertedCharactersMap = {};
    for(var key in charactersMap){
        revertedCharactersMap[charactersMap[key]] = key;
    }
    return cypherPhrase(revertedCharactersMap, stringLine);
}

// var charactersMap = {a: 'o', c: 'd', t: 'g'};

// console.log(decypherPhrase(charactersMap, 'kiggy dog')); // -> "kitty cat"