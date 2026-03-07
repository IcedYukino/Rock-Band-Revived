async function loadSongs() {

const response = await fetch("songs.json");
const songs = await response.json();

const grid = document.getElementById("song-grid");

songs.forEach(song => {

const card = document.createElement("div");
card.className = "song-card";

card.innerHTML = `
<img src="${song.cover}" class="song-cover">

<div class="song-info">
<p class="song-title">${song.title}</p>
<p class="song-artist">${song.artist}</p>
<span class="genre">${song.genre}</span>
</div>

<div class="song-details">
<p>Album: ${song.album}</p>
<p>Year: ${song.year}</p>
<a href="#">▶ Preview</a>
</div>
`;

card.addEventListener("click", () => {

const details = card.querySelector(".song-details");

details.style.display =
details.style.display === "block"
? "none"
: "block";

});

grid.appendChild(card);

});

}

function searchSongs(){

const input = document
.getElementById("search")
.value
.toLowerCase();

const cards = document.querySelectorAll(".song-card");

cards.forEach(card => {

const text = card.innerText.toLowerCase();

card.style.display =
text.includes(input)
? "block"
: "none";

});

}

document.addEventListener("DOMContentLoaded", loadSongs);
