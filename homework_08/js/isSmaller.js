function isBigger(x, y){

    return x > y;
}


function isSmaller(x, y){
    
    if (x===y){
        return false;
      }
    
    else {var rezult = !isBigger(x, y);
        return rezult;
    }
}
console.log(isSmaller(3,5));
