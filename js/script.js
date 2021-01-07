
const restartBtn = document.getElementById('restartBtn');
const injectGame = document.getElementById('injectGame');

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

restartBtn.addEventListener('click', function() {
    location.reload();
});

function chooseRounds() {
    
}

// CPU GAME
// async function getCpuHand() {
//     let promiseResult = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
//     let info = await promiseResult.text();
//     console.log(info);
// }
// getCpuHand();

function getWinner(){

}

// function loadData(url){
//     let xhttp1 = new XMLHttpRequest();
//     xhttp1.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             injectGame.innerHTML = this.responseText;
//         }
//     }
//     xhttp1.open("GET", url , true);
//     xhttp1.send();
// };
function loadData(url){
    fetch(url)
    .then(
        pvp => {
            pvp.text().then(
                function (game){
                    
                    if (url == "./pages/main.html"){
                        injectGame.innerHTML = game;
                        setTimeout(() => {
                            let cpuBtn = document.getElementById("cpuBtn");
                            let pvpBtn = document.getElementById("pvpBtn");
                            cpuBtn.addEventListener("click", function() {
                            loadData("./pages/game.html");
                            injectGame.style.display = (injectGame.style.display == 'block') ? 'none' : 'block';
                        });
                            pvpBtn.addEventListener("click", function() {
                            loadData("./pages/pvp.html");
                            injectGame.style.display = (injectGame.style.display == 'block') ? 'none' : 'block';
                        });
                        }, 1000)
                    }
                    injectGame.innerHTML = game;
                    const rock = document.getElementById("rock");
                    const paper = document.getElementById("paper");
                    const scissor = document.getElementById("scissor");
                    const lizard = document.getElementById("lizard");
                    const spock = document.getElementById("spock");
                    rock.addEventListener('click', function(){
                        console.log("You chose rock!");
                    });
                    paper.addEventListener('click', function(){
                        console.log("You chose paper!");
                    });
                    scissor.addEventListener('click', function(){
                        console.log("You chose scissor!");
                    });
                    lizard.addEventListener('click', function(){
                        console.log("You chose lizard!");
                    });
                    spock.addEventListener('click', function(){
                        console.log("You chose spock!");
                    });

                    // function getPlayerHand() {
                    //     let playerHand = 
                    // }

                    async function getCpuHand() {
                        let promiseResult = await fetch("https://csa2020studentapi.azurewebsites.net/rpsls");
                        let info = await promiseResult.text();
                        console.log(info);
                    }
                    getCpuHand();

                }
            )
        }
    )
}

loadData("./pages/main.html");