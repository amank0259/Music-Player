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

const favoriteSongs = [
    {
        id: 1,
        name: "Aku Sayang x Sprinter (BassSlowed)",
        song: "src/songs/Aku Sayang x Sprinter (BassSlowed).mp3",
        thumb: "src/thumb/aaku sayang.jpg",
    },
    {
        id: 2,
        name: "Haye Ni Apa fer milange",
        song: "src/songs/Haye Ni Apa Fer Milange, Kde Na Kde Fer Milange (Video Song)Savi KahlonTu Phool Banna M Tara sajna.mp3",
        thumb: "src/thumb/Apa fer milange.jpg",
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
        thumb: "src/thumb/Hass Hass.jpg",
    },
    {
        id: 5,
        name: "Anuv Jain - HUSN ",
        song: "src/songs/Anuv Jain - HUSN (Lyrics).mp3",
        thumb: "src/thumb/Husn.jpg",
    },
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
        id: 8,
        name: "King Shit - Shubh ",
        song: "src/songs/King Shit - Shubh (Official Video).mp3",
        thumb: "src/thumb/King_shit_Shubh.jpg",
    },
]

var allSongsPoster = "";
allSongs.forEach(function(obj){
    allSongsPoster += `
    <div class="relative">
        <img class="h-40 contain" src=${obj.thumb} alt="">
        <i class="fa-solid absolute bottom-2 right-2 text-4xl text-white fa-circle-play"></i>
    </div>`;
    document.querySelector(".discoverPoster").innerHTML = allSongsPoster;
})

var albumPoster = "";
album.forEach(obj => {
    albumPoster += ``;
});


function handleSearch() {
    var input = document.querySelector(".searchBar");
    const searchTheme = document.querySelector(".searchTheme");
    const searchItem = document.querySelector(".searchItem");

    input.addEventListener("focus", function(){
        searchTheme.style.display = "block";
        searchItem.style.display = "block";
    });
    input.addEventListener("blur", function(){
        searchTheme.style.display = "none";
        searchItem.style.display = "none";
    });

    input.addEventListener("input", function () {
        // const keyword = input.value.toLowerCase();
        const filteredArray = allSongs.filter(obj => obj.name.toLowerCase().includes(input.value));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="border-b cursor-pointer border-zinc-400"><h3>${obj.name}</h3></div>`
            console.log(clutter);
            searchItem.innerHTML = clutter;
        })
    });
}

handleSearch();