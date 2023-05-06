let playerCheck = "player1"
let player1hand;
let player2hand;
let main = document.querySelector(".main")
let conc1 = document.querySelector(".end1")
let conc2 = document.querySelector(".end2")
conc1.style.display = "none"
conc2.style.display = "none"

let choice1 = document.querySelector(".choice-player-1")
let choice2 = document.querySelector(".choice-player-2")

let gameResult = function() {
    if(player1hand==player2hand){
        alert("ni4iya")
    }

    if(player1hand == "kamen" && player2hand == "nojnici") {
        alert("player 2 dead")
        conc1.style.display = "block"
        main.style.display = "none"
    }

    if(player1hand == "kamen" && player2hand == "bymaga") {
        alert("player 1 dead")
        conc2.style.display = "block"
        main.style.display = "none"
    }

    if(player1hand == "nojnici" && player2hand == "kamen") {
        alert("player 1 dead")
        conc2.style.display = "block"
        main.style.display = "none"
    }

    if(player1hand == "nojnici" && player2hand == "bymaga") {
        alert("player 2 dead")
        conc1.style.display = "block"
        main.style.display = "none"
    }

    if(player1hand == "bymaga" && player2hand == "kamen") {
        alert("player 2 dead")
        conc1.style.display = "block"
        main.style.display = "none"
    }

    if(player1hand == "bymaga" && player2hand == "nojnici") {
        alert("player 1 dead")
        conc2.style.display = "block"
        main.style.display = "none"
    }
}

let showHand = function() {
    if (player1hand=="kamen") {
        choice1.style.backgroundImage = "url(stone.png)"
        choice1.style.backgroundSize = "100% 100%"
    }

    if (player1hand=="nojnici") {
        choice1.style.backgroundImage = "url(nojni.png)"
        choice1.style.backgroundSize = "100% 100%"
    }

    if (player1hand=="bymaga") {
        choice1.style.backgroundImage = "url(paper.png)"
        choice1.style.backgroundSize = "100% 100%"
    }

    // player2

    if (player2hand=="kamen") {
        choice2.style.backgroundImage = "url(stone.png)"
        choice2.style.backgroundSize = "100% 100%"
    }

    if (player2hand=="nojnici") {
        choice2.style.backgroundImage = "url(nojni.png)"
        choice2.style.backgroundSize = "100% 100%"
    }

    if (player2hand=="bymaga") {
        choice2.style.backgroundImage = "url(paper.png)"
        choice2.style.backgroundSize = "100% 100%"
    }
}

document.addEventListener("keydown", function(arg){
            if(playerCheck=="player1"){
                if(arg.code=="KeyA"){
                    console.log('najata bykva A')
                    playerCheck = "player2";
                    player1hand = "kamen";
                }

                if(arg.code=="KeyD"){
                    console.log('najata bykva D')
                    playerCheck = "player2"
                    player1hand = "bymaga"
                }

                if(arg.code=="KeyS"){
                    console.log('najata bykva S')
                    playerCheck = "player2"
                    player1hand = "nojnici"
                }   
            }
            
            //player 2
            if(playerCheck=="player2"){
                if(arg.code=="KeyJ"){
                    console.log('najata bykva J')
                    playerCheck = "end"
                    player2hand = "kamen"
                }

                if(arg.code=="KeyL"){
                    console.log('najata bykva L')
                    playerCheck = "end"
                    player2hand = "bymaga"
                }

                if(arg.code=="KeyK"){
                    console.log('najata bykva K')
                    playerCheck = "end"
                    player2hand = "nojnici"
                } 
            }

            //end game
            if (playerCheck=="end"){
                playerCheck = null;
                setTimeout(gameResult, 2000);
                setTimeout(showHand, 1500);
            }
            
});