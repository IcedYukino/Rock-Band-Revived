let songs = [];

async function loadSongs(){

const response = await fetch("songs.json");
songs = await response.json();

displaySongs(songs);

}

function displaySongs(songList){

const grid = document.getElementById("song-grid");

grid.innerHTML = "";

/* UPDATE SONG COUNT */

document.getElementById("song-count").innerText =
songList.length + " songs";

songList.forEach(song => {

const card = document.createElement("div");
card.className = "song-card";

const genreClass = song.genre
.toLowerCase()
.replace(" ","-");

card.innerHTML = `

<img src="${song.cover}" class="song-cover">

<div class="song-info">
<p class="song-title">${song.title}</p>
<p class="song-artist">${song.artist}</p>

<span class="genre ${genreClass}">
${song.genre}
</span>

</div>

<div class="song-details">
<p>Album: ${song.album}</p>
<p>Year: ${song.year}</p>
<a href="#">▶ Preview</a>
</div>

`;

card.addEventListener("click",()=>{

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

const filtered = songs.filter(song =>
song.title.toLowerCase().includes(input) ||
song.artist.toLowerCase().includes(input)
);

displaySongs(filtered);

}

function sortSongs(){

const type = document.getElementById("sort").value;

let sorted = [...songs];

sorted.sort((a,b)=>{

if(type==="year"){
return a.year - b.year;
}

return a[type].localeCompare(b[type]);

});

displaySongs(sorted);

}

function filterGenre(){

const genre = document
.getElementById("genreFilter")
.value;

if(genre === "all"){
displaySongs(songs);
return;
}

const filtered = songs.filter(song =>
song.genre === genre
);

displaySongs(filtered);

}

document.addEventListener("DOMContentLoaded", loadSongs);
