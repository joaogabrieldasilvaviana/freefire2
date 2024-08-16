let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');
let isJumping = false;

function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.style.bottom = '150px';
    setTimeout(() => {
        dino.style.bottom = '20px';
        isJumping = false;
    }, 300);
}

function moveCactus() {
    let cactusPosition = window.innerWidth;
    let cactusSpeed = 5;
    let interval = setInterval(() => {
        if (cactusPosition < -30) {
            cactusPosition = window.innerWidth;
        }
        cactusPosition -= cactusSpeed;
        cactus.style.right = cactusPosition + 'px';
        
        if (cactusPosition < 50 && cactusPosition > 0 && !isJumping) {
            alert('Game Over!');
            clearInterval(interval);
        }
    }, 20);
}

function changeDinoImage() {
    dino.style.backgroundImage = "url('dino2.png')";
}

document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        jump();
    }
});

moveCactus();
