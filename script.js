function toggleDropdown(img) {

    const song = img.closest(".song");
    const dropdown = song.querySelector(".dropdown");

    // close all other dropdowns
    document.querySelectorAll(".dropdown").forEach(d => {
        if (d !== dropdown) {
            d.style.display = "none";
        }
    });

    // toggle clicked one
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }

}
