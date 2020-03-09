var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow');
var totalSlideNo = document.querySelectorAll('[data-slider]').length;
leftArrow.onclick = function() {
    var currentSlide = getCurrentSlide();
    var currentSlideNo = currentSlide.getAttribute('data-slider');
    document.querySelectorAll(".click").forEach(($this) => {
        $this.classList.remove('click');
    });
    currentSlideNo = parseInt(currentSlideNo) - 1 == 0 ? totalSlideNo : currentSlideNo;
    document.querySelector(`[data-slider='${parseInt(currentSlideNo) - 1}']`).classList.add('visible');
    currentSlide.classList.add('click');

    setTimeout(() => {
        currentSlide.classList.remove('visible');
        currentSlide.classList.remove('click');
    }, 2500);
}

rightArrow.onclick = function() {
    var currentSlide = getCurrentSlide();
    var currentSlideNo = currentSlide.getAttribute('data-slider');
    
    currentSlideNo = parseInt(currentSlideNo) + 1 > totalSlideNo ? 0 : currentSlideNo;
    document.querySelector(`[data-slider='${1 + parseInt(currentSlideNo)}']`).classList.add('visible');
    currentSlide.classList.add('click');
    setTimeout(() => {
        currentSlide.classList.remove('visible');
        currentSlide.classList.remove('click');
    }, 2500);

}

function getCurrentSlide() {
    return document.getElementsByClassName('visible')[0];
}

setInterval(() => {
   
    rightArrow.click();
}, 5000);