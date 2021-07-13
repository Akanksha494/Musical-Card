const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");
const name=document.getElementById("name");
const quotes=document.getElementById("quotes");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs=[
  {
    name1:"sound",
    img:"img1",
    name:"MUSIC WORLD",
    quotes:"THE HAPPINESS"
  },
  {
    name1:"sound1",
    img:"img3",
    name:"LOVE IS MUSIC",
    quotes:"THE LOYALISTIC"
  },
  {
    name1:"sound2",
    img:"img4",
    name:"PERFECT MUSIC",
    quotes:"THE LOVELIEST"
  },
];
let isPlaying=false;
const playMusic = () => {
  isPlaying=true;
  music.play();
  play.classList.replace("fa-play","fa-pause");
img.classList.add("anime");
};
const pauseMusic = () => {
  isPlaying=false;
  music.pause();
  play.classList.replace("fa-pause","fa-play");
img.classList.add("anime");
};
play.addEventListener("click",() => {
  if(isPlaying){
  pauseMusic();
}
  else {
    playMusic();
  }
});
const loadSong=(songs)=>{
  name.textContent=songs.name;
  quotes.textContent=songs.quotes;
  music.src="sounds/"+songs.name1 +".mp3";
   img.src="images/"+songs.img +".jpg";
 };
 songIndex=0;

 const nextSong= () =>{
   songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
 };
 const prevSong= () =>{
   songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
 };
 next.addEventListener('click',nextSong);
 prev.addEventListener('click',prevSong);
