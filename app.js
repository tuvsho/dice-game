//code iin buh hesegt ashiglagdah GLobal huwisagchdiig zarlay
//toglogchiin eeljiig solih heseg
var activePlayer = 0;

//тоглогчийн цуглуулсан оноог хадгаллдаг хувьсагч
var scores = [0, 0];
//eeljind tsugluulj bui onoog hadgaldag huwisagch
var roundScore = 0;
//shoonii taliig hadgalah huwisagch
//<div class="player-score" id="score-0">43</div>

//shoonii zurgiig documentoos  oloh heseg
var diceDom = document.querySelector(".dice");

initGame();

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
    switchToNextPlayer();
  }
});

//Hold tovchnii  eventListener
document.querySelector(".btn-hold").addEventListener("click", function() {
  //ug toglogchiin roundScore iig global onoon deer nemj ogno
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // delgetsen  onoog i oorchilno
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  //ug toglogch hojison esehiig shalgadag heseg(100c ih bolson bol hojno)
  if (scores[activePlayer] >= 10) {
    //winner iig nerniih ni orond gargana
    document.getElementById("name-" + activePlayer).textContent = "WINNER";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    //roundScore iig 0 bolgono
    switchToNextPlayer();
  }
});
//dry zarcimiig urgelj sana
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // toglogchiin eeljiig solino
  //toglogchiin eeljiig nogoo  toglogch ruu shiljuulne
  //herew idewhtei toglogch ni 0 baiwal idewhtei toglogchiig 1 bolgo eswel 1 bol 0 bolgo
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //ulaan tsegiig shiljuuleh code bichne
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //shoog alga bolgono
  diceDom.style.display = "none";
}

//togloomiig shineer ehluuleh eventListener

document.querySelector(".btn-new").addEventListener("click", initGame);

function initGame() {
  //toglogchiin eeljiig solih heseg
  activePlayer = 0;
  //тоглогчийн цуглуулсан оноог хадгаллдаг хувьсагч
  scores = [0, 0];
  //eeljind tsugluulj bui onoog hadgaldag huwisagch
  roundScore = 0;
  //shoonii taliig hadgalah huwisagch
  //<div class="player-score" id="score-0">43</div>

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //toglogchdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  //active playeriin winner classiin temdeglegeeg arilgah
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  //active playeriig 1r toglogchid ogno
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}
