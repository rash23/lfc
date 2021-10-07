let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider_next").addEventListener("click", function () {
    offset = offset + 400;
    if (offset > 1600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider_prev").addEventListener("click", function () {
    offset = offset - 400;
    if (offset < 0) {
        offset = 1600;
    }
    sliderLine.style.left = -offset + "px";
});