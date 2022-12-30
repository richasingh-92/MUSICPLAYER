window.onload = () => {

    let isPlaying = false,
        currentSong = 0;
    
    const player = document.getElementById('player');
    
    const playBtn = document.querySelector('.pause');
    
    const progressBar = document.querySelector(".progress-bar");
    
    const progressTimeDuration = document.querySelector('.duration');
    
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    
    next.addEventListener('click', () => {
        changeSong('next');
    });
    
    prev.addEventListener('click', () => {
        changeSong('prev');
    });
    
    const str_pad_left = (string, pad, length) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    
    const play = () => {
        playBtn.classList.remove('ri-play-circle-line');
        playBtn.classList.add('ri-pause-circle-line');
        player.play();
        isPlaying = true;
    }
    
    const songs = [
        {
            name: "Lily",
            singer: "Alan Walker",
            url: "https://abdulmoqueet.github.io/music-player/songs/Lily.mp3",
            albumArt: "https://abdulmoqueet.github.io/music-player/images/Lily.jpg"
        },
    
        {
            name: "End Of Time",
            singer: "Alan Walker",
            url: "https://abdulmoqueet.github.io/music-player/songs/End_Of_Time.mp3",
            albumArt: "https://abdulmoqueet.github.io/music-player/images/End_Of_Time.jpg",
        },
    
        {
            name: "On My Way",
            singer: "Alan Walker",
            url: "https://abdulmoqueet.github.io/music-player/songs/On_My_Way.mp3",
            albumArt: "https://abdulmoqueet.github.io/music-player/images/On_My_Way.jpg",
        },
    ];
    
    const loadSong = (index) => {
    
        const song = songs[index];
        const albumArtImg = document.querySelector('.album-art');
        const songName = document.querySelector('.song');
        const artist = document.querySelector('.artist');
        const audioSrc = document.getElementById('audio-source');
    
        audioSrc.src = song.url;
        player.load();
        play();
    
        albumArtImg.src = song.albumArt;
        songName.textContent = song.name;
        artist.textContent = song.singer;
    }
    
    const changeSong = (changeTo) => {
    
        if (changeTo === 'next') {
    
            currentSong++;
    
            if (currentSong === 3) {
                currentSong = 0;
            }
    
            loadSong(currentSong);
    
        } else {
    
            currentSong--;
    
            if (currentSong === -1) {
                currentSong = 2;
            }
    
            loadSong(currentSong);
        }
    }
    
    player.addEventListener("timeupdate", () => {
        var time = parseInt(player.currentTime, 10),
            songDuration = parseInt(player.duration, 10),
            currentSec = 0,
            totalSec = 0,
            prog;
    
        prog = parseInt((time / songDuration) * 100, 10) + "%";
        progressBar.style.width = prog;
    
        var minutes = Math.floor(time / 60),
            seconds = time - minutes * 60,
            songDurationMinutes = Math.floor(songDuration / 60),
            songDurationSeconds = Math.floor(songDuration - songDurationMinutes * 60);
    
        currentSec =
            str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
        totalSec =
            str_pad_left(songDurationMinutes, "0", 2) +
            ":" +
            str_pad_left(songDurationSeconds, "0", 2);
    
        progressTimeDuration.textContent = currentSec + " / " + totalSec;
    
    });
    
    playBtn.addEventListener('click', () => {
    
        if (!isPlaying) {
            play();
        } else {
            playBtn.classList.remove('ri-pause-circle-line');
            playBtn.classList.add('ri-play-circle-line');
            player.pause();
            isPlaying = false;
        }
    
    });
    
    }
    