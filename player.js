const playBtn = document.querySelector(".play-btn")
const backBtn = document.querySelector(".backwards");
const nextBtn = document.querySelector(".forwards");
const songName = document.querySelector(".song-name");
const songYear = document.querySelector(".year"); 
const cover = document.querySelector(".cover");
const progressBar = document.querySelector(".progress-bar");

const songs = ["azure.mp3","moon.mp3", "coffee.mp3"]
const years = ["2023", "2021", "2022"]
const songNames = ["Azure Odyssey", "The Moon", "Drowsy Dawn"]
const covers = ["azure-cover.avif","moon-cover.avif", "drowsy.avif"]
const accents = ["#72abff", "#b0c9ff", "#ffc97d"]

const playPath = '<path d="M16.75 8.65546C17.4167 9.04036 17.4167 10.0026 16.75 10.3875L1.9873 18.9108C1.32064 19.2957 0.487305 18.8145 0.487305 18.0447V0.998235C0.487305 0.228435 1.32064 -0.252687 1.9873 0.132213L16.75 8.65546Z" fill="#ADC0F7"/>'
const pausePath = ' <path d="M0.210938 1.89924C0.210938 1.21276 0.576813 0.65625 1.02814 0.65625H5.24838C5.69971 0.65625 6.06558 1.21276 6.06558 1.89924V23.0933C6.06558 23.7797 5.69971 24.3363 5.24838 24.3363H1.02814C0.576812 24.3363 0.210938 23.7797 0.210938 23.0933V1.89924Z" fill="black"/><path d="M11.1219 1.89924C11.1219 1.21276 11.4878 0.65625 11.9391 0.65625H16.1594C16.6107 0.65625 16.9766 1.21276 16.9766 1.89924V23.0933C16.9766 23.7797 16.6107 24.3363 16.1594 24.3363H11.9391C11.4878 24.3363 11.1219 23.7797 11.1219 23.0933V1.89924Z" fill="black"/>'

let selected = 0
let paused = true
let song = new Audio("/media/"+songs[selected])

progressBar.value = 0;

playBtn.addEventListener("click", ()=> {
    
    if(paused) {
        song.play()
        paused = false
        playBtn.innerHTML = pausePath;
        progressBar.max = song.duration;
    }
    else {
        song.pause()
        paused = true
        playBtn.innerHTML = playPath;
    }
})

nextBtn.addEventListener("click", ()=> {
    if (selected < songs.length -1) {
        selected += 1;
    }
    else {
        selected = 0;
    }

    song.src = "/media/"+songs[selected];
    songName.innerHTML = songNames[selected];
    songYear.innerHTML = years[selected]
    cover.style.setProperty("background-image", "url(/media/"+covers[selected]);
    document.documentElement.style.setProperty("--accent", accents[selected])
    paused = true;
    playBtn.innerHTML = playPath;
    progressBar.max = song.duration;
    progressBar.value = 0;
})

backBtn.addEventListener("click", ()=> {
    if (selected < 1) {
        selected = songs.length -1;
    }
    else {
        selected -= 1;
    }

    song.src = "/media/"+songs[selected];
    songName.innerHTML = songNames[selected];
    songYear.innerHTML = years[selected];
    cover.style.setProperty("background-image", "url(/media/"+covers[selected]);
    document.documentElement.style.setProperty("--accent", accents[selected])
    paused = true;
    playBtn.innerHTML = playPath;
    progressBar.max = song.duration;
    progressBar.value = 0;
})

setInterval(()=> {
    let song_perc = song.currentTime / song.duration * 100
    progressBar.value = song.currentTime;
    progressBar.style.setProperty("background-size", song_perc.toString() + "% 100%");
}, 500)

progressBar.addEventListener("input", ()=> {
    let song_perc = progressBar.value / song.duration * 100;
    song.currentTime = progressBar.value;
    progressBar.style.setProperty("background-size", song_perc.toString() + "% 100%");
})