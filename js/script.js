//Инициализируем Swiper

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 2,
	spaceBetween: 20,
	// Navigation arrows
	navigation: {
		nextEl: '.blog__button-left',
		prevEl: '.blog__button-right',
	},

});


