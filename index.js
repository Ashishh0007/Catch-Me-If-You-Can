//box catching functionality
function catchMe(el) {
    el.style.top = getRandom(0, (window.innerHeight - el.offsetHeight)) + 'px';
    el.style.left = getRandom(0, (window.innerWidth - el.offsetWidth)) + 'px';
    
}


function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}




//audio section
var audio = new Audio('katy-perry-harleys-in-hawaii-(slowed).mp3');
document.body.onclick = () => { audio.play(); }
audio.muted = false;
audio.volume = 0.1;
audio.loop = true;




//Title functionality
$(function() {
    setTimeout(function() {
        $("#music-info").fadeOut(1500);
    }, 4000);

})





