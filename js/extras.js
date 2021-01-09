// else if (url == "./pages/pvp.html") {
//     injectGame.innerHTML = game;
//     setTimeout(() => {
//         // Any game logic will go here
//         // const rock = document.getElementById("rock");
//         // const paper = document.getElementById("paper");
//         // const scissors = document.getElementById("scissors");
//         // const lizard = document.getElementById("lizard");
//         // const spock = document.getElementById("spock");

//         // rock.addEventListener("click", function () {
//         //     console.log("You chose rock!");
//         //     getCpuHand();
//         // });
//         // paper.addEventListener("click", function () {
//         //     console.log("You chose paper!");
//         //     getCpuHand();
//         // });
//         // scissors.addEventListener("click", function () {
//         //     console.log("You chose scissors!");
//         //     getCpuHand();
//         // });
//         // lizard.addEventListener("click", function () {
//         //     console.log("You chose lizard!");
//         //     getCpuHand();
//         // });
//         // spock.addEventListener("click", function () {
//         //     console.log("You chose spock!");
//         //     getCpuHand();
//         // });

//         const selectionButtons = document.querySelectorAll('[data-selection]');
//         let p1Points = document.getElementById("p1Points");
//         let p2Points = document.getElementById("p2Points");
//         p1Points.innerText = p1PointCount;
//         p2Points.innerText = p2PointCount;
//         let makeGoAway = document.getElementById("makeGoAway");
//         let p1Chose = document.getElementById("p1Chose");
//         let p2Chose = document.getElementById("p2Chose");

//         async function getCpuHand(selection) {
//             // let promiseResult = await fetch(
//             //     "https://csa2020studentapi.azurewebsites.net/rpsls"
//             // );
//             // let cpuHand = await promiseResult.text();
//             if (player1Turn){
//                 let player1Hand = selection;
//             } else {
//                 let player2Hand = selection;
//             }
            
//             let wonRound = document.getElementById("wonRound");
//             let p1 = player1Hand;
//             let p2 = player2Hand;

//             console.log("Player 1: " + p1);
//             console.log("Player 2: " + p2);

//             if (p1 === p2) {
//                 p1Chose.innerText = "P1: " + p1;
//                 p2Chose.innerText = "P2: " + p2;
//                 wonRound.innerText = "Tie!!";
//                 p1Points.innerText = p1PointCount;
//                 p2Points.innerText = p2PointCount;
//                 p1Chose.classList.remove("d-none");
//                 p2Chose.classList.remove("d-none");
//                 wonRound.classList.remove("d-none");
//                 console.log("Tie!")
//             }
//             else if (
//                 (p1 === "Rock" && (p2 === "Scissors" || p2 === "Lizard")) ||
//                 (p1 === "Paper" && (p2 === "Rock" || p2 === "Spock")) ||
//                 (p1 === "Scissors" && (p2 === "Paper" || p2 === "Lizard")) ||
//                 (p1 === "Lizard" && (p2 === "Paper" || p2 === "Spock")) ||
//                 (p1 === "Spock" && (p2 === "Rock" || p2 === "Scissors"))
//             ) {
//                 p1PointCount++;
//                 endRound++;
//                 p1Chose.innerText = "P1: " + p1;
//                 p2Chose.innerText = "P2: " + p2;
//                 wonRound.innerText = "Player 1 Wins!!";
//                 p1Points.innerText = p1PointCount;
//                 p2Points.innerText = p2PointCount;
//                 p1Chose.classList.remove("d-none");
//                 p2Chose.classList.remove("d-none");
//                 wonRound.classList.remove("d-none");
//                 console.log("Player 1 wins!");
//             } else {
//                 p2PointCount++;
//                 endRound++;
//                 p1Chose.innerText = "P1: " + p1;
//                 p2Chose.innerText = "P2: " + p2;
//                 p1Points.innerText = p1PointCount;
//                 p2Points.innerText = p2PointCount;
//                 p1Chose.classList.remove("d-none");
//                 p2Chose.classList.remove("d-none");
//                 wonRound.innerText = "Player 2 Wins!!";
//                 wonRound.classList.remove("d-none");
//                 console.log("Player 2 wins!");
//             }

//             console.log("p1: " + p1PointCount);
//             console.log("p2: " + p2PointCount);

//             if (p1PointCount === gameScore || p2PointCount === gameScore) {
//                 console.log("end game");
//                 showWinner();
//             } else {
//                 setTimeout(() => {
//                     loadData("./pages/pvp.html");
//                 }, 3000)

//             }

//         }

//         function showWinner() {
//             restartBtn.classList.remove("d-none");
//             // p1Points.innerText = p1PointCount;
//             // p2Points.innerText = p2PointCount;
//             makeGoAway.classList.add("d-none");
//             loadData("./pages/showWinner.html");
//         }

//         selectionButtons.forEach(selectionButton => {
//             selectionButton.addEventListener("click", e => {
//                 if (player1Turn){
//                     player1Turn = false;
//                 } else {
//                     player1Turn =
//                 }
//                 getCpuHand(selectionButton.dataset.selection);
//             })
//         })
//     }, 300);
// }