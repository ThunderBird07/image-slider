var currIndex = 1;
var playSlideshow = false;
var interval;
showImg(currIndex);

function slideshowFunc() {
    var button = document.getElementsByClassName("pageIndicator")[0].getElementsByTagName("button")[0]
    playSlideshow = !playSlideshow
    if (playSlideshow) {
        interval = setInterval(function () {
            btnFunc(1)
        }, 3000)
        button.style.background = "#377ed4ff"
        button.style.color = "#ffffff"
    } else {
        clearInterval(interval)
        button.style.background = "#ffffffb3"
        button.style.color = "#000000"
    }
}

function btnFunc(n) {
    showImg(currIndex += n);
}

function showImg(index) {
    var imgs = document.getElementsByClassName("slideImages");
    var indicatorLbl = document.getElementsByClassName("pageIndicator")[0].getElementsByTagName("p")[0];
    var i;
    
    if (index > imgs.length) {currIndex = 1} // loop back to start for right button

    if (index < 1) {currIndex = imgs.length} // Loop back to start for left button
    
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none"; // Set all images to be invisible
    }
    imgs[currIndex-1].style.display = "block"; // Set the current image to be visible
    indicatorLbl.textContent = currIndex+" / "+imgs.length;
}