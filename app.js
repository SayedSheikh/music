let songIndex = 1;
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let Sname = document.querySelector(".Sname");
let songNames = document.querySelectorAll(".Name");
let songImgs = document.querySelectorAll(".songImg");
let Scndry_plays = document.querySelectorAll(".Scndry-play");
let audioElement = new Audio("./imges/1.mp3");
let mainPlay = document.querySelector("#mainPlay");
let progressBar = document.querySelector("#progressBar");
let audioTrack = document.querySelector(".audioTrack");

let songs = [
  {
    fileName: "Beautiful lier",
    filePath: "./imges/1.mp3",
    fileImagePath: "./imges/song1.svg",
  },
  {
    fileName: "Carnival",
    filePath: "./imges/2.mp3",
    fileImagePath: "./imges/song1.svg",
  },
  {
    fileName: "Everyday",
    filePath: "./imges/1.mp3",
    fileImagePath: "./imges/song1.svg",
  },
  {
    fileName: "With you",
    filePath: "./imges/2.mp3",
    fileImagePath: "./imges/song1.svg",
  },
  {
    fileName: "Higher",
    filePath: "./imges/1.mp3",
    fileImagePath: "./imges/song1.svg",
  },
  {
    fileName: "Tell me",
    filePath: "./imges/2.mp3",
    fileImagePath: "./imges/song1.svg",
  },
  {
    fileName: "I'm on my way",
    filePath: "./imges/1.mp3",
    fileImagePath: "./imges/song1.svg",
  },
];

songs.forEach((song, i) => {
  songNames[i].innerText = song.fileName;
  songImgs[i].setAttribute("src", song.fileImagePath);
});

const allPlays = () => {
  Scndry_plays.forEach((Scndry_play) => {
    Scndry_play.classList.remove("fa-circle-pause");
    Scndry_play.classList.add("fa-circle-play");
  });
};

Scndry_plays.forEach((Scndry_play) => {
  Scndry_play.addEventListener("click", (e) => {
    allPlays(); //let rest other off
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");

    songIndex = parseInt(e.target.id);

    audioElement.src = `./imges/${songIndex}.mp3`;
    audioElement.currentTime = 1;
    audioElement.play();
    audioTrack.style.opacity = "1";
    mainPlay.classList.remove("fa-circle-play");
    mainPlay.classList.add("fa-circle-pause");
    Sname.innerText = songs[songIndex - 1].fileName;
  });
});

mainPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    mainPlay.classList.remove("fa-circle-play");
    mainPlay.classList.add("fa-circle-pause");
    audioTrack.style.opacity = "1";

    document.getElementById(songIndex).classList.remove("fa-circle-play");
    document.getElementById(songIndex).classList.add("fa-circle-pause");
    Sname.innerText = songs[songIndex - 1].fileName;
  } else {
    audioElement.pause();
    allPlays();
    mainPlay.classList.remove("fa-circle-pause");
    mainPlay.classList.add("fa-circle-play");
    audioTrack.style.opacity = "0";
  }
});

audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  // console.log(progress);

  progressBar.value = progress;
  // progressBar.setAttribute("value", "progress");
});

progressBar.addEventListener("change", () => {
  let curTime = (progressBar.value / 100) * audioElement.duration;
  audioElement.currentTime = curTime;
});

left.addEventListener("click", () => {
  if (songIndex == 1) {
    songIndex = 7;
  } else {
    songIndex--;
  }
  audioElement.src = `./imges/${songIndex}.mp3`;
  audioElement.currentTime = 1;
  audioElement.play();
  audioTrack.style.opacity = "1";
  allPlays();
  document.getElementById(songIndex).classList.remove("fa-circle-play");
  document.getElementById(songIndex).classList.add("fa-circle-pause");
  Sname.innerText = songs[songIndex - 1].fileName;
});

right.addEventListener("click", () => {
  if (songIndex == 7) {
    songIndex = 1;
  } else {
    songIndex++;
  }
  audioElement.src = `./imges/${songIndex}.mp3`;
  audioElement.currentTime = 1;
  audioElement.play();
  allPlays();
  audioTrack.style.opacity = "1";
  document.getElementById(songIndex).classList.remove("fa-circle-play");
  document.getElementById(songIndex).classList.add("fa-circle-pause");
  Sname.innerText = songs[songIndex - 1].fileName;
});
