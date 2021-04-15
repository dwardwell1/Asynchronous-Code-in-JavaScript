let api_url = 'https://deckofcardsapi.com/api/deck/';
//1
$.getJSON(`${api_url}/new/draw`).then((data) => console.log(`${data.cards[0].value} of ${data.cards[0].suit}`));

//2
$.getJSON(`${api_url}/new/draw`)
	.then((data) => {
		let id = data.deck_id;
		console.log(`${data.cards[0].value} of ${data.cards[0].suit}`);
		return $.getJSON(`${api_url}/${id}/draw`);
	})
	.then((data) => console.log(`${data.cards[0].value} of ${data.cards[0].suit}`));

//3
let deckID = null;
let $btn = $('button');
let $cardArea = $('#card-area');

$.getJSON(`${api_url}/new/shuffle/`).then((data) => {
	console.log(data.deck_id);
	deckID = data.deck_id;
	$btn.show();
});

$btn.on('click', function() {
	$.getJSON(`${api_url}/${deckID}/draw`).then((data) => {
		console.log(data);
		let img = data.cards[0].image;
		$cardArea.append(
			$('<img>', {
				src: img
			})
		);
		if (data.remaining === 0) $btn.remove();
	});
});
