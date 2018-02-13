var numberCount = Number(prompt("Please enter natural number <=20"));

if (numberCount>20 || numberCount<=0 || isNaN(numberCount) || numberCount%1!==0){
    console.error("Incorrect!");
}
var i = 1; 
var symbol ="[~]";
var space = "   ";
var maxSymbolCount = numberCount + (numberCount - 1);
var piramyd ="";
while (i <=numberCount) {
    var line = "";
    var currentSymbolCount = i + (i - 1);
    var currentSpacesCount = (maxSymbolCount - currentSymbolCount)/2;

    for (var b=0; b < currentSpacesCount; b++){
        line += space;
    }
    for (var a=0; a < currentSymbolCount; a++){
        line += symbol;
    }
    line +="\n";
    piramyd +=line;
    i++;     
} 
console.log(piramyd);
