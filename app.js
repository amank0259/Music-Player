const allSongs = [
    {
        id: 1,
        name: "Aku Sayang x Sprinter (BassSlowed)",
        song: "src/songs/Aku Sayang x Sprinter (BassSlowed).mp3",
        thumb: "src/thumb/aaku_sayang.jpg",
    },
    {
        id: 2,
        name: "Haye Ni Apa fer milange",
        song: "src/songs/Haye Ni Apa Fer Milange, Kde Na Kde Fer Milange (Video Song)Savi KahlonTu Phool Banna M Tara sajna.mp3",
        thumb: "src/thumb/Apa_fer_milange.jpg",
    },
    {
        id: 3,
        name: "Chitthi Qk, UK Rapi Boy Hustle 2.0",
        song: "src/songs/Chitthi  QK, UK Rapi Boy  Hustle 2.0.mp3",
        thumb: "src/thumb/Chitthi.jpg",
    },
    {
        id: 4,
        name: "Hass Hass (Official Video) Diljit X Sia",
        song: "src/songs/Hass Hass (Official Video) Diljit X Sia.mp3",
        thumb: "src/thumb/Hass_Hass.jpg",
    },
    {
        id: 5,
        name: "Anuv Jain - HUSN ",
        song: "src/songs/Anuv Jain - HUSN (Lyrics).mp3",
        thumb: "src/thumb/Husn.jpg",
    },
    {
        id: 6,
        name: "Ishq Nachaawe - Kho Gaye Hum Kahan  Siddhant, Ananya, Adarsh  Rashmeet K, Karan K, Yashraj, Dhrruv",
        song: "src/songs/Ishq Nachaawe - Kho Gaye Hum Kahan  Siddhant, Ananya, Adarsh  Rashmeet K, Karan K, Yashraj, Dhrruv.mp3",
        thumb: "src/thumb/Ishq_nachaawe.jpg",
    },
    {
        id: 7,
        name: "Kenya Grace - Stranger (lyrics) #lyrics #stranger #kenyagrace",
        song: "src/songs/Kenya Grace - Stranger (lyrics) #lyrics #stranger #kenyagrace.mp3",
        thumb: "src/thumb/Kenya_Grace_stranger.jpg",
    },
    {
        id: 8,
        name: "King Shit - Shubh ",
        song: "src/songs/King Shit - Shubh (Official Video).mp3",
        thumb: "src/thumb/King_shit_Shubh.jpg",
    },
    {
        id: 9,
        name: "Kinni Kinni",
        song: "src/songs/Kinni Kinni.mp3",
        thumb: "src/thumb/kinni_kinni.jpg",
    },
    {
        id: 10,
        name: "Diljit Dosanjh Love Ya (Official Music Video)  Mouni Roy",
        song: "src/songs/Diljit Dosanjh_ Love Ya (Official Music Video)  Mouni Roy.mp3",
        thumb: "src/thumb/Love_ya.jpg",
    },
    // {
    //     id: 11,
    //     name: "MANJHA - Aayush Sharma & Saiee M Manjrekar  Vishal Mishra  Riyaz Aly  Anshul Garg",
    //     song: "src/songs/MANJHA - Aayush Sharma & Saiee M Manjrekar  Vishal Mishra  Riyaz Aly  Anshul Garg.mp3",
    //     thumb: "src/thumb/Manjha.jpg",
    // },
    // {
    //     id: 12,
    //     name: "Dunki O Maahi Shah Rukh Khan  Taapsee Pannu  Pritam  Arijit Singh  Irshad Kamil",
    //     song: "src/songs/Dunki_ O Maahi (Full Video)  Shah Rukh Khan  Taapsee Pannu  Pritam  Arijit Singh  Irshad Kamil.mp3",
    //     thumb: encodeURIComponent("src/thumb/O Mahi.jpg"),

    // },
    // {
    //     id: 13,
    //     name: "Ve Haaniyaan - Official Video  Ravi Dubey & Sargun Mehta  Danny  Avvy Sra  Dreamiyata Music",
    //     song: "src/songs/Ve Haaniyaan - Official Video  Ravi Dubey & Sargun Mehta  Danny  Avvy Sra  Dreamiyata Music.mp3",
    //     thumb: encodeURIComponent("src/thumb/Ve Haniya.jpg"),
    // },
    // {
    //     id: 14,
    //     name: "You And Me Mashup  Harshal Music  Shubh X Diljit Dosanjh X Ap Dhillon  Punjabi Love Song 2024",
    //     song: "src/songs/You And Me Mashup  Harshal Music  Shubh X Diljit Dosanjh X Ap Dhillon  Punjabi Love Song 2024.mp3",
    //     thumb: encodeURIComponent("src/thumb/You and me.jpg"),
    // }
]

const album = [
    {
        id: 5,
        name: "Anuv Jain - HUSN ",
        song: "src/songs/Anuv Jain - HUSN (Lyrics).mp3",
        thumb: "src/thumb/Husn.jpg",
    },
    {
        id: 6,
        name: "Ishq Nachaawe - Kho Gaye Hum Kahan  Siddhant, Ananya, Adarsh  Rashmeet K, Karan K, Yashraj, Dhrruv",
        song: "src/songs/Ishq Nachaawe - Kho Gaye Hum Kahan  Siddhant, Ananya, Adarsh  Rashmeet K, Karan K, Yashraj, Dhrruv.mp3",
        thumb: "src/thumb/Ishq_nachaawe.jpg",
    },
    {
        id: 7,
        name: "Kenya Grace - Stranger (lyrics) #lyrics #stranger #kenyagrace",
        song: "src/songs/Kenya Grace - Stranger (lyrics) #lyrics #stranger #kenyagrace.mp3",
        thumb: "src/thumb/Kenya_Grace_stranger.jpg",
    },
    {
        id: 6,
        name: "Ishq Nachaawe - Kho Gaye Hum Kahan  Siddhant, Ananya, Adarsh  Rashmeet K, Karan K, Yashraj, Dhrruv",
        song: "src/songs/Ishq Nachaawe - Kho Gaye Hum Kahan  Siddhant, Ananya, Adarsh  Rashmeet K, Karan K, Yashraj, Dhrruv.mp3",
        thumb: "src/thumb/Ishq_nachaawe.jpg",
    },
    {
        id: 7,
        name: "Kenya Grace - Stranger (lyrics) #lyrics #stranger #kenyagrace",
        song: "src/songs/Kenya Grace - Stranger (lyrics) #lyrics #stranger #kenyagrace.mp3",
        thumb: "src/thumb/Kenya_Grace_stranger.jpg",
    },
    {
        id: 8,
        name: "King Shit - Shubh ",
        song: "src/songs/King Shit - Shubh (Official Video).mp3",
        thumb: "src/thumb/King_shit_Shubh.jpg",
    },
    {
        id: 7,
        name: "Kenya Grace - Stranger (lyrics) #lyrics #stranger #kenyagrace",
        song: "src/songs/Kenya Grace - Stranger (lyrics) #lyrics #stranger #kenyagrace.mp3",
        thumb: "src/thumb/Kenya_Grace_stranger.jpg",
    },
]

const favoriteSongs = [
    {
        id: 1,
        name: "Aku Sayang x Sprinter (BassSlowed)",
        song: "src/songs/Aku Sayang x Sprinter (BassSlowed).mp3",
        thumb: "src/thumb/aaku_sayang.jpg",
    },
    {
        id: 2,
        name: "Haye Ni Apa fer milange",
        song: "src/songs/Haye Ni Apa Fer Milange, Kde Na Kde Fer Milange (Video Song)Savi KahlonTu Phool Banna M Tara sajna.mp3",
        thumb: "src/thumb/Apa_fer_milange.jpg",
    },
    {
        id: 3,
        name: "Chitthi Qk, UK Rapi Boy Hustle 2.0",
        song: "src/songs/Chitthi  QK, UK Rapi Boy  Hustle 2.0.mp3",
        thumb: "src/thumb/Chitthi.jpg",
    },
    {
        id: 4,
        name: "Hass Hass (Official Video) Diljit X Sia",
        song: "src/songs/Hass Hass (Official Video) Diljit X Sia.mp3",
        thumb: "src/thumb/Hass_Hass.jpg",
    },
    {
        id: 5,
        name: "Anuv Jain - HUSN ",
        song: "src/songs/Anuv Jain - HUSN (Lyrics).mp3",
        thumb: "src/thumb/Husn.jpg",
    },
]

// // Update the poster of Descover
// var allSongsPoster = "";
// allSongs.forEach(function (obj) {
//     allSongsPoster += `
//     <div class="relative">
//         <img class="h-40 contain" src=${obj.thumb} alt="">
//         <i class="fa-solid play cursor-pointer absolute bottom-2 right-2 text-4xl text-white fa-circle-play"></i>
//     </div>`;
//     document.querySelector(".discoverPoster").innerHTML = allSongsPoster;
// })

// // Update the poster of Album
// var albumPoster = "";
// album.forEach(obj => {
//     albumPoster += `<div class="relative">
//     <img class="h-40" src=${obj.thumb} alt="">
//     <i class="fa-solid playa cursor-pointer absolute bottom-0 right-0 text-4xl text-white fa-circle-play"></i>
// </div>`;
//     document.querySelector(".albumPoster").innerHTML = albumPoster;
// });


// // Update the poster of Favorite
// var favoritePoster = "";
// favoriteSongs.forEach(obj => {
//     favoritePoster += `<div class="relative">
//     <img class="h-40" src=${obj.thumb} alt="">
//     <i class="fa-solid playb cursor-pointer absolute bottom-0 right-0 text-4xl text-white fa-circle-play"></i>
// </div>`;
//     document.querySelector(".favoritePoster").innerHTML = favoritePoster;
// });

// Function to update posters
function updatePosters(songs, posterClass) {
    let posterHTML = "";
    songs.forEach((obj) => {
        posterHTML += `<div class="relative">
            <img class="h-40" src=${obj.thumb} alt="">
            <i class="fa-solid play cursor-pointer absolute bottom-2 right-2 text-4xl text-white fa-circle-play"></i>
        </div>`;
    });
    document.querySelector(`.${posterClass}`).innerHTML = posterHTML;
}

// Search bar Functionality
function handleSearch() {
    var input = document.querySelector(".searchBar");
    const searchTheme = document.querySelector(".searchTheme");
    const searchItem = document.querySelector(".searchItem");

    // Function for the blur the Background while search and opening the search result
    function showSearchResults() {
        searchTheme.style.display = "block";
        searchItem.style.display = "block";
    }

    // Hiding Above things
    function hideSearchResults() {
        searchTheme.style.display = "none";
        searchItem.style.display = "none";
        searchItem.innerHTML = "";
        input.value = "";
    }

    //Updating in DOM
    input.addEventListener("focus", showSearchResults);
    input.addEventListener("blur", hideSearchResults);


    // Search Functionality (Search Result)
    input.addEventListener("input", function () {
        const keyword = input.value.toLowerCase();
        if (keyword === "") {
            searchItem.innerHTML = "";
        } else {
            const filteredArray = allSongs.filter(obj => obj.name.toLowerCase().includes(keyword));
            var clutter = "";
            filteredArray.forEach(function (obj) {
                clutter += `<div class="border-b cursor-pointer border-zinc-400"><h3>${obj.name}</h3></div>`
            });
            searchItem.innerHTML = clutter;
        }
    });

    // Keyboard Event for entering for search music
    document.addEventListener("keydown", function (event) {
        if (event.key === "/" && document.activeElement !== input) {
            input.focus();
            event.preventDefault();
        }
    });

    // Out from search
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            hideSearchResults();
        }
    });
}

// Add an event listener for each poster in the discover category
// document.querySelectorAll('.discoverPoster img').forEach((poster, index) => {
//     poster.addEventListener('click', () => {
//         playSong(allSongs[index]);
//     });
// });

// document.querySelectorAll('.play').forEach((poster, index) => {
//     poster.addEventListener('click', () => {
//         playSong(allSongs[index]);
//     });
// });


// // Add an event listener for each poster in the album category
// document.querySelectorAll('.albumPoster img').forEach((poster, index) => {
//     poster.addEventListener('click', () => {
//         playSong(album[index]);
//     });
// });

// document.querySelectorAll('.playa').forEach((poster, index) => {
//     poster.addEventListener('click', () => {
//         playSong(album[index]);
//     });
// });

// // Add an event listener for each poster in the favorite category
// document.querySelectorAll('.favoritePoster img').forEach((poster, index) => {
//     poster.addEventListener('click', () => {
//         playSong(favoriteSongs[index]);
//     });
// });

// document.querySelectorAll('.playb').forEach((poster, index) => {
//     poster.addEventListener('click', () => {
//         playSong(favoriteSongs[index]);
//     });
// });

// Add an event listener for poster clicks using event delegation
document.querySelector('#main').addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('play')) {
        // Extract the song index from the parent element
        const index = Array.from(target.parentElement.parentElement.children).indexOf(target.parentElement);
        playSong(allSongs[index]);
    } else if (target.classList.contains('playa')) {
        const index = Array.from(target.parentElement.parentElement.children).indexOf(target.parentElement);
        playSong(album[index]);
    } else if (target.classList.contains('playb')) {
        const index = Array.from(target.parentElement.parentElement.children).indexOf(target.parentElement);
        playSong(favoriteSongs[index]);
    }
});


function playSong(song) {
    const audioPlayer = document.getElementById('myAudio');
    audioPlayer.src = song.song;

    // Update the poster in the Now Playing section
    const playPoster = document.querySelector('.playPoster');
    playPoster.src = song.thumb;

    // Update the background image of the body
    document.body.style.backgroundImage = `url(${song.thumb})`;

    // Update the seek bar
    const seekBar = document.querySelector('.seek');
    const seekProgress = seekBar.querySelector('.absolute');

    // Reset the seek bar
    seekProgress.style.width = '0%';

    // Update the seek bar during playback
    audioPlayer.addEventListener('timeupdate', function () {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        seekProgress.style.width = `${progress}%`;
    });

    // Make the seek bar clickable
    seekBar.addEventListener('click', function (event) {
        const clickX = event.clientX - seekBar.getBoundingClientRect().left;
        const barWidth = seekBar.clientWidth;
        const percentage = (clickX / barWidth) * 100;

        // Update the audio playback position
        audioPlayer.currentTime = (percentage / 100) * audioPlayer.duration;
    });

    // Start playing the song
    audioPlayer.play();

    // Update the play/pause button state
    updatePlayPauseButtonState(audioPlayer.paused);
}

function togglePlayPause() {
    const audioPlayer = document.getElementById('myAudio');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    } else {
        audioPlayer.pause();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    }
    updatePlayPauseButtonState(audioPlayer.paused);
}


// Function to update the play/pause button state
function updatePlayPauseButtonState(isPaused) {
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    if (isPaused) {
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    } else {
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    }
}


let currentPlaylist; // Variable to store the current playlist (allSongs, album, favoriteSongs)
let currentSongIndex; // Variable to store the index of the currently playing song in the current playlist

// Call this function when you want to initialize a playlist
function setPlaylist(playlist) {
    currentPlaylist = playlist;
    currentSongIndex = 0;
}

function nextTrack() {
    if (currentPlaylist && currentSongIndex < currentPlaylist.length - 1) {
        currentSongIndex++;
        playSong(currentPlaylist[currentSongIndex]);
    } else {
        currentSongIndex = 0;
        playSong(currentPlaylist[currentSongIndex]);
    }
}

function previousTrack() {
    if (currentPlaylist && currentSongIndex > 0) {
        currentSongIndex--;
        playSong(currentPlaylist[currentSongIndex]);
    } else {
        currentSongIndex = currentPlaylist.length - 1;
        playSong(currentPlaylist[currentSongIndex]);
    }
}

// Get the volume control elements
const volumeControl = document.querySelector('.volume-control');
const volumeLevel = document.getElementById('volumeLevel');

// Add an event listener to the volume control
volumeControl.addEventListener('click', function (event) {
    const clickY = event.clientY - volumeControl.getBoundingClientRect().top;
    const barHeight = volumeControl.clientHeight;
    const percentage = 100 - (clickY / barHeight) * 100;

    // Update the audio volume
    const audioPlayer = document.getElementById('myAudio');
    audioPlayer.volume = percentage / 100;

    // Update the volume control bar
    volumeLevel.style.height = `${percentage}%`;
});

// Update the poster of Discover
updatePosters(allSongs, 'discoverPoster');

// Update the poster of Album
updatePosters(album, 'albumPoster');

// Update the poster of Favorite
updatePosters(favoriteSongs, 'favoritePoster');

setPlaylist(allSongs);

handleSearch();