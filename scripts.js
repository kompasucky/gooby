document.getElementById('add-media').addEventListener('click', function() {
    document.getElementById('media-input').click();
});

document.getElementById('media-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const videoPlayer = document.getElementById('video-player');

    if (file.type.startsWith('video/')) {
        const url = URL.createObjectURL(file);
        videoPlayer.src = url;
        videoPlayer.play();
    }
});