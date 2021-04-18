let api_url = 'https://deckofcardsapi.com/api/deck/';
//1

async function drawCard() {
	card = await $.getJSON(`${api_url}/new/draw`);
	console.log(`${card.cards[0].value} of ${card.cards[0].suit}`);
}
drawCard();

//2
async function drawTwo() {
	cardOne = await $.getJSON(`${api_url}/new/draw`);
	id = cardOne.deck_id;
	cardTwo = await $.getJSON(`${api_url}/${id}/draw`);
	console.log(
		`${cardOne.cards[0].value} of ${cardOne.cards[0].suit} and the ${cardTwo.cards[0].value} of ${cardTwo.cards[0]
			.suit} `
	);
}

drawTwo();

// //3
let deckID = null;
let $btn = $('button');
let $cardArea = $('#card-area');

async function draw52() {
	let deck = await $.getJSON(`${api_url}/new/shuffle/`);

	deckID = deck.deck_id;
	$btn.show();
}
draw52();

$btn.on('click', async function() {
	let card = await $.getJSON(`${api_url}/${deckID}/draw`);
	let img = card.cards[0].image;
	$cardArea.append(
		$('<img>', {
			src: img
		})
	);
	if (card.remaining === 0) $btn.remove();
});
