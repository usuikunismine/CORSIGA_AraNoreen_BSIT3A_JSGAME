function startGame() {
	document.turn = "X";
	setMessage(document.turn + " get's to start");
}

function setMessage(msg) {
	document.getElementById("message").innerText = msg;
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