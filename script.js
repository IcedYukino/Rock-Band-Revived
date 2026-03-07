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
