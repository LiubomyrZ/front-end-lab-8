
var euroValue= parseFloat(prompt("amount of EURO"));
var usdValue= parseFloat(prompt("amount of USD"));


var usdCourse = 27.1196;
var eurCourse = 33.4602;

if (isNaN(euroValue) || isNaN(usdValue)) {
    alert("Incorrect data");
} else { 
    console.log(euroValue + " euros are equal " + ( euroValue * eurCourse.toFixed()) + " UAH, " + usdValue + 
" dollars are equal " + ( usdValue * eurCourse.toFixed()) + " UAH, one euro is equal " +  ((eurCourse/usdCourse).toFixed(3)) + " dollars.");
}
