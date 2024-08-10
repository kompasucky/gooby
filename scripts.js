document.getElementById('layers').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        // Select a layer for editing
        console.log(`Selected layer: ${e.target.textContent}`);
    }
});

const videoElement = document.getElementById('preview');
document.getElementById('playButton').addEventListener('click', () => {
    videoElement.play();
});
document.getElementById('pauseButton').addEventListener('click', () => {
    videoElement.pause();
});