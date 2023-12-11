let homeScore = 0
let guestScore = 0
document.getElementById("home-score").textContent = 0
document.getElementById("guest-score").textContent = 0

let homeScoreElementGrab = document.getElementById("home-score")
let guestScoreELementGrab = document.getElementById("guest-score")

function add1Home(){
    homeScore += 1 
    homeScoreElementGrab.textContent = homeScore
}

function add2Home(){
    homeScore += 2
    homeScoreElementGrab.textContent = homeScore
}

function add3Home(){
    homeScore += 3
    homeScoreElementGrab.textContent = homeScore
}


function add1Guest(){
    guestScore += 1
    guestScoreELementGrab.textContent = guestScore
}

function add2Guest(){
    guestScore += 2
    guestScoreELementGrab.textContent = guestScore
}

function add3Guest(){
    guestScore += 3
    guestScoreELementGrab.textContent = guestScore
}