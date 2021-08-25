// $(document).ready(function() {
//     $('.header__byrger').click( function(event){
//         $('.header__byrger,.menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });


// Меню бургер
const iconMenu = document.querySelector('.header__byrger');
const menuBody = document.querySelector('.menu');
if(iconMenu){
    iconMenu.addEventListener("click", function(e) {
        // document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset + document.querySelector('.menu__list').offsetHeight;

			if (iconMenu.classList.contains('active')) {
				document.body.classList.remove('lock');
				iconMenu.classList.remove('active');
				menuBody.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/arrow-left.svg" alt="arrow-left">',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/arrow-right.svg" alt="arrow-right">',
    });

    // $('.header__byrger').on('click', function(){
    //  $('.header__byrger, .menu').toggleClass('active');
    //     $('.menu').slideToggle(30);

    // });

});

