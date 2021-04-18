//1
let baseURL = 'http://numbersapi.com/';

async function favNum() {
	let fact = await $.getJSON(`${baseURL}9/?json`);
	console.log(fact.text);
}
//2
async function multFav() {
	let nums = await axios.get(`${baseURL}11..14,22/?json`);
	console.log(nums.data);
}

// //3

async function onPage() {
	let fourfacts = await Promise.all([
		$.getJSON(`${baseURL}21/?json`),
		$.getJSON(`${baseURL}21/?json`),
		$.getJSON(`${baseURL}21/?json`)
	]);
	fourfacts.forEach((data) => $('body').append(`<p>${data.text}</p>`));
}
