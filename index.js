let homePointsText = 0;
document.getElementById("home-points-text").textContent = homePointsText;

// console.log(pointsText)

// Home Buttons

function plusOnePointHome(){
    homePointsText += 1;
    document.getElementById("home-points-text").textContent = homePointsText;
}

function plusTwoPointHome(){
    homePointsText += 2;
    document.getElementById("home-points-text").textContent = homePointsText;
}

function plusThreePointHome(){
    homePointsText += 3;
    document.getElementById("home-points-text").textContent = homePointsText;
}

// Guest 

let guestPointsText = 0;
document.getElementById("guest-points-text").textContent = guestPointsText;


function plusOnePointGuest(){
    guestPointsText += 1;
    document.getElementById("guest-points-text").textContent = guestPointsText;
}

function plusTwoPointGuest(){
    guestPointsText += 2;
    document.getElementById("guest-points-text").textContent = guestPointsText;
}

function plusThreePointGuest(){
     guestPointsText += 3;
     document.getElementById("guest-points-text").textContent = guestPointsText;
}


