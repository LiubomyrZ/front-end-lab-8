while (confirm("Do you want to play a game?")) {
    var maxRange = 5;
    var attemptPrize = [10, 5, 2];
    var sumPrize = 0;
    var continueGame = true;
    var startGame = false;
    var rangeMultiplier = 1;
    var prizeMultiplier = 1;
    do {
        var attemptCount = 3;
        var randomNumber = Math.floor(Math.random() * maxRange);

        for (var i = 0; i < attemptCount; i++) {
            
            var numberPrompt = parseInt(prompt("Enter a number in range [" + 0 + "; " + maxRange + "]\n" + 
            "Attempts left: " + (attemptCount-i)+"\n" + "Total prize: " + sumPrize + "$"+ "\n"+
            "Posible prize on carrent attempt: " + (attemptPrize[i] * prizeMultiplier)+ "$"));
            
            if (randomNumber == numberPrompt) {
                sumPrize += (attemptPrize[i] * prizeMultiplier);
                attemptCount = -1;
                continueGame = confirm("Do you want to continue a game?");
                if (continueGame) {
                    rangeMultiplier *= 2;
                    prizeMultiplier *= 3;
                    maxRange *= rangeMultiplier;
                }
            }
        }
        if (attemptCount > 0) {
            continueGame = false;
        }
    }
    while (continueGame);
    console.log("Thank you for a game. Your prize is: " + sumPrize + "$");
}
console.log("You did not become a millionaire");
