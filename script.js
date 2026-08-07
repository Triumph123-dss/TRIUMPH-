function openLetter() {
    document.querySelector(".welcome").style.display = "none";
    document.getElementById("letter").style.display = "block";
}

document.getElementById("envelope").addEventListener("click", openLetter);
