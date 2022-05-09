export function loadGameElements() {
    const templates = document.getElementsByTagName('template')

    const gameBox = document.getElementById('game-box')

    const ball = templates.namedItem('ball').content.cloneNode(true).firstElementChild;
    const topPaddle = templates.namedItem('top-paddle').content.cloneNode(true).firstElementChild;
    const bottomPaddle = templates.namedItem('bottom-paddle').content.cloneNode(true).firstElementChild;

    // ball.style.backgroundColor = 'red'

    gameBox.appendChild(ball);
    gameBox.appendChild(topPaddle);
    gameBox.appendChild(bottomPaddle);

    return {
        ball,
        topPaddle,
        bottomPaddle,
        gameBox
    }
}