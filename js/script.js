//Инициализируем Swiper

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.blog__button-right',
		prevEl: '.blog__button-left',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		}
	}

});


//бургер-меню

const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu__mobile');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('menu__open');
})

//подключение карты
//для стилизации google карты для запуска нужна оплата!

// let map;

// function initMap() {
// 	map = new google.maps.Map(document.getElementById("map"), {
// 		center: { lat: 37.23583903197588, lng: -8.630236331653352 },
// 		zoom: 14,
// 		styles: [
// 			{
// 				"featureType": "administrative",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"saturation": "-100"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "administrative.province",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"visibility": "off"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "landscape",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"saturation": -100
// 					},
// 					{
// 						"lightness": 65
// 					},
// 					{
// 						"visibility": "on"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "poi",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"saturation": -100
// 					},
// 					{
// 						"lightness": "50"
// 					},
// 					{
// 						"visibility": "simplified"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "road",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"saturation": "-100"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "road.highway",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"visibility": "simplified"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "road.arterial",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"lightness": "30"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "road.local",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"lightness": "40"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "transit",
// 				"elementType": "all",
// 				"stylers": [
// 					{
// 						"saturation": -100
// 					},
// 					{
// 						"visibility": "simplified"
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "water",
// 				"elementType": "geometry",
// 				"stylers": [
// 					{
// 						"hue": "#ffff00"
// 					},
// 					{
// 						"lightness": -25
// 					},
// 					{
// 						"saturation": -97
// 					}
// 				]
// 			},
// 			{
// 				"featureType": "water",
// 				"elementType": "labels",
// 				"stylers": [
// 					{
// 						"lightness": -25
// 					},
// 					{
// 						"saturation": -100
// 					}
// 				]
// 			}
// 		]
// 	});
// }

// window.initMap = initMap;
