turn = 1;
board = [0,0,0, 0,0,0, 0,0,0];
n = 0;

function resetBoard() {
	board = [0,0,0, 0,0,0, 0,0,0];
	n = 0;
	turn = 1;
	document.getElementById("winner").innerHTML = "";
	for (let i = 0; i<=8; i++) {
		document.getElementById(i).innerHTML = "";
		document.getElementById(i).classList.add("hover");
	}
}

function place(number) {
	//make sure there isn't already a marker \ game isnt already done
	if (document.getElementById("winner").innerHTML=="") {
		if (board[number]==0) {
			n+=1;
			document.getElementById(number).classList.remove("hover");
			if (turn==1) {
				document.getElementById(number).innerHTML = "X";
				turn = 0;
				board[number] = 1
				//test for all possible x wins
				if ((board[0]==1 && board[1]==1 && board[2]==1)||
					(board[3]==1 && board[4]==1 && board[5]==1)||
					(board[6]==1 && board[7]==1 && board[8]==1)||
					(board[0]==1 && board[3]==1 && board[6]==1)||
					(board[1]==1 && board[4]==1 && board[7]==1)||
					(board[2]==1 && board[5]==1 && board[8]==1)||
					(board[0]==1 && board[4]==1 && board[8]==1)||
					(board[2]==1 && board[4]==1 && board[6]==1)) {
					console.log("x win");
					document.getElementById("winner").innerHTML = "x wins!";
					return;
				}
			} else {
				document.getElementById(number).innerHTML = "O";
				turn = 1;
				board[number] = -1
				//test for all possible o wins
				if ((board[0]==-1 && board[1]==-1 && board[2]==-1)||
					(board[3]==-1 && board[4]==-1 && board[5]==-1)||
					(board[6]==-1 && board[7]==-1 && board[8]==-1)||
					(board[0]==-1 && board[3]==-1 && board[6]==-1)||
					(board[1]==-1 && board[4]==-1 && board[7]==-1)||
					(board[2]==-1 && board[5]==-1 && board[8]==-1)||
					(board[0]==-1 && board[4]==-1 && board[8]==-1)||
					(board[2]==-1 && board[4]==-1 && board[6]==-1)) {
	               	console.log("o win");
	               	document.getElementById("winner").innerHTML = "o wins!";
	               	return;
               	}
			}
			if (n==9) {
				//if 9 moves have been played and there is no winner, set it to tie
				console.log("tie");
				document.getElementById("winner").innerHTML = "its a tie!";
				return;
			}
		}
	} else{
		resetBoard();
	}
}
//set up on click functions
for (let i = 0; i <= 8; i++) { 
	document.getElementById(i).onclick = function() {place(i)};
}
document.getElementById("reset").onclick = function() {resetBoard()};