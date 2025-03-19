const ITEMS_PER_PAGE = 12;
let currentPage = 1;
const data = [
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat/1.jpg',
		flat: '2',
		area: '71,51',
		numberRoom: '1',
		link: '../flat-1-section-1-entrance-1',
		price: 1673334
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat2/11.jpg',
		flat: '1',
		area: '50,01',
		numberRoom: '2',
		link: '../flat-2-section-1-entrance-1',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat/3.jpg',
		flat: '1',
		area: '77,16',
		numberRoom: '3',
		link: '../flat-3-section-1-entrance-1',
		price: 1826377
	},
	{
		type: 'signup'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat/4.jpg',
		flat: '2',
		area: '71,51',
		numberRoom: '4',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat/5.jpg',
		flat: '1',
		area: '50,01',
		numberRoom: '5',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat/6.jpg',
		flat: '1',
		area: '77,16',
		numberRoom: '6',
		link: '../flat-6-section-1-entrance-1',
		price: 1826377
	},
	{
		type: 'brick'
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat/7.jpg',
		flat: '2',
		area: '71,51',
		numberRoom: '7',
		link: '../flat-7-section-1-entrance-1',
		price: 1695216
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat/8.jpg',
		flat: '1',
		area: '50,01',
		numberRoom: '8',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat/9.jpg',
		flat: '1',
		area: '77,16',
		numberRoom: '9',
		link: '../flat-9-section-1-entrance-1',
		price: 1826377
	},
	{
		type: 'slider',
		slider1: 'https://sashaswan.github.io/krakivskyy/images/1-1/slider/1.jpg',
		slider2: 'https://sashaswan.github.io/krakivskyy/images/1-1/slider/2.jpg',
		slider3: 'https://sashaswan.github.io/krakivskyy/images/1-1/slider/3.jpg',
		slider4: 'https://sashaswan.github.io/krakivskyy/images/1-1/slider/4.jpg'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat2/11.jpg',
		flat: '2',
		area: '71,51',
		numberRoom: '10',
		link: '../flat-10-section-1-entrance-1',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat2/11.jpg',
		flat: '1',
		area: '50,01',
		numberRoom: '11',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat2/12.jpg',
		flat: '1',
		area: '77,16',
		numberRoom: '12',
		price: 0
	},
	{
		type: 'signup'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat2/11.jpg',
		flat: '2',
		area: '67,79',
		numberRoom: '13',
		link: '../flat-13-section-1-entrance-1',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat2/14.jpg',
		flat: '1',
		area: '47,47',
		numberRoom: '14',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-1/flat2/15.jpg',
		flat: '1',
		area: '73,91',
		numberRoom: '15',
		link: '../flat-15-section-1-entrance-1',
		price: 1752110
	},
	{
		type: 'brick'
	}
];
const NUMBER_OF_PAGES = Math.ceil(data.length / ITEMS_PER_PAGE);
const types = ['sold', 'sell', 'signup', 'slider', 'brick'];
let templates = {};
const promises = [];
types.forEach((type) => {
	const promise = new Promise((resolve, reject) => {
		const rawFile = new XMLHttpRequest();
		rawFile.open("GET", `https://sashaswan.github.io/krakivskyy/1-section-1Type/${type}.html`, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					templates[type] = rawFile.responseText;
					resolve();
				}
			}
		}
		rawFile.send(null);
	});
	promises.push(promise);
});

Promise.all(promises).then(buildHtml);

function buildHtml() {
	let favorite = JSON.parse(localStorage.getItem('favorite'));
	if (!Array.isArray(favorite)) {
		favorite = [];
	}
	buildFavorite(favorite);
	data.forEach((item, index) => {
		const template = templates[item.type]
			.replace('{{type}}', item.type)
			.replace('{{image}}', item.image)
			.replace('{{flat}}', item.flat)
			.replace('{{area}}', item.area)
			.replace('{{link}}', item.link)
			.replace('{{slider1}}', item.slider1)
			.replace('{{slider2}}', item.slider2)
			.replace('{{slider3}}', item.slider3)
			.replace('{{slider4}}', item.slider4)
			.split('{{numberRoom}}').join(item.numberRoom)
			.replace('{{page}}', Math.floor(index / ITEMS_PER_PAGE) + 1)
			.split('{{isActive}}').join(favorite.includes(parseInt(item.numberRoom)) ? 'active' : '');
		$('.obj-container').append(template);
	});
	$('[page]').hide();
	$(`[page=${currentPage}]`).show();
	for (let i = 1; i <= NUMBER_OF_PAGES; ++i) {
		const button = $('<button></button>');
		button.text(i);
		button.addClass('numberPagination');
		if (i === currentPage) {
			button.addClass('activePagination');
		}
		button.click(() => {
			goTo(i);
		});
		$('#pagination').append(button);
	}

	$('[name="min_price"]').val(Math.min(...data.map(item => item.price)));
	$('[name="max_price"]').val(Math.max(...data.map(item => item.price)));
	const minPrice = Math.min(...data.filter(item => item.type === 'sell').map(item => item.price));
	const maxPrice = Math.max(...data.filter(item => item.type === 'sell').map(item => item.price));

	$(function () {
		$("#slider-range").slider({
			range: true,
			min: minPrice,
			max: maxPrice,
			values: [minPrice, maxPrice],
			slide: function (event, ui) {
				$("#amount").val("₴" + ui.values[0] + " - ₴" + ui.values[1]);
			}
		});
		$("#amount").val("₴" + $("#slider-range").slider("values", 0) +
			" - ₴" + $("#slider-range").slider("values", 1));
	});
}
function prev() {
	if (currentPage > 1) {
		currentPage -= 1;
		$('[page]').hide();
		$(`[page=${currentPage}]`).show();
		$('.numberPagination').attr('class', 'numberPagination');
		$(`.numberPagination:contains(${currentPage})`).addClass('activePagination');
	}
}
function next() {
	if (currentPage < data.length / ITEMS_PER_PAGE) {
		currentPage += 1;
		$('[page]').hide();
		$(`[page=${currentPage}]`).show();
		$('.numberPagination').attr('class', 'numberPagination');
		$(`.numberPagination:contains(${currentPage})`).addClass('activePagination');
	}
}
function goTo(page) {
	currentPage = page;
	$('[page]').hide();
	$(`[page=${currentPage}]`).show();
	$('.numberPagination').attr('class', 'numberPagination');
	$(`.numberPagination:contains(${currentPage})`).addClass('activePagination');
}
function buildFavorite(favorite) {
	$('#favoritebox').html('');
	const favoriteIcons = $('.obj-container .favorite');
	favoriteIcons.each(function () {
		console.log(this);
		const classes = $(this).attr('class').split(' ');
		if (classes[classes.length - 1] === 'active') {
			classes.pop();
		}
		$(this).attr('class', classes.join(' '));
	});
	data.filter(item => favorite.includes(parseInt(item.numberRoom)))
		.forEach((item, index) => {
			const template = templates[item.type]
				.replace('{{type}}', item.type)
				.replace('{{image}}', item.image)
				.replace('{{flat}}', item.flat)
				.replace('{{area}}', item.area)
				.replace('{{slider1}}', item.slider1)
				.replace('{{slider2}}', item.slider2)
				.replace('{{slider3}}', item.slider3)
				.replace('{{slider4}}', item.slider4)
				.split('{{numberRoom}}').join(item.numberRoom)
				.replace('{{page}}', Math.floor(index / ITEMS_PER_PAGE) + 1)
				.split('{{isActive}}').join(favorite.includes(parseInt(item.numberRoom)) ? 'active' : '');
			$('#favoritebox').append(template);
			$(`[number-room=${item.numberRoom}]`).addClass('active');
		});
}
function toggleFavorite(numberRoom) {
	let favorite = JSON.parse(localStorage.getItem('favorite'));
	if (!Array.isArray(favorite)) {
		favorite = [];
	}
	if (!favorite.includes(numberRoom)) {
		favorite.push(numberRoom);
	} else {
		favorite = favorite.filter(item => item !== parseInt(numberRoom));
	}
	localStorage.setItem('favorite', JSON.stringify(favorite));
	buildFavorite(favorite);
}
function filterByflat() {
	let filteredData = [...data];
	const isAllUnchecked = $('[name="flat_count"]:checked').length === 0;
	$('[name="flat_count"]').each(function () {
		const isChecked = $(this).is(':checked');
		const value = $(this).val();
		filteredData = filteredData.filter(item => isAllUnchecked || isChecked || item.flat !== value);
	});
	$('.obj-container').html('');
	let favorite = JSON.parse(localStorage.getItem('favorite'));
	if (!Array.isArray(favorite)) {
		favorite = [];
	}
	if (filteredData.length === 0) {
		$('.obj-container').append(templates.nothing);
	} else {
		filteredData.forEach((item, index) => {
			const template = templates[item.type]
				.replace('{{type}}', item.type)
				.replace('{{image}}', item.image)
				.replace('{{flat}}', item.flat)
				.replace('{{area}}', item.area)
				.replace('{{link}}', item.link)
				.replace('{{slider1}}', item.slider1)
				.replace('{{slider2}}', item.slider2)
				.replace('{{slider3}}', item.slider3)
				.replace('{{slider4}}', item.slider4)
				.split('{{numberRoom}}').join(item.numberRoom)
				.replace('{{page}}', Math.floor(index / ITEMS_PER_PAGE) + 1)
				.split('{{isActive}}').join(favorite.includes(parseInt(item.numberRoom)) ? 'active' : '');
			$('.obj-container').append(template);
		});
	}
}

function filterByPrice(showSold = false) {
	let filteredData = [...data];
	// const minPrice = Number($('[name="min_price"]').val());
	// const maxPrice = Number($('[name="max_price"]').val());
	const [minPrice, maxPrice] = $("#slider-range").slider('values');
	// if ($('[name="min_price"]').val() !== '' && $('[name="max_price"]').val() !== '') {
	filteredData = filteredData.filter(item => (showSold && item.type === 'sold') || (minPrice <= item.price && maxPrice >= item.price));
	// }
	$('.obj-container').html('');
	let favorite = JSON.parse(localStorage.getItem('favorite'));
	if (!Array.isArray(favorite)) {
		favorite = [];
	}
	if (filteredData.length === 0) {
		$('.obj-container').append(templates.nothing);
	} else {
		filteredData.forEach((item, index) => {
			const template = templates[item.type]
				.replace('{{type}}', item.type)
				.replace('{{image}}', item.image)
				.replace('{{flat}}', item.flat)
				.replace('{{area}}', item.area)
				.replace('{{link}}', item.link)
				.replace('{{slider1}}', item.slider1)
				.replace('{{slider2}}', item.slider2)
				.replace('{{slider3}}', item.slider3)
				.replace('{{slider4}}', item.slider4)
				.split('{{numberRoom}}').join(item.numberRoom)
				.replace('{{page}}', Math.floor(index / ITEMS_PER_PAGE) + 1)
				.split('{{isActive}}').join(favorite.includes(parseInt(item.numberRoom)) ? 'active' : '');
			$('.obj-container').append(template);
		});
	}
}

function resetFilter() {
	// $('[name="min_price"]').val('');
	// $('[name="max_price"]').val('');
	const minPrice = Math.min(...data.filter(item => item.type === 'sell').map(item => item.price));
	const maxPrice = Math.max(...data.filter(item => item.type === 'sell').map(item => item.price));
	$("#slider-range").slider('values', [minPrice, maxPrice]);
	filterByPrice(true);
}