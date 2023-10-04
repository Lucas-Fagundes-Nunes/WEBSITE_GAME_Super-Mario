let states = {
    results: {
        score: 0,
    },
    view: {
        pipe: document.querySelector('.pipe'),
        mario: document.querySelector('.mario'),
        points: document.querySelector('.points-results'),
        score: document.getElementById('score'),
        
    }
}

const jump = () => {
    states.view.mario.classList.add('jump');

    setTimeout(() => {
        states.view.mario.classList.remove('jump');
    }, 500)
    
}

const loop = setInterval(() => {

    const pipePosition = states.view.pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(states.view.mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 95) {

        states.view.pipe.style.animation = 'none';
        states.view.pipe.style.left = `${pipePosition}px`;

        states.view.mario.style.animation = 'none';
        states.view.mario.style.bottom = `${marioPosition}px`;
        
        states.view.mario.src = './src/images/game-over.png';
        states.view.mario.style.width = '75px';
        states.view.mario.style.marginLeft = '50px';

        states.view.points.classList.add('points');
    } else {
        states.results.score++; 
    }

    states.view.score.innerText = states.results.score;

}, 10);

document.addEventListener('keydown', jump);