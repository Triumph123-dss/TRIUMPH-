window.onload=function(){

setTimeout(function(){

document.getElementById("loadingScreen").style.display="none";

},4000);

};

function openLetter(){

const welcome=document.getElementById("welcome");

const letter=document.getElementById("letter");

welcome.style.transition="1s";

welcome.style.opacity="0";

setTimeout(function(){

welcome.style.display="none";

letter.style.display="block";

letter.style.animation="fadeLetter 1.5s";

},1000);

}
