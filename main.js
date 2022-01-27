const statusDisplay = document.querySelector('.game-status');
let gameActive = true;
let currentPlayer = "X";
var Xarray = [];
var Oarray = [];
var Xcells = null;
var Ocells = null;
var nturns = 0;
const rows = 3;
const cols = 3;
var nXcells = 0;
var nOcells = 0;
var gameStatus = 0;

function gameReset() {
    for (let i = 0; i < (rows * cols); i++) {
        document.getElementById(i).innerHTML = "?";
        document.getElementById(i).disabled = false;
    }
    currentPlayer = "X"
    nXcells = 0;
    nOcells = 0;
    nturns = 0;
    gameStatus = 0;
    document.getElementById("status").innerHTML = currentPlayer + " turn";
    for (i = 0; i < rows; i++) {
        Xarray[i] = [];
        Oarray[i] = [];
        for (j = 0; j < cols; j++) {
            Xarray[i][j] = 0;
            Oarray[i][j] = 0;
        }
    }
}

function setButton(id, val1, val2) {
    if (currentPlayer == "X") {
        document.getElementById(id).innerHTML = "❌";
        Xarray[val1][val2] = "X";
        //Xturns = Xturns + 1;
        nturns = nturns + 1;
        currentPlayer = "O";
        //gameArray[val] = "X";
        document.getElementById("status").innerHTML = currentPlayer + " turn";
        document.getElementById(id).disabled = true;
        //console.log(gameArray)
    } else {
        document.getElementById(id).innerHTML = "🫓";
        Oarray[val1][val2] = "O";
        //Oturns = Oturns + 1; 
        nturns = nturns + 1;
        currentPlayer = "X"
        //gameArray[val] = "O";
        document.getElementById("status").innerHTML = currentPlayer + " turn";
        document.getElementById(id).disabled = true;
        //console.log(gameArray)
    }
    if (nturns >= 3) {
        winner();
        if (gameStatus == 0) {
            nXcells = 0;
            nOcells = 0;
        }
    }
}

function rowCheck() {

    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            if (Xarray[i][j] == "X") {
                nXcells = nXcells + 1;
            }
            if (Oarray[i][j] == "O") {
                nOcells = nOcells + 1;
            }
        }
        if (nXcells != 3) {
            nXcells = 0;
        }
        if (nOcells != 3) {
            nOcells = 0;
        }

        if ((nXcells >= 3) && (nturns >= 3)) {
            document.getElementById("status").innerHTML = "X is the winner";
            gameStatus = 1;
            for (let i = 0; i < (rows * cols); i++) {
                document.getElementById(i).innerHTML = "?";
                document.getElementById(i).disabled = true;
            }
            return;
        }
        if ((nOcells >= 3) && (nturns >= 3)) {
            document.getElementById("status").innerHTML = "O is the winner";
            gameStatus = 1;
            for (let i = 0; i < (rows * cols); i++) {
                document.getElementById(i).innerHTML = "?";
                document.getElementById(i).disabled = true;
            }
            return;
        }
        if ((nturns == 9) && (gameStatus == 0)) {
            document.getElementById("status").innerHTML = "Its a draw";
            for (let i = 0; i < (rows * cols); i++) {
                document.getElementById(i).innerHTML = "?";
                document.getElementById(i).disabled = true;
            }
        }
    }
}

function colCheck() {

    for (j = 0; j < cols; j++) {
        for (i = 0; i < rows; i++) {
            if (Xarray[i][j] == "X") {
                nXcells = nXcells + 1;
            }
            if (Oarray[i][j] == "O") {
                nOcells = nOcells + 1;
            }
        }
        if (nXcells != 3) {
            nXcells = 0;
        }
        if (nOcells != 3) {
            nOcells = 0;
        }

        if ((nXcells >= 3) && (nturns >= 3)) {
            document.getElementById("status").innerHTML = "X is the winner";
            gameStatus = 1;
            for (let i = 0; i < (rows * cols); i++) {
                document.getElementById(i).innerHTML = "?";
                document.getElementById(i).disabled = true;
            }
            return;
        }
        if ((nOcells >= 3) && (nturns >= 3)) {
            document.getElementById("status").innerHTML = "O is the winner";
            gameStatus = 1;
            for (let i = 0; i < (rows * cols); i++) {
                document.getElementById(i).innerHTML = "?";
                document.getElementById(i).disabled = true;
            }
            return;
        }
        if ((nturns == 9) && (gameStatus == 0)) {
            document.getElementById("status").innerHTML = "Its a draw";
            for (let i = 0; i < (rows * cols); i++) {
                document.getElementById(i).innerHTML = "?";
                document.getElementById(i).disabled = true;
            }
        }
    }
}

function diagonCheck() {
    for (i = 0, j = 0; i < rows; i++,j++) {
        if (Xarray[i][j] == "X") {
            nXcells = nXcells + 1;
        }
        if (Oarray[i][j] == "O") {
            nOcells = nOcells + 1;
        }

    }
    if (nXcells != 3) {
        nXcells = 0;
    }
    if (nOcells != 3) {
        nOcells = 0;
    }
    if ((nXcells >= 3) && (nturns >= 3)) {
        document.getElementById("status").innerHTML = "X is the winner";
        gameStatus = 1;
        for (let i = 0; i < (rows * cols); i++) {
            document.getElementById(i).innerHTML = "?";
            document.getElementById(i).disabled = true;
        }
        return;
    }
    if ((nOcells >= 3) && (nturns >= 3)) {
        document.getElementById("status").innerHTML = "O is the winner";
        gameStatus = 1;
        for (let i = 0; i < (rows * cols); i++) {
            document.getElementById(i).innerHTML = "?";
            document.getElementById(i).disabled = true;
        }
        return;
    }
    if ((nturns == 9) && (gameStatus == 0)) {
        document.getElementById("status").innerHTML = "Its a draw";
        for (let i = 0; i < (rows * cols); i++) {
            document.getElementById(i).innerHTML = "?";
            document.getElementById(i).disabled = true;
        }
    }
    for (i = 0, j = 2; i < rows; i++, j--) {
        if (Xarray[i][j] == "X") {
            nXcells = nXcells + 1;
        }
        if (Oarray[i][j] == "O") {
            nOcells = nOcells + 1;
        }
    }
    if (nXcells != 3) {
        nXcells = 0;
    }
    if (nOcells != 3) {
        nOcells = 0;
    }
    if ((nXcells >= 3) && (nturns >= 3)) {
        document.getElementById("status").innerHTML = "X is the winner";
        gameStatus = 1;
        for (let i = 0; i < (rows * cols); i++) {
            document.getElementById(i).innerHTML = "?";
            document.getElementById(i).disabled = true;
        }
        return;
    }
    if ((nOcells >= 3) && (nturns >= 3)) {
        document.getElementById("status").innerHTML = "O is the winner";
        gameStatus = 1;
        for (let i = 0; i < (rows * cols); i++) {
            document.getElementById(i).innerHTML = "?";
            document.getElementById(i).disabled = true;
        }
        return;
    }
    if ((nturns == 9) && (gameStatus == 0)) {
        document.getElementById("status").innerHTML = "Its a draw";
        for (let i = 0; i < (rows * cols); i++) {
            document.getElementById(i).innerHTML = "?";
            document.getElementById(i).disabled = true;
        }
    }
}

function winner() {
    rowCheck();
    colCheck();
    diagonCheck();
}

function setGame() {
    document.getElementById("status").innerHTML = currentPlayer + " turn";
    for (i = 0; i < rows; i++) {
        Xarray[i] = [];
        Oarray[i] = [];
        for (j = 0; j < cols; j++) {
            Xarray[i][j] = null;
            Oarray[i][j] = null;
        }
    }
}