const ITEMS_PER_PAGE = 12;
let currentPage = 1;
const data = [
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/16.jpg',
		flat: '2',
		area: '77,16',
		numberRoom: '16',
		link: '/flat-16-section-1-entrance-2',
		price: 1826377
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/17.jpg',
		flat: '1',
		area: '50,01',
		numberRoom: '17',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/18.jpg',
		flat: '1',
		area: '77,99',
		numberRoom: '18',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/19.jpg',
		flat: '1',
		area: '73,34',
		numberRoom: '19',
		link: '/flat-19-section-1-entrance-2',
		price: 1738598
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/20.jpg',
		flat: '2',
		area: '77,16',
		numberRoom: '20',
		link: '/flat-20-section-1-entrance-2',
		price: 1826377
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/21.jpg',
		flat: '1',
		area: '50,01',
		numberRoom: '21',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/22.jpg',
		flat: '2',
		area: '77,99',
		numberRoom: '22',
		link: '/flat-22-section-1-entrance-2',
		price: 1848830
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/23.jpg',
		flat: '1',
		area: '73,34',
		numberRoom: '23',
		link: '/flat-23-section-1-entrance-2',
		price: 1738598
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/24.jpg',
		flat: '2',
		area: '77,16',
		numberRoom: '24',
		link: '/flat-24-section-1-entrance-2',
		price: 1826377
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/25.jpg',
		flat: '1',
		area: '50,01',
		numberRoom: '25',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/26.jpg',
		flat: '2',
		area: '77,99',
		numberRoom: '26',
		link: '/flat-26-section-1-entrance-2',
		price: 1848830
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat1/27.jpg',
		flat: '1',
		area: '73,34',
		numberRoom: '27',
		link: '/flat-27-section-1-entrance-2',
		price: 1738598
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat2/28.jpg',
		flat: '2',
		area: '77,16',
		numberRoom: '28',
		link: '/flat-28-section-1-entrance-2',
		price: 1826377
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat2/29.jpg',
		flat: '1',
		area: '50,01',
		numberRoom: '29',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat2/30.jpg',
		flat: '2',
		area: '77,99',
		numberRoom: '30',
		link: '/flat-30-section-1-entrance-2',
		price: 1848839
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat2/31.jpg',
		flat: '1',
		area: '73,34',
		numberRoom: '31',
		link: '/flat-31-section-1-entrance-2',
		price: 1738598
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat2/32.jpg',
		flat: '2',
		area: '73,91',
		numberRoom: '32',
		link: '/flat-32-section-1-entrance-2',
		price: 1738598
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat2/33.jpg',
		flat: '1',
		area: '47,47',
		numberRoom: '33',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat2/34.jpg',
		flat: '2',
		area: '74,29',
		numberRoom: '34',
		link: '/flat-34-section-1-entrance-2',
		price: 1761118
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/1-section-2-entrance/flat2/35.jpg',
		flat: '1',
		area: '73,34',
		numberRoom: '35',
		link: '/flat-35-section-1-entrance-2',
		price: 1738598
	}
];
const NUMBER_OF_PAGES = Math.ceil(data.length / ITEMS_PER_PAGE);
const types = ['sold', 'sell'];
let templates = {};
const promises = [];
types.forEach((type) => {
	const promise = new Promise((resolve, reject) => {
		const rawFile = new XMLHttpRequest();
		rawFile.open("GET", `https://sashaswan.github.io/krakivskyy/1-section-2Type/${type}.html`, false);
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