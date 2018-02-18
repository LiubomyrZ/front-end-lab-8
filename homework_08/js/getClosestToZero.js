function getClosestToZero() {
    var closestToZero = arguments[0];

    for (var i = 0; i < arguments.length; i++) {
		if (Math.abs(closestToZero) > Math.abs(arguments[i])) {
			closestToZero = arguments[i];
		}
    }
    
    return  closestToZero;
}
console.log(getClosestToZero(-4, 4, -2, 2));