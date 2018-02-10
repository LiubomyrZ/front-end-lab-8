var sideA = parseFloat(prompt("length of side a"));
var sideB = parseFloat(prompt("length of side b"));
var sideC = parseFloat(prompt("length of side c"));

var message1="";
if ( sideA<=0 || sideB<=0 || sideC<=0){
    message1="Incorrect data";
} else if (Math.pow(sideA,2) == sideB*sideB+sideC*sideC || sideB*sideB == sideA*sideA+sideC*sideC || sideC*sideC == sideA*sideA+sideB*sideB){
    message1="Type of triangle: Right triangle";
} else if(sideA==sideB && sideB==sideC && sideC==sideA){
    message1="Type of triangle: Equilateral";
} else if(sideA==sideB || sideB==sideC || sideC==sideA){
    message1="Type of triangle: Isosceles";
} else if(sideA!=sideB && sideB!=sideC && sideC!=sideA){
    message1="Type of triangle: Scalene";   
}

var p = (sideA + sideB + sideC)/2;
var squareArea = Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC));
if (squareArea == 0 || isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log("Incorrect data");
} else {
    console.log(message1 + " and square " + parseFloat(squareArea.toFixed(2)));
}