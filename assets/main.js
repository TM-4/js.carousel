'use strict';
(() => {
    const imgs = ['assets/img/01.jpg', 'assets/img/02.jpg', 'assets/img/03.jpg', 'assets/img/04.jpg', 'assets/img/05.jpg'];
    const slideImg = document.getElementById('slide_img');
    const prev = document.getElementById('prev');
    const page = document.getElementById('page');
    const next = document.getElementById('next');
    let current = 0;

    page.textContent = `${current + 1}/${imgs.length}`;


    next.addEventListener('click', () => {
        if (current + 1 < imgs.length) {
            current++;
            slideImg.src = imgs[current];
        }
        page.textContent = `${current + 1}/${imgs.length}`;
    });

    prev.addEventListener('click', () => {
        if (current > 0) {
            current--;
            slideImg.src = imgs[current];
        }
        page.textContent = `${current + 1}/${imgs.length}`;
    });

})();