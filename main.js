
var opcoes = ["paper", "rock", "scissors"]
var i = Math.floor(Math.random() * 3);
var pcChoice = opcoes[i];

var pointsUser = 0;
var poinstPc = 0;

function score(){
	var score_div = document.getElementById("score").innerHTML = pointsUser + " - " + poinstPc;
}

setInterval(score, 50);


function jokenpo(UserChoice){
	var box = document.getElementById("challenge");
	box.style.display = "block";

	var userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);
	var pcDiv = document.getElementById("PCObject");
	pcDiv.innerHTML = convert(pcChoice);

	if((UserChoice === "paper") && (pcChoice === "rock") || 
		(UserChoice === "scissors") && (pcChoice === "paper") || 
		(UserChoice === "rock") && (pcChoice === "scissors")){
			win();
	}
		else if(UserChoice === pcChoice){
			empate();
		}
		else{
			lose();
		}

	function continuar(){
		i = Math.floor(Math.random() * 3);
		pcChoice = opcoes[i];
		box.style.display = "none";
	}

	setTimeout(continuar, 1000);
}

function convert(word){
	if(word === "paper") {
		return '<i class="far fa-hand-paper"></i>';
	}
	if(word === "rock"){
		return '<i class="far fa-hand-rock"></i>';
	} 
	if(word === "scissors"){
		return '<i class="far fa-hand-scissors"></i>';
	} 
}

function win(){
	pointsUser++;
	var venceu = document.getElementById("result");
	venceu.innerHTML = ("Venceu!");
}

function empate(){
	var venceu = document.getElementById("result");
	venceu.innerHTML = ("Empate");
}

function lose(){
	poinstPc++;
	var venceu = document.getElementById("result");
	venceu.innerHTML = ("Derrota :(");
}