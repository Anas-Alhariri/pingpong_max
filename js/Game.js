export class Game {
    isStarted = false;

    constructor(ball, paddle1, paddle2, gameOptions = {}) {
        this.ball = ball;
        this.ballSpeed = gameOptions.ballSpeed || 5;

        this.paddle1 = paddle1;
        this.paddle2 = paddle2;
        this.gameBox = document.getElementById('game-box');

        this.boxWidth = this.gameBox.offsetWidth;
        this.boxHeight = this.gameBox.offsetHeight;

        this.init();
    }

    init() {
        // this.isStarted = true;
        this.ball.x = this.gameBox.offsetWidth / 2 + this.ball.x;
        this.ball.y = this.gameBox.offsetHeight / 2 + this.ball.y;
        this.ball.init();

        this.paddle1.x = this.gameBox.offsetWidth / 2 - this.paddle1.width / 2;
        if (this.paddle1.position === 'top') {
            this.paddle1.y = 0;
        } else {
            this.paddle1.y = this.gameBox.offsetHeight - this.paddle1.height;
        }
        this.paddle1.init();

        this.paddle2.x = this.gameBox.offsetWidth / 2 - this.paddle2.width / 2;
        if (this.paddle2.position === 'top') {
            this.paddle2.y = 0;
        } else {
            this.paddle2.y = this.gameBox.offsetHeight - this.paddle2.height;
        }
        this.paddle2.init();

        this.assignPaddleMovement();

        this.gameBox.appendChild(this.ball.ref);
        this.gameBox.appendChild(this.paddle1.ref);
        this.gameBox.appendChild(this.paddle2.ref);
    }

    start() {
        this.isStarted = true;
        this.timer = setInterval(() => {
            // this.ball.move(this.ballSpeed, this.gameBox.offsetWidth, this.gameBox.offsetHeight);
            this.ball.move(this);
            this.checkCollision();
        }, 1000 / 60);
    }

    stop() {
        this.isStarted = false;
        clearInterval(this.timer);
    }

    checkCollision() {
        if (
            (this.ball.y <= this.paddle1.y + this.paddle1.height && this.ball.x >= this.paddle1.x && this.ball.x <= this.paddle1.x + this.paddle1.width) ||
            (this.ball.y >= this.paddle2.y && this.ball.x >= this.paddle2.x && this.ball.x <= this.paddle2.x + this.paddle2.width)
        ) {
            this.ball.goUp = !this.ball.goUp;
            console.log(`ball.goUp: ${this.ball.goUp}`);
        } else if (this.ball.y <= 0 || this.ball.y >= this.gameBox.offsetHeight) {
            this.stop();
        }
    }

    assignPaddleMovement() {
        //! Paddle 1 movement:
        document.addEventListener('keydown', (e) => {
            if (e.key === 'a' && this.isStarted) {
                this.paddle1.x = this.paddle1.x - this.paddle1.speed;
                if (this.paddle1.x <= 0) {
                    this.paddle1.x = 0;
                }
            } else if (e.key === 'd' && this.isStarted) {
                this.paddle1.x = this.paddle1.x + this.paddle1.speed;
                if (this.paddle1.x >= this.boxWidth - this.paddle1.width) {
                    this.paddle1.x = this.boxWidth - this.paddle1.width;
                }
            }
            this.paddle1.ref.style.left = this.paddle1.x + 'px';
        });

        //! Paddle 2 movement:
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && this.isStarted) {
                this.paddle2.x = this.paddle2.x - this.paddle2.speed;
                if (this.paddle2.x <= 0) {
                    this.paddle2.x = 0;
                }
            } else if (e.key === 'ArrowRight' && this.isStarted) {
                this.paddle2.x = this.paddle2.x + this.paddle2.speed;
                if (this.paddle2.x >= this.boxWidth - this.paddle2.width) {
                    this.paddle2.x = this.boxWidth - this.paddle2.width;
                }
            }
            this.paddle2.ref.style.left = this.paddle2.x + 'px';
        });
    }
}
