document.getElementById('media-input').addEventListener('change', function(e) {
    const files = e.target.files;
    const mediaItemsContainer = document.getElementById('media-items');

    Array.from(files).forEach(file => {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'media-item';
        mediaItem.textContent = file.name;

        mediaItem.addEventListener('click', () => {
            const mediaType = file.type.startsWith('video') ? 'video' : 'audio';
            if (mediaType === 'video') {
                const video = document.createElement('video');
                video.src = URL.createObjectURL(file);
                video.controls = true;
                document.querySelector('.content').appendChild(video);
            } else if (mediaType === 'audio') {
                const audio = document.createElement('audio');
                audio.src = URL.createObjectURL(file);
                audio.controls = true;
                document.querySelector('.timeline').appendChild(audio);
            }
        });

        mediaItemsContainer.appendChild(mediaItem);
    });
});

document.querySelector('button:nth-child(4)').addEventListener('click', () => {
    document.getElementById('media-input').click();
});