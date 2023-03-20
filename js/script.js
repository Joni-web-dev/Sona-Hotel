function search_modal() {
    let modal_btn = document.querySelector('.search ');
    let modal_close_btn = document.querySelector('.modal_search .close_btn button');
    let modal = document.querySelector('.modal_search');

    modal_btn.addEventListener('click', () => {
        modal.classList.add('active');
    });

    modal_close_btn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

search_modal();


// Header height

function header_height() {
    let window_height = window.innerHeight;
    let nav_height = document.querySelector('nav').getBoundingClientRect().height;

    document.querySelector('header').style.height = window_height - nav_height + 'px';
}

header_height();


//SLIDER

function activeReviewsSlider() {
    const swiper = new Swiper('.reviews .swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
}

activeReviewsSlider();