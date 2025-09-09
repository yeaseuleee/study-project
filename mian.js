let conputerNum = 0;
let playBtn = document.getElementById('playBtn');
let userInput = document.getElementById('userInput');
let resultArea = document.getElementById('resultArea');
let resetBtn = document.getElementById('resetBtn');
let chance = 5;
let gameOver = false;
let chanceArea = document.getElementById('chanceArea');
let history = [];



playBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
    userInput.value = "";
})

function randomPick() {
    conputerNum = Math.floor(Math.random() * 100) + 1;
    console.log(conputerNum);
}

function play() {
    let userValue = userInput.value;

    if (userValue<1 || userValue>100) {
        resultArea.textContent= "1과 100사이 숫자를 입력해주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자 입니다."
        return;
    }

    chance--;
    chanceArea.textContent = chance;

    if (userValue < conputerNum) {
        resultArea.textContent = "⬆️좀 더 올려봐⬆️"
    } else if (userValue > conputerNum) {
        resultArea.textContent = "⬇️좀 더 내려봐⬇️"
    } else {
        resultArea.textContent = "✅맞아✅"
        gameOver=true;
    }

    history.push(userValue)
    console.log(history);

    if (chance < 1) {
        gameOver=true;
    }

    if (gameOver == true) {
        playBtn.disabled = true;
    }
}

function reset() {
    userInput.value = "";
    randomPick();
}

randomPick();