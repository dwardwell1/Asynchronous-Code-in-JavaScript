//1
let baseURL = 'http://numbersapi.com/';

axios.get(`${baseURL}33/?json`).then((p1) => {
	console.log(p1.data);
});

//2
axios.get(`${baseURL}11..14,22/?json`).then((p1) => {
	console.log(p1.data);
});

//3
let fourFacts = [];
for (let i = 1; i < 5; i++) {
	fourFacts.push(axios.get(`${baseURL}69/?json`));
}
Promise.all(fourFacts).then((numArr) => numArr.forEach((fact) => $('body').append(`<p>${fact.data.text}</p>`)));
