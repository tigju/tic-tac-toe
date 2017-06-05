
// isX determines which letter is next (X,O)
var isX = true;
var moveCount = 0;
var countX = 0;
var countO = 0;
var countD = 0;
var winner = false;

function move(pThis) {
	var gameStatus = document.getElementById("gameStatus");
  var xwon = document.getElementById("xwon");
  var owon = document.getElementById("owon");
  var draw = document.getElementById("draw");
	// get all the td from the td
	var moves = document.querySelectorAll("#game tbody td");	

	if((pThis.innerHTML === "X") || (pThis.innerHTML === "O")) {
	return ;
} //closing if((pThis.innerHTML === "X") || (pThis.innerHTML === "O"))
    
	if (isX){
		pThis.innerHTML = "X";
    pThis.value = 1;
    moveCount++;
	} //closing if (isX)
	else{
		pThis.innerHTML = "O";
    pThis.value = 1;
    moveCount++;
	} // closing else statament
  
	isX = !isX;
 
	/* This portion is responsible for postion 0,1,2
	   which is the 1st row */
	   
	var m1 = moves[0].innerHTML;
	var m2 = moves[1].innerHTML;
	var m3 = moves[2].innerHTML;

	var m4 = moves[3].innerHTML;
	var m5 = moves[4].innerHTML;
	var m6 = moves[5].innerHTML;

	var m7 = moves[6].innerHTML;
	var m8 = moves[7].innerHTML;
	var m9 = moves[8].innerHTML;

  
	if (m1 == "X" && m2 == "X" && m3 == "X") {
    winner = true;
    alert("X is a winner!");
   		gameStatus.innerHTML = "X is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countX++;
    resetCells();
    xwon.innerHTML = "X won " + countX + " times!";
  }
  
  if (m4 == "X" && m5 == "X" && m6 == "X") {
    winner = true;
    alert("X is a winner!");
   		gameStatus.innerHTML = "X is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countX++;
    resetCells();
    xwon.innerHTML = "X won " + countX + " times!";
  } 
  
  if (m7 == "X" && m8 == "X" && m9 == "X") {
    winner = true;
    alert("X is a winner!");
   		gameStatus.innerHTML = "X is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countX++;
    resetCells();
    xwon.innerHTML = "X won " + countX + " times!";
  } 
  
  if (m1 == "X" && m4 == "X" && m7 == "X") {
    winner = true;
    alert("X is a winner!");
   		gameStatus.innerHTML = "X is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countX++;
    resetCells();
    xwon.innerHTML = "X won " + countX + " times!";
  } 
  
  if (m2 == "X" && m5 == "X" && m8 == "X") {
    winner = true;
    alert("X is a winner!");
   		gameStatus.innerHTML = "X is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countX++;
    resetCells();
    xwon.innerHTML = "X won " + countX + " times!";
  }
  
  if (m3 == "X" && m6 == "X" && m9 == "X") {
    winner = true;
    alert("X is a winner!");
   		gameStatus.innerHTML = "X is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countX++;
    resetCells();
    xwon.innerHTML = "X won " + countX + " times!";
  }
  
  if (m1 == "X" && m5 == "X" && m9 == "X") {
    winner = true;
    alert("X is a winner!");
   		gameStatus.innerHTML = "X is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countX++;
    resetCells();
    xwon.innerHTML = "X won " + countX + " times!";
  }
  
  if (m3 == "X" && m5 == "X" && m7 == "X") {
    winner = true;
    alert("X is a winner!");
   		gameStatus.innerHTML = "X is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countX++;
    resetCells();
    xwon.innerHTML = "X won " + countX + " times!";
  }
  //closing if statement 
  
	if(m1 == "O" && m2 == "O" && m3 == "O") {
    winner = true;
    alert("O is a winner!");
   		gameStatus.innerHTML = "O is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countO++;
    resetCells();
    owon.innerHTML = "O won " + countO + " times!";
  } 
  
  if(m4 == "O" && m5 == "O" && m6 == "O") {
    winner = true;
    alert("O is a winner!");
   		gameStatus.innerHTML = "O is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countO++;
    resetCells();
    owon.innerHTML = "O won " + countO + " times!";
  }
  
  if(m7 == "O" && m8 == "O" && m9 == "O") {
    winner = true;
    alert("O is a winner!");
   		gameStatus.innerHTML = "O is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countO++;
    resetCells();
    owon.innerHTML = "O won " + countO + " times!";
  }
  
  if(m1 == "O" && m4 == "O" && m7 == "O") {
    winner = true;
    alert("O is a winner!");
   		gameStatus.innerHTML = "O is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countO++;
    resetCells();
    owon.innerHTML = "O won " + countO + " times!";
  }
  
  if(m2 == "O" && m5 == "O" && m8 == "O") {
    winner = true;
    alert("O is a winner!");
   		gameStatus.innerHTML = "O is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countO++;
    resetCells();
    owon.innerHTML = "O won " + countO + " times!";
  } 
  
  if(m3 == "O" && m6 == "O" && m9 == "O") {
    winner = true;
    alert("O is a winner!");
   		gameStatus.innerHTML = "O is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countO++;
    resetCells();
    owon.innerHTML = "O won " + countO + " times!";
  }
  
  if(m1 == "O" && m5 == "O" && m9 == "O") {
    winner = true;
    alert("O is a winner!");
   		gameStatus.innerHTML = "O is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countO++;
    resetCells();
    owon.innerHTML = "O won " + countO + " times!";
  }
 
  if(m3 == "O" && m5 == "O" && m7 == "O") {
    winner = true;
    alert("O is a winner!");
   		gameStatus.innerHTML = "O is a winner!" + "<div class='date'>"+ new Date() + "</div>";
    countO++;
    resetCells();
    owon.innerHTML = "O won " + countO + " times!";
  }
 //closing if statament   
    if(moveCount == 9 && winner == false) {
    drawCheck();
  }
}    //closing: function move(pThis)
	
//	function resetCells() {
//        var x = //document.getElementsByTagName('td');
//     for (var i=0; i<x.length; i++){
//        x[i].innerHTML = '';
//     }
//  }

function drawCheck()
{
    alert('Draw');
    gameStatus.innerHTML = "You tight!" + "<div class='date'>"+ new Date() + "</div>";
    countD++;
    resetCells();
    if(countD > 1) {
    draw.innerHTML = "You tight " + countD + " times!";
    } else {
      draw.innerHTML = "You tight " + countD + " time!";
    }
}

function resetCells() {
    for (var i=0; i<9; i++) {
        document.getElementsByClassName("gameCell")[i].innerHTML = "";
        document.querySelectorAll("#game tbody td")[i].value = 0;
        moveCount = 0;
    }
    winner = false;
}

function resetScore() {
  countX = 0;
  countO = 0;
  countD = 0;
  xwon.innerHTML = "";
  owon.innerHTML = "";
  draw.innerHTML = "";
  winner = false;
}
