window.onload = function () {

    const loading = document.getElementById("loadingScreen");
    const welcome = document.getElementById("welcome");
    const letter = document.getElementById("letter");

    welcome.style.display = "none";
    letter.style.display = "none";

    setTimeout(function () {
        loading.style.display = "none";
        welcome.style.display = "flex";
    }, 4000);

};

function openLetter() {

    const welcome = document.getElementById("welcome");
    const letter = document.getElementById("letter");

    welcome.style.display = "none";

    document.body.style.overflow = "auto";

    letter.style.display = "block";
    letter.style.animation = "fadeLetter 1s ease";

    window.scrollTo(0, 0);

}
