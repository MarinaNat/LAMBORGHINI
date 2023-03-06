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


//подключение карты

let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8,
	});
}

window.initMap = initMap;
