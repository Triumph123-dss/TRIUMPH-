window.onload = function () {

    const loading = document.getElementById("loadingScreen");
    const welcome = document.getElementById("welcome");

    // Hide welcome while loading screen is showing
    welcome.style.display = "none";

    setTimeout(function () {

        loading.style.display = "none";
        welcome.style.display = "flex";

    }, 4000);

};

function openLetter() {

    const welcome = document.getElementById("welcome");
    const letter = document.getElementById("letter");

    welcome.style.opacity = "0";

    setTimeout(function () {

        welcome.style.display = "none";
        letter.style.display = "block";

    }, 800);

}
