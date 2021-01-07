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
                console.log(game);
                injectGame.innerHTML = game;
                setTimeout(() => {
                    // Any game logic will go here
                    // const rock = document.getElementById("rock");
                    // const paper = document.getElementById("paper");
                    // const scissor = document.getElementById("scissor");
                    // const lizard = document.getElementById("lizard");
                    // const spock = document.getElementById("spock");
                    // rock.addEventListener("click", function () {
                    //     console.log("You chose rock!");
                    // });
                    // paper.addEventListener("click", function () {
                    //     console.log("You chose paper!");
                    // });
                    // scissor.addEventListener("click", function () {
                    //     console.log("You chose scissor!");
                    // });
                    // lizard.addEventListener("click", function () {
                    //     console.log("You chose lizard!");
                    // });
                    // spock.addEventListener("click", function () {
                    //     console.log("You chose spock!");
                    // });
                    const selectionButtons = document.querySelectorAll('[data-selection]');
                    const OPTIONS = [
                        {
                            name: 'Rock',
                            emoji: '✊',
                            beats: 'Scissors, Lizard'
                        },
                        {
                            name: 'Paper',
                            emoji: '✋',
                            beats: 'Rock, Spock'
                        },
                        {
                            name: 'Scissors',
                            emoji: '✌️',
                            beats: 'Paper, Lizard'
                        },
                        {
                            name: 'Lizard',
                            emoji: '🤏',
                            beats: 'Paper, Spock'
                        },
                        {
                            name: 'Spock',
                            emoji: '🖖',
                            beats: 'Rock, Scissors'
                        },
                    ]
                    let p1Points = document.getElementById("p1Points");
                    let p2Points = document.getElementById("p2Points");
                    p1Points = 0;
                    p2Points = 0;


                    selectionButtons.forEach(selectionButton => {
                        selectionButton.addEventListener("click", e => {
                            const selectionName = selectionButton.dataset.selection;
                            const selection = OPTIONS.find(selection => selection.name === selectionName);
                            makeSelection(selection);
                        })
                    })

                    function makeSelection(selection) {
                        const cpuSelection = getCpuHand();
                        const yourWinner = isWinner(selection, cpuSelection);
                        const cpuWinner = isWinner(cpuSelection, selection);
                        console.log(selection);
                        
                        // addSelectionResult(cpuSelection, cpuWinner);
                        // addSelectionResult(selection, yourWinner);

                        if (yourWinner){
                            p1Points++;
                        }
                        if (cpuWinner){
                            p2Points++;
                        }
                        // getCpuHand();
                    }

                    // function addSelectionResult(selection, winner){

                    // }

                    // function addPoint(){
                    //     if (yourWinner){

                    //     }
                    //     score.innerText = parseInt(score.innerText) +1;
                    // }

                    function isWinner(selection, opponentSelection) {
                        return selection.beats === opponentSelection.name;
                    }
                    
                    async function getCpuHand() {
                        let promiseResult = await fetch(
                            "https://csa2020studentapi.azurewebsites.net/rpsls"
                        );
                        let cpuHand = await promiseResult.text();
                        console.log(cpuHand);
                        return cpuHand;
                    }

                    

                }, 1000);
            }
        });
    });
}

loadData("./pages/main.html");