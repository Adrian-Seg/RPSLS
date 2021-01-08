const restartBtn = document.getElementById("restartBtn");
const injectGame = document.getElementById("injectGame");

restartBtn.addEventListener("click", function () {
    location.reload();
});

function chooseRounds() { }



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
                // console.log(game);
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
                    p1Points = 0;
                    p2Points = 0;

                    selectionButtons.forEach(selectionButton => {
                        selectionButton.addEventListener("click", e => {
                            const selectionName = selectionButton.dataset.selection;

                            let p1 = selectionName;
                            let p2 = getCpuHand();
                            console.log("My Selection: " + selectionName);
                            // getCpuHand();

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
                                p1Points++;
                                console.log("Player 1 wins!");
                            } else {
                                p2Points++;
                                console.log("Player 2 wins!");
                            }
                            
                        })
                        p1Points.innerText = p1Points;
                        p2Points.innerText = p1Points;
                    })
                    async function getCpuHand() {
                        let promiseResult = await fetch(
                            "https://csa2020studentapi.azurewebsites.net/rpsls"
                        );
                        let cpuHand = await promiseResult.text();
                        console.log("Cpu Hand: " + cpuHand);
                        return cpuHand;
                    }

                    

                }, 1000);
            }
        });
    });
}

loadData("./pages/main.html");