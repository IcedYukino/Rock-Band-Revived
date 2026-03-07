function toggleDropdown(img){

const song = img.parentElement;
const dropdown = song.querySelector(".dropdown");

/* close other open dropdowns */
document.querySelectorAll(".dropdown").forEach(d => {
if(d !== dropdown){
d.style.display = "none";
}
});

/* toggle clicked dropdown */
if(dropdown.style.display === "block"){
dropdown.style.display = "none";
} else {
dropdown.style.display = "block";
}

}
function searchSongs() {

const input = document.getElementById("songSearch").value.toLowerCase();

const songs = document.querySelectorAll(".song");

songs.forEach(song => {

const title = song.querySelector("h3").innerText.toLowerCase();
const artist = song.querySelector(".artist").innerText.toLowerCase();

if(title.includes(input) || artist.includes(input)){
song.style.display = "block";
}else{
song.style.display = "none";
}

});

}
