export class Ball {
    goUp = false
    goLeft = false

    constructor({ x, y, stepSpeed, size, color } = {}) {
        this.ref = document.querySelector("#ball").content.cloneNode(true).firstElementChild

        this.color = color || 'pink'
        this.size = size || 10
        this.y = y || 0
        this.x = x || 0

        // console.log(`%c\n{\nx: ${x}\n y${y}\n stepSpeed: ${stepSpeed}\n size: ${size}\n color: ${color}\n}`, 'color: lightgreen');
        this.init()
    }

    init() {
        this.ref.style.position = 'absolute'
        this.ref.style.width = this.size + 'px'
        this.ref.style.height = this.size + 'px'
        this.ref.style.border = '1px solid black'
        this.ref.style.borderRadius = '50%'
        this.ref.style.top = this.y + 'px';
        this.ref.style.left = this.x + 'px';
        this.ref.style.transform = 'translate(-50%, -50%)'
        this.ref.style.backgroundColor = this.color
        this.ref.style.zIndex = '1'
    }

    move(game) {
        if (this.goUp) {
            this.y -= game.ballSpeed
        } else {
            this.y += game.ballSpeed
        }

        if (this.goLeft) {
            this.x -= game.ballSpeed
        } else {
            this.x += game.ballSpeed
        }

        if (this.y <= 0) {
            this.goUp = false
            game.stop()
        }
        if (this.y >= game.boxHeight) {
            this.goUp = true
            game.stop()
        }
        if (this.x <= 0) {
            this.goLeft = false
        }
        if (this.x >= game.boxWidth - this.size) {
            this.goLeft = true
        }

        this.ref.style.top = this.y + 'px'
        this.ref.style.left = this.x + 'px'
    }
}