const ITEMS_PER_PAGE = 12;
let currentPage = 1;
const data = [
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/1.jpg',
		flat: '1',
		area: '39,37',
		numberRoom: '1',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/2.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '2',
		link: 'krakivskyy/flat-2-section-2-entrance-1',
		price: 1766439
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/3.jpg',
		flat: '1',
		area: '58.52',
		numberRoom: '3',
		link: 'krakivskyy/flat-3-section-2-entrance-1',
		price: 1385168
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/4.jpg',
		flat: '2',
		area: '83,09',
		numberRoom: '4',
		link: 'krakivskyy/flat-4-section-2-entrance-1',
		price: 1966740
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/5.jpg',
		flat: '1',
		area: '39,37',
		numberRoom: '5',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/6.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '6',
		link: 'krakivskyy/flat-6-section-2-entrance-1',
		price: 1779037
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/7.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '7',
		link: 'krakivskyy/flat-7-section-2-entrance-1',
		price: 1385168
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/8.jpg',
		flat: '2',
		area: '83,18',
		numberRoom: '8',
		link: 'krakivskyy/flat-8-section-2-entrance-1',
		price: 1968840
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/9.jpg',
		flat: '1',
		area: '39,37',
		numberRoom: '9',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/10.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '10',
		link: 'krakivskyy/flat-10-section-2-entrance-1',
		price: 1779037
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/11.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '11',
		link: 'krakivskyy/flat-11-section-2-entrance-1',
		price: 1385168
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/12.jpg',
		flat: '2',
		area: '83,18',
		numberRoom: '12',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/13.jpg',
		flat: '1',
		area: '83,18',
		numberRoom: '13',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/14.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '14',
		link: 'krakivskyy/flat-14-section-2-entrance-1',
		price: 1779037
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/15.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '15',
		link: 'krakivskyy/flat-15-section-2-entrance-1',
		price: 1385168
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/16.jpg',
		flat: '2',
		area: '83,18',
		numberRoom: '16',
		link: 'krakivskyy/flat-16-section-2-entrance-1',
		price: 1968840
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/17.jpg',
		flat: '1',
		area: '39,37',
		numberRoom: '17',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/18.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '18',
		link: 'krakivskyy/flat-18-section-2-entrance-1',
		price: 1779037
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/19.jpg',
		flat: '1',
		area: '58,82',
		numberRoom: '19',
		link: 'krakivskyy/flat-19-section-2-entrance-1',
		price: 1385168
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/20.jpg',
		flat: '2',
		area: '83,18',
		numberRoom: '20',
		link: 'krakivskyy/flat-20-section-2-entrance-1',
		price: 1968840
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/21.jpg',
		flat: '1',
		area: '39,37',
		numberRoom: '21',
		price: 0
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/22.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '22',
		link: 'krakivskyy/flat-22-section-2-entrance-1',
		price: 1779037
	},
	{
		type: 'sell',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/23.jpg',
		flat: '1',
		area: '58,52',
		numberRoom: '23',
		link: 'krakivskyy/flat-23-section-2-entrance-1',
		price: 1385168
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/1.jpg',
		flat: '2',
		area: '83,18',
		numberRoom: '24',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/25.jpg',
		flat: '1',
		area: '39,37',
		numberRoom: '25',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/26.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '26',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/27.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '27',
		price: 0
	},
	{
		type: 'sold',
		image: 'https://sashaswan.github.io/krakivskyy/images/entrance/box/28.jpg',
		flat: '2',
		area: '75,16',
		numberRoom: '28',
		price: 0
	}
];
const NUMBER_OF_PAGES = Math.ceil(data.length / ITEMS_PER_PAGE);
const types = ['sold', 'sell', 'nothing'];
let templates = {};
const promises = [];
types.forEach((type) => {
	const promise = new Promise((resolve, reject) => {
		const rawFile = new XMLHttpRequest();
		rawFile.open("GET", `https://sashaswan.github.io/krakivskyy/entranceType/${type}.html`, false);
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