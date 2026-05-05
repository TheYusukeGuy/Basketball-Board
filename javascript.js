let homeScr = document.getElementById("home-score-num")
let awayScr = document.getElementById("away-score-num")

let theWinnerEl = document.getElementById("the-winner")

let homeCount = 0
let awayCount = 0

function HomePlusOne() {
    homeCount += 1;
    homeScr.textContent = homeCount
    CheckWinner()
}

function HomePlusTwo() {
    homeCount += 2;
    homeScr.textContent = homeCount
    CheckWinner()
}

function HomePlusThree() {
    homeCount += 3;
    homeScr.textContent = homeCount
    CheckWinner()
}

function AwayPlusOne() {
    awayCount += 1;
    awayScr.textContent = awayCount
    CheckWinner()
}

function AwayPlusTwo() {
    awayCount += 2;
    awayScr.textContent = awayCount
    CheckWinner()
}

function AwayPlusThree() {
    awayCount += 3;
    awayScr.textContent = awayCount
    CheckWinner()
}

function NewGame() {
    homeCount = 0
    awayCount = 0
    homeScr.textContent = 0
    awayScr.textContent = 0
    CheckWinner()
}

function CheckWinner() {
    if (homeCount > awayCount)
    {
        theWinnerEl.textContent = "The winner so far is : " + "Home"
    }
    else if (homeCount < awayCount)
    {
        theWinnerEl.textContent = "The winner so far is : " + "Away"
    }
    else
    {
        theWinnerEl.textContent = ""
    }
}