console.log("hello")

let songIndex = 0;
let audioElement = new Audio("songs/song1.mp3");
let playPause = document.getElementById('play-pause')
let songItems = Array.from(document.getElementsByClassName('song'))
let progressbar = document.getElementById('progress');
let masterSongname = document.getElementById('songname');
let masterSinger = document.getElementById('singer');
let songImage  = document.getElementById('songImg');
let songImg = document.getElementById('songImg');


let songs = [
    {songname:"Patakha guddi" , singername:"Sultana and Jyoti Nooran" , filepath:"songs/song1.mp3" , coverPath:"covers/cover1.jpg"},
    {songname:"Dil to baccha hai ji " , singername:"Rahat fateh Ali Khan" , filepath:"songs/song2.mp3" , coverPath:"covers/cover2.jpg"},
    {songname:"Waareya" , singername:"Vibhor Parashar" , filepath:"songs/song3.mp3" , coverPath:"covers/cover3.jpg"},
    {songname:"bewajah" , singername:"Himesh Reshamiya" , filepath:"songs/song4.mp3" , coverPath:"covers/cover4.jpg"},
    {songname:"Kinna sona " , singername:"Sunil Kamath , Mithoon" , filepath:"songs/song5.mp3" , coverPath:"covers/cover5.jpg"},
    {songname:"Meri Maa" , singername:"Jubin Nautiyal" , filepath:"songs/song6.mp3" , coverPath:"covers/cover6.jpg"},
    {songname:"Phir se ud chala" , singername:"Mohit Chauhan" , filepath:"songs/song7.mp3" , coverPath:"covers/cover7.jpg"},
    {songname:"Rab ka shukrana" , singername:"Pritam , Mohit Chauhan" , filepath:"songs/song8.mp3" , coverPath:"covers/cover8.jpg"},
    {songname:"Rab manneya" , singername:"Lakhwinder Wadali , Neeti Mohan" , filepath:"songs/song9.mp3" , coverPath:"covers/cover9.jpg"},
    {songname:"Tumse mil ke dil ka " , singername:"Sonu Nigan , Sabri Brothers" , filepath:"songs/song10.mp3" , coverPath:"covers/cover10.jpg"},
    {songname:"Aabaad barbaad" , singername:"Arijit Singh , Pritam" , filepath:"songs/song11.mp3" , coverPath:"covers/cover11.jpg"},
    {songname:"Bhar do jholi meri " , singername:"Adnan Sami , Pritam" , filepath:"songs/song12.mp3" , coverPath:"covers/cover12.jpg"},
    {songname:"Ek Zindagi " , singername:"Taniskaa Sanghvi" , filepath:"songs/song13.mp3" , coverPath:"covers/cover13.jpg"},
    {songname:"Hasi " , singername:"Ami Miishra" , filepath:"songs/song14.mp3" , coverPath:"covers/cover14.jpg"},
    {songname:"Tu mileya" , singername:"Darshan Raval" , filepath:"songs/song15.mp3" , coverPath:"covers/cover15.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByTagName("p")[0].innerText = songs[i].songname; 
})
playPause.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        playPause.classList.remove('fa-play');
        playPause.classList.add('fa-pause');
        songImg.style.animation = "rotate 10s linear infinite";
    }
    else{
        audioElement.pause();
        playPause.classList.add('fa-play');
        playPause.classList.remove('fa-pause');
        songImg.style.animation = ""
    }
})

Array.from(document.getElementsByClassName('songfromlist')).forEach((element) => {
    // console.log(element)
    element.addEventListener('click' , (e)=>{
        console.log(e.target)
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/song${songIndex+1}.mp3`;
        masterSongname.innerText = songs[songIndex].songname;
        masterSinger.innerText = songs[songIndex].singername;
        songImage.src = `covers/cover${songIndex+1}.jpg`;
        audioElement.currentTime = 0;
        audioElement.play();
        playPause.classList.remove('fa-play');
        playPause.classList.add('fa-pause');
        songImg.style.animation = "rotate 10s linear infinite";

    })
})

audioElement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})
progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0)
    songIndex = 0;
    else
    songIndex-=1;

    audioElement.src = `songs/song${songIndex+1}.mp3`;
    masterSongname.innerText = songs[songIndex].songname;
    masterSinger.innerText = songs[songIndex].singername;
    songImage.src = `covers/cover${songIndex+1}.jpg`;
    audioElement.play();
    playPause.classList.remove('fa-play');
    playPause.classList.add('fa-pause');
    songImg.style.animation = "rotate 10s linear infinite";
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9)
    songIndex = 0;
    else
    songIndex+=1;

    audioElement.src = `songs/song${songIndex+1}.mp3`;
    masterSongname.innerText = songs[songIndex].songname;
    masterSinger.innerText = songs[songIndex].singername;
    songImage.src = `covers/cover${songIndex+1}.jpg`;
    audioElement.play();
    playPause.classList.remove('fa-play');
    playPause.classList.add('fa-pause');
    songImg.style.animation = "rotate 10s linear infinite";

})

// let check = document.getElementsByClassName('songfromlist');
// console.log(check[0].innerHTML)

const search = () =>{
    let searchbox = document.getElementById("SearchBox").value.toUpperCase();
    console.log(searchbox)
    let display2 = document.getElementById("display2");
    console.log(display2)
    let songlist = display2.getElementsByClassName("songList");
    console.log(songlist)
    let song = display2.getElementsByClassName("song");
    console.log(song)
    let sname = display2.getElementsByClassName("songfromlist");
    console.log(sname)

    for(let i=0; i<sname.length; i++)
    {
        let a = sname[i];
        let textvalue = a.textContent || a.innerHTML;

        if(textvalue.toUpperCase().indexOf(searchbox) > -1)
        {
            song[i].style.display = "";
        }
        else{
            song[i].style.display = "none";

        }
    }
}
