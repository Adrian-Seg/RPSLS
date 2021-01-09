const restartBtn = document.getElementById("restartBtn");
const injectGame = document.getElementById("injectGame");

let gameScore;
let endRound = 0;
let p1PointCount = 0;
let p2PointCount = 0;

restartBtn.addEventListener("click", function () {
    location.reload();
});

// function chooseRounds() { }

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

                }, 300);
            }
            else if (url == "./pages/difficulty.html") {
                injectGame.innerHTML = game;
                setTimeout(() => {
                    let oneRound = document.getElementById("oneRound");
                    let fiveRounds = document.getElementById("fiveRounds");
                    let sevenRounds = document.getElementById("sevenRounds");

                    oneRound.addEventListener("click", function () {
                        gameScore = 1;
                        loadData("./pages/game.html");
                    });
                    fiveRounds.addEventListener("click", function () {
                        gameScore = 3;
                        loadData("./pages/game.html");
                    });
                    sevenRounds.addEventListener("click", function () {
                        gameScore = 4;
                        loadData("./pages/game.html");
                    });

                }, 300);

            }


            // else if (url == "./pages/difficulty.html") {
            //     injectGame.innerHTML = game;
            //     setTimeout(() => {
            //         let oneRound = document.getElementById("oneRound");
            //         let fiveRounds = document.getElementById("fiveRounds");
            //         let sevenRounds = document.getElementById("sevenRounds");

            //         oneRound.addEventListener("click", function () {
            //             // SET GAME TO 1 SCORE
            //             loadData("./pages/game.html");
            //         });
            //         fiveRounds.addEventListener("click", function () {
            //             // SET GAME TO 5 SCORE
            //             loadData("./pages/game.html");
            //         });
            //         sevenRounds.addEventListener("click", function () {
            //             // SET GAME TO 7 SCORE
            //             loadData("./pages/game.html");
            //         });
            //     }, 1000);
            // }
            else if (url == "./pages/game.html") {
                injectGame.innerHTML = game;
                setTimeout(() => {
                    // Any game logic will go here
                    // const rock = document.getElementById("rock");
                    // const paper = document.getElementById("paper");
                    // const scissors = document.getElementById("scissors");
                    // const lizard = document.getElementById("lizard");
                    // const spock = document.getElementById("spock");

                    // rock.addEventListener("click", function () {
                    //     console.log("You chose rock!");
                    //     getCpuHand();
                    // });
                    // paper.addEventListener("click", function () {
                    //     console.log("You chose paper!");
                    //     getCpuHand();
                    // });
                    // scissors.addEventListener("click", function () {
                    //     console.log("You chose scissors!");
                    //     getCpuHand();
                    // });
                    // lizard.addEventListener("click", function () {
                    //     console.log("You chose lizard!");
                    //     getCpuHand();
                    // });
                    // spock.addEventListener("click", function () {
                    //     console.log("You chose spock!");
                    //     getCpuHand();
                    // });

                    const selectionButtons = document.querySelectorAll('[data-selection]');

                    let p1Points = document.getElementById("p1Points");
                    let p2Points = document.getElementById("p2Points");
                    p1Points.innerText = p1PointCount;
                    p2Points.innerText = p2PointCount;
                    
                    let makeGoAway = document.getElementById("makeGoAway");

                    async function getCpuHand(selection) {
                        let promiseResult = await fetch(
                            "https://csa2020studentapi.azurewebsites.net/rpsls"
                        );
                        let cpuHand = await promiseResult.text();

                        const selectionName = selection;


                        let p1 = selectionName;
                        let p2 = cpuHand;
                        console.log("My Selection: " + selectionName);
                        console.log("CPU HAND: " + p2);

                        if (p1 === p2) {
                            console.log("Tie!")
                        }
                        else if (
                            (p1 === "Rock" && (p2 === "Scissors" || p2 === "Lizard")) ||
                            (p1 === "Paper" && (p2 === "Rock" || p2 === "Spock")) ||
                            (p1 === "Scissors" && (p2 === "Paper" || p2 === "Lizard")) ||
                            (p1 === "Lizard" && (p2 === "Paper" || p2 === "Spock")) ||
                            (p1 === "Spock" && (p2 === "Rock" || p2 === "Scissors"))
                        ) {
                            p1PointCount++;
                            endRound++;
                            console.log("Player 1 wins!");
                        } else {
                            p2PointCount++;
                            endRound++;
                            console.log("Player 2 wins!");
                        }


                        console.log("p1: " + p1PointCount);
                        console.log("p2: " + p2PointCount);

                        if (p1PointCount === gameScore || p2PointCount === gameScore) {
                            console.log("end game");
                            showWinner();
                        } else {
                            loadData("./pages/game.html");
                        }

                    }

                    function showWinner() {
                        restartBtn.classList.remove("d-none");
                        p1Points.innerText = p1PointCount;
                        p2Points.innerText = p2PointCount;
                        makeGoAway.classList.add("d-none");
                        loadData("./pages/showWinner.html");
                    }

                    selectionButtons.forEach(selectionButton => {
                        selectionButton.addEventListener("click", e => {
                            getCpuHand(selectionButton.dataset.selection);
                        })
                    })
                }, 300);
            }
        });
    });
}

loadData("./pages/main.html");