//toglogchiin eeljiig solih heseg
var activePlayer = 0;

//тоглогчийн цуглуулсан оноог хадгаллдаг хувьсагч
var scores = [0, 0];
//eeljind tsugluulj bui onoog hadgaldag huwisagch
var roundScore = 0;
//shoonii taliig hadgalah huwisagch
//<div class="player-score" id="score-0">43</div>

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//shoo shidaeh eventlistener
document.querySelector(".btn-roll").addEventListener("click", function() {
  //shoog 1-6 random toogoor uusgeed  dicenumber variabled hadgalj bn
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //shoonii zurgiig web  deer  gargaj irne
  diceDom.style.display = "block";

  //buusan sanamsargui toond  hargalzah shoonii zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  //buusan too ni 1 s  ylgaatai bol idewhtei toglogchiin eeljiin onoog nemne
  if (diceNumber !== 1) {
    //1s ylgaatai buulaa buusan toog toglogchid nemj ogno
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 buusan tul toglogchiin eeljiig ene heseg solij ogno
    //omnoh toglogchiin roundscore g 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //toglogchiin eeljiig nogoo  toglogch ruu shiljuulne
    //herew idewhtei toglogch ni 0 baiwal idewhtei toglogchiig 1 bolgo eswel 1 bol 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //ulaan tsegiig shiljuuleh code bichne
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //shoog alga bolgono
    diceDom.style.display = "none";
  }
});

// document.querySelector("#score-0").textContent = "<em>sss</em>";

console.log(dice);
