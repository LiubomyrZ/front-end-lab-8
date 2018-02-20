function decypherPhrase(charactersMap, stringLine){
    var revertedCharactersMap = {};
    for(var key in charactersMap){
        revertedCharactersMap[charactersMap[key]] = key;
    }
    return cypherPhrase(revertedCharactersMap, stringLine);
}

