const btnPrev = document.querySelector('.button_prev');
const btnNext = document.querySelector('.button_next');
const slider = document.querySelector('.slider');
const dot = document.querySelector('.dots_list');
const dots = document.querySelectorAll('.dot');
const slides = Array.from(slider.querySelectorAll('.image'));
const slideCount = slides.length;
let slideIndex = 0;



btnPrev.addEventListener('click', showPreviousSlide);
btnNext.addEventListener('click', showNextSlide);
dot.addEventListener('click', showByChoice)



function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    changeDotClassList()
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    changeDotClassList()
    updateSlider();
}

function changeDotClassList() {
    const outdatedDot = document.querySelector('.active');
    outdatedDot.classList.remove('active');
    dots.forEach(dot => {
        if (slideIndex === Number(dot.dataset.id)) {
            dot.classList.add('active');
        }
    });
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function showByChoice(event) {
    if (event.target.tagName != 'LI') return;
    slideIndex = Number(event.target.dataset.id);
    changeDotClassList();
    updateSlider();
}

updateSlider();
