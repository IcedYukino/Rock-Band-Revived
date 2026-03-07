const songs = [
{
title:"Needles and Pins",
artist:"Ramones",
album:"Road to Ruin",
year:1978,
genre:"Punk",
cover:"covers/needlesandpins.png"
},
{
title:"Poison Whiskey",
artist:"Lynyrd Skynyrd",
album:"Pronounced Leh-Nerd Skin-Nerd",
year:1973,
genre:"Southern Rock",
cover:"covers/poisonwhiskey.png"
},
{
title:"Shattered Dreams",
artist:"Johnny Hates Jazz",
album:"Turn Back the Clock",
year:1988,
genre:"New Wave",
cover:"covers/shattereddreams.png"
},
{
title:"Prisoner of Love",
artist:"Tiny Tim",
album:"Tip Toe Through the Tulips",
year:1986,
genre:"Other",
cover:"covers/prisoneroflove.png"
}
];

function loadSongs(){

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

card.onclick = () => {

const details = card.querySelector(".song-details");

details.style.display =
details.style.display === "block"
? "none"
: "block";

};

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
