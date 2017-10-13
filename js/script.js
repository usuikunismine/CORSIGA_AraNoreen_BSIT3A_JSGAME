function startGame() {
	document.turn = "X";
}

function nextMove(square) {
	square.innerText = document.turn;
	nextTurn();
}

function nextTurn() {
	if(document.turn == "X") {
		document.turn = "O";
	} else {
		document.turn = "X";
	}
}