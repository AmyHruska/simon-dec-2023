import  Game from './simon.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let gameSpace = new Game([], [], 0, false);

const newGameBtn = document.getElementById('newGameButton');

// const redBtn = document.getElementById('redBtn');
// const grnBtn = document.getElementById('grnBtn');
// const bluBtn = document.getElementById('bluBtn');
// const pnkBtn = document.getElementById('pnkBtn');

// event 
newGameBtn.addEventListener('click', function () {
    console.log(gameSpace.activeGame);

});
