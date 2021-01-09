const restartBtn = document.getElementById("restartBtn");
const injectGame = document.getElementById("injectGame");

let gameScore;
let endRound = 0;
let p1PointCount = 0;
let p2PointCount = 0;
let cpu;
let player1Turn;

restartBtn.addEventListener("click", function () {
    location.reload();
});

function loadData(url) {
    fetch(url).then((pvp) => {
        pvp.text().then(function (game) {
            if (url == "./pages/main.html") {
                injectGame.innerHTML = game;
                setTimeout(() => {
                    let cpuBtn = document.getElementById("cpuBtn");
                    let pvpBtn = document.getElementById("pvpBtn");

                    cpuBtn.addEventListener("click", function () {
                        cpu = true;
                        loadData("./pages/difficulty.html");
                    });
                    pvpBtn.addEventListener("click", function () {
                        cpu = false;
                        loadData("./pages/difficulty.html");
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
                        if (cpu){
                            loadData("./pages/game.html");
                        } else {
                            loadData("./pages/pvp.html");
                        }
                    });
                    fiveRounds.addEventListener("click", function () {
                        gameScore = 3;
                        if (cpu){
                            loadData("./pages/game.html");
                        } else {
                            loadData("./pages/pvp.html");
                        }
                    });
                    sevenRounds.addEventListener("click", function () {
                        gameScore = 4;
                        if (cpu){
                            loadData("./pages/game.html");
                        } else {
                            loadData("./pages/pvp.html");
                        }
                    });

                }, 300);

            }
            else if (url == "./pages/game.html") {
                injectGame.innerHTML = game;
                setTimeout(() => {
                    // Any game logic will go here

                    const selectionButtons = document.querySelectorAll('[data-selection]');
                    let p1Points = document.getElementById("p1Points");
                    let p2Points = document.getElementById("p2Points");
                    p1Points.innerText = p1PointCount;
                    p2Points.innerText = p2PointCount;
                    let makeGoAway = document.getElementById("makeGoAway");
                    let p1Chose = document.getElementById("p1Chose");
                    let p2Chose = document.getElementById("p2Chose");

                    async function getCpuHand(selection) {
                        let promiseResult = await fetch(
                            "https://csa2020studentapi.azurewebsites.net/rpsls"
                        );
                        let cpuHand = await promiseResult.text();

                        const selectionName = selection;

                        let wonRound = document.getElementById("wonRound");
                        let p1 = selectionName;
                        let p2 = cpuHand;

                        console.log("My Selection: " + p1);
                        console.log("CPU HAND: " + p2);

                        if (p1 === p2) {
                            p1Chose.innerText = "P1: " + p1;
                            p2Chose.innerText = "P2: " + p2;
                            wonRound.innerText = "Tie!!";
                            p1Points.innerText = p1PointCount;
                            p2Points.innerText = p2PointCount;
                            p1Chose.classList.remove("d-none");
                            p2Chose.classList.remove("d-none");
                            wonRound.classList.remove("d-none");
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
                            p1Chose.innerText = "P1: " + p1;
                            p2Chose.innerText = "P2: " + p2;
                            wonRound.innerText = "Player 1 Wins!!";
                            p1Points.innerText = p1PointCount;
                            p2Points.innerText = p2PointCount;
                            p1Chose.classList.remove("d-none");
                            p2Chose.classList.remove("d-none");
                            wonRound.classList.remove("d-none");
                            console.log("Player 1 wins!");
                        } else {
                            p2PointCount++;
                            endRound++;
                            p1Chose.innerText = "P1: " + p1;
                            p2Chose.innerText = "P2: " + p2;
                            p1Points.innerText = p1PointCount;
                            p2Points.innerText = p2PointCount;
                            p1Chose.classList.remove("d-none");
                            p2Chose.classList.remove("d-none");
                            wonRound.innerText = "Player 2 Wins!!";
                            wonRound.classList.remove("d-none");
                            console.log("Player 2 wins!");
                        }

                        console.log("p1: " + p1PointCount);
                        console.log("p2: " + p2PointCount);

                        if (p1PointCount === gameScore || p2PointCount === gameScore) {
                            console.log("end game");
                            showWinner();
                        } else {
                            setTimeout(() => {
                                loadData("./pages/game.html");
                            }, 3000)

                        }

                    }

                    function showWinner() {
                        restartBtn.classList.remove("d-none");
                        // p1Points.innerText = p1PointCount;
                        // p2Points.innerText = p2PointCount;
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




            else if (url == "./pages/pvp.html") {
                injectGame.innerHTML = game;
                setTimeout(() => {
                    // Any game logic will go here
            
                    const selectionButtons = document.querySelectorAll('[data-selection]');
                    let p1Points = document.getElementById("p1Points");
                    let p2Points = document.getElementById("p2Points");
                    // p1Points.innerText = p1PointCount;
                    // p2Points.innerText = p2PointCount;

                    let makeGoAway = document.getElementById("makeGoAway");
                    let p1Chose = document.getElementById("p1Chose");
                    let p2Chose = document.getElementById("p2Chose");
                    let wonRound = document.getElementById("wonRound");
                    let p1, p2;

                    async function getCpuHand(selection) {
                        
                        if (player1Turn){
                            p1 = selection;
                        } else {
                            p2 = selection;
                            
                            roundWinner();
                        }
            
                        function roundWinner(){
                            console.log("Player 1: " + p1);
                            console.log("Player 2: " + p2);
                            if (p1 === p2) {
                                p1Chose.innerText = "P1: " + p1;
                                p2Chose.innerText = "P2: " + p2;
                                wonRound.innerText = "Tie!!";
                                p1Points.innerText = p1PointCount;
                                p2Points.innerText = p2PointCount;
                                p1Chose.classList.remove("d-none");
                                p2Chose.classList.remove("d-none");
                                wonRound.classList.remove("d-none");
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
                                p1Chose.innerText = "P1: " + p1;
                                p2Chose.innerText = "P2: " + p2;
                                wonRound.innerText = "Player 1 Wins!!";
                                p1Points.innerText = p1PointCount;
                                p2Points.innerText = p2PointCount;
                                p1Chose.classList.remove("d-none");
                                p2Chose.classList.remove("d-none");
                                wonRound.classList.remove("d-none");
                                console.log("Player 1 wins!");
                            } else {
                                p2PointCount++;
                                endRound++;
                                p1Chose.innerText = "P1: " + p1;
                                p2Chose.innerText = "P2: " + p2;
                                p1Points.innerText = p1PointCount;
                                p2Points.innerText = p2PointCount;
                                p1Chose.classList.remove("d-none");
                                p2Chose.classList.remove("d-none");
                                wonRound.innerText = "Player 2 Wins!!";
                                wonRound.classList.remove("d-none");
                                console.log("Player 2 wins!");
                            }
                            console.log("p1: " + p1PointCount);
                            console.log("p2: " + p2PointCount);

                            if (p1PointCount === gameScore || p2PointCount === gameScore) {
                                console.log("end game");
                                showWinner();
                            } else {
                                setTimeout(() => {
                                    loadData("./pages/pvp.html");
                                }, 3000)
                
                            }

                        }
            
                        // if (p1 === p2) {
                        //     p1Chose.innerText = "P1: " + p1;
                        //     p2Chose.innerText = "P2: " + p2;
                        //     wonRound.innerText = "Tie!!";
                        //     p1Points.innerText = p1PointCount;
                        //     p2Points.innerText = p2PointCount;
                        //     p1Chose.classList.remove("d-none");
                        //     p2Chose.classList.remove("d-none");
                        //     wonRound.classList.remove("d-none");
                        //     console.log("Tie!")
                        // }
                        // else if (
                        //     (p1 === "Rock" && (p2 === "Scissors" || p2 === "Lizard")) ||
                        //     (p1 === "Paper" && (p2 === "Rock" || p2 === "Spock")) ||
                        //     (p1 === "Scissors" && (p2 === "Paper" || p2 === "Lizard")) ||
                        //     (p1 === "Lizard" && (p2 === "Paper" || p2 === "Spock")) ||
                        //     (p1 === "Spock" && (p2 === "Rock" || p2 === "Scissors"))
                        // ) {
                        //     p1PointCount++;
                        //     endRound++;
                        //     p1Chose.innerText = "P1: " + p1;
                        //     p2Chose.innerText = "P2: " + p2;
                        //     wonRound.innerText = "Player 1 Wins!!";
                        //     p1Points.innerText = p1PointCount;
                        //     p2Points.innerText = p2PointCount;
                        //     p1Chose.classList.remove("d-none");
                        //     p2Chose.classList.remove("d-none");
                        //     wonRound.classList.remove("d-none");
                        //     console.log("Player 1 wins!");
                        // } else {
                        //     p2PointCount++;
                        //     endRound++;
                        //     p1Chose.innerText = "P1: " + p1;
                        //     p2Chose.innerText = "P2: " + p2;
                        //     p1Points.innerText = p1PointCount;
                        //     p2Points.innerText = p2PointCount;
                        //     p1Chose.classList.remove("d-none");
                        //     p2Chose.classList.remove("d-none");
                        //     wonRound.innerText = "Player 2 Wins!!";
                        //     wonRound.classList.remove("d-none");
                        //     console.log("Player 2 wins!");
                        // }
                    }
            
                    function showWinner() {
                        restartBtn.classList.remove("d-none");
                        // p1Points.innerText = p1PointCount;
                        // p2Points.innerText = p2PointCount;
                        makeGoAway.classList.add("d-none");
                        loadData("./pages/showWinner.html");
                    }
            
                    selectionButtons.forEach(selectionButton => {
                        selectionButton.addEventListener("click", e => {
                            if (player1Turn){
                                player1Turn = false;
                            } else {
                                player1Turn = true;
                            }
                            getCpuHand(selectionButton.dataset.selection);
                        })
                    })

                }, 300);
            }
        });
    });
}

loadData("./pages/main.html");