let songs = [];
let currentTab = "main";

fetch("songs.json")
.then(response => response.json())
.then(data => {

songs = data;
displaySongs(songs);

});

function displaySongs(songList){

const grid = document.getElementById("song-grid");
grid.innerHTML = "";

const filtered = songList.filter(song =>
song.category === currentTab
);

document.getElementById("song-count").innerText =
filtered.length + " songs";

filtered.forEach(song => {

const card = document.createElement("div");
card.className = "song";

card.innerHTML = `
<img src="${song.cover}">
<h3>${song.title}</h3>
<p>${song.artist}</p>
`;

grid.appendChild(card);

});

}

function searchSongs(){

const input = document.getElementById("search").value.toLowerCase();

const filtered = songs.filter(song =>

(song.title.toLowerCase().includes(input) ||
song.artist.toLowerCase().includes(input))

);

displaySongs(filtered);

}

function switchTab(tab, button){

currentTab = tab;

document.querySelectorAll(".tab").forEach(btn=>{
btn.classList.remove("active");
});

button.classList.add("active");

displaySongs(songs);

}
