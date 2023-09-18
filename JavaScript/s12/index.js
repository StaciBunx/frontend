const videoBox = document.querySelector('video');

const currentVideoTime = document.querySelector('.time');
const timeRange = document.querySelector('#time_range');

const currentVolume = document.querySelector('.volume_level');
const volumeRange = document.querySelector('#volume_range');

const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');

console.dir(videoBox);

playBtn.addEventListener('click', () => {
    videoBox.play();
})

pauseBtn.addEventListener('click', () => {
    videoBox.pause();
})

// console.log(videoBox.duration);
// console.log(videoBox.currentTime);

videoBox.addEventListener('timeupdate', function (e) {
    const minutes = Math.floor(videoBox.currentTime / 60);
    const sec = Math.floor(videoBox.currentTime % 60);
    currentVideoTime.innerHTML = `${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    timeRange.value = videoBox.currentTime / videoBox.duration * 100;
});

timeRange.addEventListener('input', () => {
    videoBox.currentTime = timeRange.value / 100 * videoBox.duration;
})

volumeRange.addEventListener('input', () => {
    const volume = volumeRange.value;
    videoBox.volume = volume;
    currentVolume.innerHTML = `${String(volume)}`;
})