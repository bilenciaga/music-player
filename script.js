const music = document.querySelector('audio');
const prevButton = document.querySelector('#prev');
const playButton = document.querySelector('#play');
const skipButton = document.querySelector('#skip');
const title = document.querySelector('#title');
const artist = document.querySelector('#artist');

let isPlaying = false;

const songInfo = [
    {
        name: '01-Doom Eternal',//name of the file in the folder
        displayName : 'Doom Eternal', 
        artist: 'Mick Gordon'
    }
]

function playSong() {
    isPlaying = true;

    // change the play button to pause when pressing play
    playButton.classList.replace('bi-play-fill','bi-pause-fill');

    music.play();
}

function pauseSong() {
    isPlaying = false;

    // change the pause button to play when pressing pause
    playButton.classList.replace('bi-pause-fill','bi-play-fill');

    music.pause();
}

// play or pause event listener (using ternary operator)
playButton.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

