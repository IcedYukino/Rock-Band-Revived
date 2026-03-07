function toggleDropdown(img){

let song = img.parentElement;
let dropdown = song.querySelector(".dropdown");

dropdown.style.display =
dropdown.style.display === "block"
? "none"
: "block";

}
