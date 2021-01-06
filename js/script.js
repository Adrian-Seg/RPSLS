const cpuBtn = document.getElementById('cpuBtn');
const pvpBtn = document.getElementById('pvpBtn');
const restartBtn = document.getElementById('restartBtn');

const injectGame = document.getElementById('injectGame');


cpuBtn.addEventListener('click', function() {
    loadData("./pages/game.html");
    injectGame.style.display = (injectGame.style.display == 'block') ? 'none' : 'block';
});
pvpBtn.addEventListener('click', function() {
    loadData("./pages/pvp.html");
    injectGame.style.display = (injectGame.style.display == 'block') ? 'none' : 'block';
});
restartBtn.addEventListener('click', function() {
    location.reload();
});

function loadData(url){
    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            injectGame.innerHTML = this.responseText;
        }
    }
    xhttp1.open("GET", url , true);
    xhttp1.send();
};

// async function loadPVP(){
//     let promise = await fetch("./pages/pvp.html")
//     info = await promise.text();
//     console.log(info);
// }
