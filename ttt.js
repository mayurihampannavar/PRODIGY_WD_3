let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function makeMove(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            document.getElementById('result').innerText = `${currentPlayer} wins!`;
            gameOver = true;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('result').innerText = 'Draw!';
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];
    return winPatterns.some(pattern => pattern.every(index => board[index] === player));
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    document.getElementById('result').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
