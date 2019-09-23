var playerOne = 'X';
var playerTwo = 'O';
var currentPlayer = playerOne;
var switchPlayer = displayName1;
var displayName1 = "Player one";
var displayName2 = "Player two";


function switchPLayer(x, y) {

    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        document.getElementById("p1").innerHTML = "Enter your move " + displayName2
    } else {
        currentPlayer = playerOne;
        document.getElementById("p1").innerHTML = "Enter your move " + displayName1
    }
    document.getElementById("p3").innerHTML = "O = " + displayName2;
    document.getElementById("p2").innerHTML = "X = " + displayName1;


}

function setFieldOnBoard(x, y) {
    document.getElementById(x + "" + y).innerHTML = currentPlayer;
}

function processField(x, y) {

    if (!isFieldEmpty(x, y)) {
        return; // field is already filled, not allowed to click anymore
    }

    setFieldOnBoard(x, y);

    switchPLayer(x, y);

    if (hasWon(playerOne)) {
        playerOneHasWon();

        return;
    }

    if (isBoardFull()) {
        ifGameIsDraw();

        return;
    }

    if (hasWon(playerTwo)) {
        playerTwoHasWon();

        return;
    }
}

function isFieldEmpty(x, y) {
    return document.getElementById(x + "" + y).innerHTML != playerOne && document.getElementById(x + "" + y).innerHTML != playerTwo;
}

function getValueFromBoard(x, y) {
    return document.getElementById(x + "" + y).innerHTML;
}


function isBoardFull() {
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            if (isFieldEmpty(i, j)) {
                return false;
            }
        }
    }
    return true;
}

function ownsRow(player, row) {
    return getValueFromBoard(row, 0) == player && getValueFromBoard(row, 1) == player && getValueFromBoard(row, 2) == player;
}

function ownsColumn(player, column) {
    return getValueFromBoard(0, column) == player && getValueFromBoard(1, column) == player && getValueFromBoard(2, column) == player;

}

function hasWon(player) {
    if (ownsRow(player, 0) || ownsRow(player, 1) || ownsRow(player, 2)) {
        return true;
    }
    if (ownsColumn(player, 0) || ownsColumn(player, 1) || ownsColumn(player, 2)) {
        return true;
    }
    if (getValueFromBoard(0, 0) == player && getValueFromBoard(1, 1) == player && getValueFromBoard(2, 2) == player) {
        return true;
    }
    if (getValueFromBoard(0, 2) == player && getValueFromBoard(1, 1) == player && getValueFromBoard(2, 0) == player) {
        return true;
    } else return false;
}


function clearBoard() {
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            document.getElementById(i + "" + j).innerHTML = " ";
        }
    }

}

function setNames() {
    document.getElementById("p2").innerHTML = "Player one = " + displayName1;
    document.getElementById("p3").innerHTML = "Player two = " + displayName2
}

function startGame() {
    displayName1 = document.getElementById("playerOne").value;
    displayName2 = document.getElementById("playerTwo").value;
    document.getElementById("gameBoard").style.visibility = "visible";
    document.getElementById("p1").innerHTML = "Enter your first move " + displayName1;
    document.getElementById("playerOne").setAttribute("disabled", true);
    document.getElementById("playerTwo").setAttribute("disabled", true);
    document.getElementById("button2").disabled = true;
    document.getElementById("p3").innerHTML = "O = " + displayName2;
    document.getElementById("p2").innerHTML = "X = " + displayName1;
}

function playerOneHasWon() {
    document.getElementById("p1").innerHTML = displayName1 + " has won"
}

function playerTwoHasWon() {
    document.getElementById("p1").innerHTML = displayName2 + " has won"
}

function ifGameIsDraw() {
    document.getElementById("p1").innerHTML = "I'ts a draw"
}

function resetName() {
    document.getElementById("button2").removeAttribute("disabled");
    document.getElementById("playerOne").removeAttribute("disabled");
    document.getElementById("playerTwo").removeAttribute("disabled");
}

function resetGame() {
    clearBoard();
    document.getElementById("playerOne").setAttribute("disabled", true);
    document.getElementById("playerTwo").setAttribute("disabled", true);
    document.getElementById("button2").disabled = true;
}

function changeButton() {
    if (document.getElementById("button2") == true) {
        document.getElementById("button2").innerHTML = "Use names";
    }
}

