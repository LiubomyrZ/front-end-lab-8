function getClosestToZero(){
    var arr = [];
    for( var i = 0; i < arguments.length; i++){
      arr[i] = Math.abs(arguments[i]);    
    }
    return  Math.min.apply(Math, arr);
  }
  console.log(getClosestToZero(4, -6, 2));
  