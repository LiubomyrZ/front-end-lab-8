function reverseNumber (number) {
    var reversedN = 0;
       
    while (number != 0) {
    reversedN *= 10;
    reversedN += number % 10;
    number -= number % 10;
    number /= 10;
    }
       
    return reversedN;
}
console.log(reverseNumber(10));
