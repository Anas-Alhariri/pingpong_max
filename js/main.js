import { Ball } from './Ball.js';
import { Game } from './Game.js';
import { Paddle } from './Paddle.js';


const paddle1 = new Paddle({ position: "top", color: 'red', width: 100, height: 10, speed: 50 });
const paddle2 = new Paddle({ position: "bottom", color: 'blue', width: 100, height: 10, speed: 50 });
const ball = new Ball({ x: 0, y: 0, color: 'yellow' });

const newGame = new Game(ball, paddle1, paddle2, { ballSpeed: 2 });
newGame.start()