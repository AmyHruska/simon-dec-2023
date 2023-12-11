// Business logic for simon game
function Game (gameArray, color) {
    this.gameArray = gameArray;
    this.color = color;
}

Game.prototype.colorRandom = function () {
    this.color = Math.trunc(Math.random() * 4) + 1;
    this.color.push.this.gameArray;
    // produce a random integer
};

Game.prototype.colorizer = function () {
    // this function adds a new array of corresponding colors based off of gameArray
    let colorArrayString = ["red", "green", "blue", "pink"]
    let tempArray = [];
    let tempColor = 0;
    for (let i = 0; i <= this.gameArray.length - 1; i++) {
        tempColor = colorArrayString[this.gameArray.at(i) - 1];
        tempArray.push(tempColor);
    }
    this.colorized = tempArray;
};

let gameSpace = new Game([], 0);
