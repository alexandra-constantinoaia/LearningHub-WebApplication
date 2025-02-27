document.addEventListener('DOMContentLoaded', function () {
    // Carousel 1
    const prevBtn1 = document.getElementById('prevBtn1');
    const nextBtn1 = document.getElementById('nextBtn1');
    const carousel1 = document.getElementById('carousel1');
    const items1 = document.querySelectorAll('#carousel1 .carousel-item');
    const itemsPerPage = 4;
    const totalItems1 = items1.length;
    let currentIndex1 = 0;

    function updateCarouselPosition1() {
        const offset = -currentIndex1 * (items1[0].offsetWidth + 20);
        carousel1.style.transform = `translateX(${offset}px)`;

        if (currentIndex1 === 0) {
            prevBtn1.disabled = true;
        } else {
            prevBtn1.disabled = false;
        }

        if (currentIndex1 === totalItems1 - itemsPerPage) {
            nextBtn1.disabled = true;
        } else {
            nextBtn1.disabled = false;
        }
    }

    nextBtn1.addEventListener('click', function () {
        if (currentIndex1 < totalItems1 - itemsPerPage) {
            currentIndex1++;
            updateCarouselPosition1();
        }
    });

    prevBtn1.addEventListener('click', function () {
        if (currentIndex1 > 0) {
            currentIndex1--;
            updateCarouselPosition1();
        }
    });

    updateCarouselPosition1();  // Initialize carousel 1


    // Carousel 2
    const prevBtn2 = document.getElementById('prevBtn2');
    const nextBtn2 = document.getElementById('nextBtn2');
    const carousel2 = document.getElementById('carousel2');
    const items2 = document.querySelectorAll('#carousel2 .carousel-item');
    const totalItems2 = items2.length;
    let currentIndex2 = 0;

    function updateCarouselPosition2() {
        const offset = -currentIndex2 * (items2[0].offsetWidth + 20);
        carousel2.style.transform = `translateX(${offset}px)`;

        if (currentIndex2 === 0) {
            prevBtn2.disabled = true;
        } else {
            prevBtn2.disabled = false;
        }

        if (currentIndex2 === totalItems2 - itemsPerPage) {
            nextBtn2.disabled = true;
        } else {
            nextBtn2.disabled = false;
        }
    }

    nextBtn2.addEventListener('click', function () {
        if (currentIndex2 < totalItems2 - itemsPerPage) {
            currentIndex2++;
            updateCarouselPosition2();
        }
    });

    prevBtn2.addEventListener('click', function () {
        if (currentIndex2 > 0) {
            currentIndex2--;
            updateCarouselPosition2();
        }
    });

    updateCarouselPosition2();  // Initialize carousel 2
});
