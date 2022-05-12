export class Paddle {
    width = 100;
    height = 20;
    x = 0;
    y = 0;
    speed = 10;
    color = 'red';
    position = 'bottom';

    constructor({ position, height, width, color, speed } = {}) {
        this.ref = document.getElementById('paddle').content.cloneNode(true).firstElementChild;
        this.width = width || 100;
        this.height = height || 10;
        this.position = position || 'top';
        this.speed = speed || 10;
        this.color = color || 'red';

        this.init();
    }

    init() {
        this.ref.style.position = 'absolute';
        this.ref.style.backgroundColor = this.color;
        this.ref.style.width = this.width + 'px';
        this.ref.style.height = this.height + 'px';
        this.ref.style.border = '1px solid black';
        this.ref.style.top = this.y + 'px';
        this.ref.style.left = this.x + 'px';
        this.ref.style.borderRadius = '5px';
    }
}
