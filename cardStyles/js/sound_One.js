let closeBtn = document.querySelector(".close-btn");
let lineCloseBtn = document.querySelector(".line-btn");
let music = document.getElementById("music");
let play_music_button = document.getElementById("play-music-button");
let cardBox = document.querySelector(".card-box");
let cardContent = document.querySelector(".content");

blockOne.onmousemove = function (e) {
  closeBtn.style.position = "fixed";
  closeBtn.style.left = e.clientX + -20 + "px";
  closeBtn.style.top = e.clientY + -20 + "px";
};

// ======== Close Card

function clickCloseBtn() {
  closeBtn.style.display = "none";
  cardContent.classList.remove("content-show");
  cardBox.classList.remove("card-box-hover");
  music.currentTime = 0;
  music.pause();
  play_music_button.innerText = "Play";
}

cardBox.addEventListener("click", () => {
  cardBox.classList.add("card-box-hover");
  cardContent.classList.add("content-show");
  closeBtn.style.display = "block";
});
// ====== Audio ===

function playAudio() {
  if (music.paused) {
    music.play();
    play_music_button.innerText = "Pause";
    play_music_button.style.marginLeft = "100px";
  } else {
    music.pause();
    play_music_button.innerText = "Play";
    play_music_button.style.marginLeft = "115px";
  }
  music.addEventListener("ended", function () {
    play_music_button.innerText = "Play";
    play_music_button.style.marginLeft = "100px";
  });
}

// === Event Listeners
play_music_button.addEventListener("click", playAudio);
