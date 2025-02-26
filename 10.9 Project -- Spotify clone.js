// Play button functionality
document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        // Add your play functionality here
        console.log('Play clicked');
    });
});

// Volume slider functionality
const volumeSlider = document.querySelector('.volume-slider');
const volumeProgress = document.querySelector('.volume-progress');

volumeSlider.addEventListener('click', (e) => {
    const rect = volumeSlider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    volumeProgress.style.width = `${percentage}%`;
});

// Progress bar functionality
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    progress.style.width = `${percentage}%`;
});

// Like button functionality
const likeButton = document.querySelector('.like-button');
likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('active');
    likeButton.style.color = likeButton.classList.contains('active') ? '#1ed760' : '';
});

// Play/Pause button functionality
const playButton = document.querySelector('.control-button.play');
let isPlaying = false;

playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playButton.innerHTML = isPlaying 
        ? '<svg viewBox="0 0 16 16" class="control-icon"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"/></svg>'
        : '<svg viewBox="0 0 16 16" class="control-icon"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"/></svg>';
});