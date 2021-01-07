const restartBtn = document.getElementById("restartBtn");
const injectGame = document.getElementById("injectGame");

// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissor = document.getElementById("scissor");
// const lizard = document.getElementById("lizard");
// const spock = document.getElementById("spock");

// rock.addEventListener('click', function(){
//     console.log("You chose rock!");
// });
// paper.addEventListener('click', function(){
//     console.log("You chose paper!");
// });
// scissor.addEventListener('click', function(){
//     console.log("You chose scissor!");
// });
// lizard.addEventListener('click', function(){
//     console.log("You chose lizard!");
// });
// spock.addEventListener('click', function(){
//     console.log("You chose spock!");
// });

restartBtn.addEventListener("click", function () {
    location.reload();
});

function chooseRounds() { }


// function getWinner() {

// }

function loadData(url) {
    fetch(url).then((pvp) => {
        pvp.text().then(function (game) {
            if (url == "./pages/main.html") {
                injectGame.innerHTML = game;
                setTimeout(() => {
                    let cpuBtn = document.getElementById("cpuBtn");
                    let pvpBtn = document.getElementById("pvpBtn");

                    cpuBtn.addEventListener("click", function () {
                        loadData("./pages/difficulty.html");
                    });
                    pvpBtn.addEventListener("click", function () {
                        loadData("./pages/pvp.html");
                    });

                }, 1000);
            }
            else if (url == "./pages/difficulty.html") {
                injectGame.innerHTML = game;
                setTimeout(() => {
                    let oneRound = document.getElementById("oneRound");
                    let fiveRounds = document.getElementById("fiveRounds");
                    let sevenRounds = document.getElementById("sevenRounds");

                    oneRound.addEventListener("click", function () {
                        loadData("./pages/game.html");
                    });
                    fiveRounds.addEventListener("click", function () {
                        loadData("./pages/game.html");
                    });
                    sevenRounds.addEventListener("click", function () {
                        loadData("./pages/game.html");
                    });
                }, 1000);
            }
            else if (url == "./pages/game.html") {
                console.log(game);
                injectGame.innerHTML = game;
                setTimeout(() => {
                    // Any game logic will go here
                    const rock = document.getElementById("rock");
                    const paper = document.getElementById("paper");
                    const scissor = document.getElementById("scissor");
                    const lizard = document.getElementById("lizard");
                    const spock = document.getElementById("spock");
                    rock.addEventListener("click", function () {
                        console.log("You chose rock!");
                    });
                    paper.addEventListener("click", function () {
                        console.log("You chose paper!");
                    });
                    scissor.addEventListener("click", function () {
                        console.log("You chose scissor!");
                    });
                    lizard.addEventListener("click", function () {
                        console.log("You chose lizard!");
                    });
                    spock.addEventListener("click", function () {
                        console.log("You chose spock!");
                    });

                    // function getPlayerHand() {
                    //     let playerHand =
                    // }

                    async function getCpuHand() {
                        let promiseResult = await fetch(
                            "https://csa2020studentapi.azurewebsites.net/rpsls"
                        );
                        let info = await promiseResult.text();
                        console.log(info);
                    }
                    getCpuHand();

                }, 1000);
            }
        });
    });
}

loadData("./pages/main.html");