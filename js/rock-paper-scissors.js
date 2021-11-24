function computerPlay() {
    randomNumber = Math.random();
    switch (true) {
        case randomNumber < 0.33:
            return "Rock";
        case randomNumber > 0.66:
            return "Paper";
        default:
            return "Scissors"
    }
}