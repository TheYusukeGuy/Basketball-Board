let homeScr = document.getElementById("home-score-num")
let guestScr = document.getElementById("guest-score-num")

let theWinnerEl = document.getElementById("the-winner")

let homeCount = 0
let guestCount = 0

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

function GuestPlusOne() {
    guestCount += 1;
    guestScr.textContent = guestCount
    CheckWinner()
}

function GuestPlusTwo() {
    guestCount += 2;
    guestScr.textContent = guestCount
    CheckWinner()
}

function GuestPlusThree() {
    guestCount += 3;
    guestScr.textContent = guestCount
    CheckWinner()
}

function NewGame() {
    homeCount = 0
    guestCount = 0
    homeScr.textContent = 0
    guestScr.textContent = 0
    CheckWinner()
}

function CheckWinner() {
    if (homeCount > guestCount)
    {
        theWinnerEl.textContent = "The winner so far is : " + "Home"
    }
    else if (homeCount < guestCount)
    {
        theWinnerEl.textContent = "The winner so far is : " + "Guest"
    }
    else
    {
        theWinnerEl.textContent = ""
    }
}