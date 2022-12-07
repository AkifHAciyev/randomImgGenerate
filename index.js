const URL = 'https://dog.ceo/api/breeds/image/random';
let body = document.querySelector('body');
let img = document.createElement('img');

setInterval(() => {
	axios.get(URL).then((res) => {
		img.src = res.data.message;
		body.append(img);
	});
}, 2000);
