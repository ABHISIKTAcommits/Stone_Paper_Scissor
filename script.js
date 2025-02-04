let uscore = 0;
let cscore = 0;
let gameOver = false;

function playgame(userch) {
    if (gameOver) return;

    const choices = ['rock', 'paper', 'scissor'];
    const compch = choices[Math.floor(Math.random() * choices.length)];

    const images = {
        'rock': 'rock.png',
        'paper': 'paper.png',
        'scissor': 'scissors.png'
    };

    let result = '';
    let winMessage = '';

    if (userch === compch) {
        result = 'UHHH! IT IS A DRAW!';
    } else if (
        (userch === 'rock' && compch === 'scissor') ||
        (userch === 'paper' && compch === 'rock') ||
        (userch === 'scissor' && compch === 'paper')
    ) {
        result = "You win!";
        winMessage = "🎉 Congratulations! 🎉";
        uscore++;
    } else {
        result = "Computer wins!";
        cscore++;
    }

    if (uscore === 10 || cscore === 10) {
        result = "🎉 GAME OVER! " + (uscore === 10 ? "You won the game! 🏆" : "Computer won the game! 🤖");
        gameOver = true; 
    }

    document.getElementById("result").innerHTML = `
        You chose <img src="${images[userch]}" alt="${userch}" width="50px" height="50px">
        <p></p>Computer chose <img src="${images[compch]}" alt="${compch}" width="50px" height="50px">
        <p></p><br> ${result} <br> Score: ${uscore} - ${cscore}`;

    if (winMessage && !gameOver) {
        document.getElementById("result").classList.add("win");
        document.getElementById("result").innerHTML += `<br><span class="congrats">${winMessage}</span>`;
    } else {
        document.getElementById("result").classList.remove("win");
    }

    if (gameOver) {
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
        document.getElementById("result").innerHTML += `<br><button onclick="resetGame()">Restart</button>`;
    }
}

function resetGame() {
    uscore = 0;
    cscore = 0;
    gameOver = false;
    document.getElementById("result").innerHTML = "Game restarted! Choose an option to play.";
    document.querySelectorAll("button").forEach(btn => btn.disabled = false);
}
