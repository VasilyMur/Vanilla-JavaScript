const figure = document.querySelectorAll('figure');


function checkSlide(e) {
    
    //console.log(window.scrollY)
    //console.log(window.innerHeight);
    figure.forEach(sliderImage => {
        
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
        
//        console.log(window.innerHeight + window.scrollY);
//        console.log(imageBottom)
//        console.log(slideInAt)
//        console.log(sliderImage.offsetTop)
    })
}

window.addEventListener('scroll', debounce(checkSlide));




// DEBOUNCE FUNCTION
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


// FIX NAV

const header = document.querySelector('header');


function fixNav() {
    
    console.log(window.scrollY)
    if (window.scrollY >= 250) {
        document.body.style.paddingTop = `${header.offsetHeight}px`;
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}


window.addEventListener('scroll', fixNav);














