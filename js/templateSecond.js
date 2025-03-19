const ITEMS_PER_PAGE = 12;
let currentPage = 1;
const data = [
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/29.jpg',
		flat: '3',
		area: '82,52',
		numberRoom: '29',
		link: 'https://sashaswan.github.io/krakivskyy/flat-29-section-2-entrance-2',
		price: 1953248
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/30.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '30',
		link: 'https://sashaswan.github.io/krakivskyy/flat-30-section-2-entrance-2',
		price: 1385168
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/31.jpg',
		flat: '1',
		area: '63.28',
		numberRoom: '31',
		link: 'https://sashaswan.github.io/krakivskyy/flat-31-section-2-entrance-2',
		price: 1495707
	},
	{
		type: 'signup'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/32.jpg',
		flat: '3',
		area: '82,61',
		numberRoom: '32',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/33.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '33',
		link: 'https://sashaswan.github.io/krakivskyy/flat-33-section-2-entrance-2',
		price: 1385168
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/34.jpg',
		flat: '1',
		area: '63,28',
		numberRoom: '34',
		link: 'https://sashaswan.github.io/krakivskyy/flat-34-section-2-entrance-2',
		price: 1499783
	},
	{
		type: 'brick'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/35.jpg',
		flat: '2',
		area: '82,61',
		numberRoom: '35',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/36.jpg',
		flat: '1',
		area: '58.52',
		numberRoom: '36',
		link: 'https://sashaswan.github.io/krakivskyy/flat-36-section-2-entrance-2',
		price: 1385168
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat/37.jpg',
		flat: '1',
		area: '63,28',
		numberRoom: '37',
		link: 'https://sashaswan.github.io/krakivskyy/flat-37-section-2-entrance-2',
		price: 1499783
	},
	{
		type: 'slider',
		slider1: 'https://sashaswan.github.io/krakivskyy/images/2-2/slider/1.jpg',
		slider2: 'https://sashaswan.github.io/krakivskyy/images/2-2/slider/2.jpg',
		slider3: 'https://sashaswan.github.io/krakivskyy/images/2-2/slider/3.jpg',
		slider4: 'https://sashaswan.github.io/krakivskyy/images/2-2/slider/4.jpg'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/38.jpg',
		flat: '3',
		area: '82,61',
		numberRoom: '38',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/39.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '39',
		link: 'https://sashaswan.github.io/krakivskyy/flat-39-section-2-entrance-2',
		price: 1385168
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/40.jpg',
		flat: '1',
		area: '63,28',
		numberRoom: '40',
		link: 'https://sashaswan.github.io/krakivskyy/flat-40-section-2-entrance-2',
		price: 1499783
	},
	{
		type: 'signup'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/41.jpg',
		flat: '2',
		area: '82,61',
		numberRoom: '41',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/44.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '42',
		link: 'https://sashaswan.github.io/krakivskyy/flat-42-section-2-entrance-2',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/43.jpg',
		flat: '1',
		area: '63,28',
		numberRoom: '43',
		link: 'https://sashaswan.github.io/krakivskyy/flat-43-section-2-entrance-2',
		price: 1499783
	},
	{
		type: 'brick'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/44.jpg',
		flat: '3',
		area: '82,61',
		numberRoom: '44',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/45.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '45',
		link: 'https://sashaswan.github.io/krakivskyy/flat-45-section-2-entrance-2',
		price: 1385168
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/2-2/flat2/44.jpg',
		flat: '1',
		area: '63,28',
		numberRoom: '46',
		link: 'https://sashaswan.github.io/krakivskyy/flat-46-section-2-entrance-2',
		price: 0
	},
	{
		type: 'slider',
		slider1: 'https://sashaswan.github.io/krakivskyy/images/2-2/slider/1.jpg',
		slider2: 'https://sashaswan.github.io/krakivskyy/images/2-2/slider/2.jpg',
		slider3: 'https://sashaswan.github.io/krakivskyy/images/2-2/slider/3.jpg',
		slider4: 'https://sashaswan.github.io/krakivskyy/images/2-2/slider/4.jpg'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/25.jpg',
		flat: '3',
		area: '82,61',
		numberRoom: '47',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/26.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '48',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/27.jpg',
		flat: '1',
		area: '63,28',
		numberRoom: '49',
		price: 0
	},
	{
		type: 'signup'
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/28.jpg',
		flat: '3',
		area: '82,61',
		numberRoom: '50',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/28.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '51',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/28.jpg',
		flat: '1',
		area: '63,29',
		numberRoom: '52',
		price: 0
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
		rawFile.open("GET", `https://sashaswan.github.io/krakivskyy/2-section-2Type/${type}.html`, false);
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