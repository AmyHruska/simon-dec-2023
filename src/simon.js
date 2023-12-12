export default function Game(gameArray, playerArray, color, activeGame) {
    this.gameArray = gameArray;
    this.playerArray = playerArray;
    this.color = color;
    this.activeGame = activeGame;
}

Game.prototype.colorRandom = function () {
    // produce a random integer
    this.color = Math.trunc(Math.random() * 4) + 1;
    this.gameArray.push(this.color);    
};

Game.prototype.arrayColorizer = function () {
    // this function adds a new array of corresponding colors based off of gameArray
    let colorArrayString = ["red", "green", "blue", "pink"];
    let tempArray = [];
    let tempColor = 0;
    for (let i = 0; i <= this.gameArray.length - 1; i++) {
        tempColor = colorArrayString[this.gameArray.at(i) - 1];
        tempArray.push(tempColor);
    }
    this.colorizedArray = tempArray;
};

Game.prototype.arrayCheck = function () {
    // End game conditions here.
    for (let i = 0; i <= this.playerArray.length - 1; i++) {
        if (this.gameArray.at(i) != this.playerArray.at(i) ) {            
            this.activeGame = false;
            this.playerArray = [];
            this.gameArray = [];
            break;
        }
    }
};

