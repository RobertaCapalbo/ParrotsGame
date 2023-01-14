let segundoClique = false;
let cartaAnterior;
let contator;
let terceiraCarta = true;
let travarJogada = false;

//função para descobrir com quantas cartas o jogador quer jogar - válido apenas número pares entre 4 e 14
let num = Number(prompt("Com quantas cartas você gostaria de jogar? São permitidos apenas números pares de 4 a 14"));

while (num % 2 !== 0 || num > 14 || num < 4) {
    num = Number(prompt("Com quantas cartas você gostaria de jogar? São permitidos apenas números pares de 4 a 14"));
   }

function adicionarDOM (){
    const cartas = ['bobrossparrot.gif', 
'explodyparrot.gif', 
'fiestaparrot.gif', 
'metalparrot.gif', 
'revertitparrot.gif', 
'tripletsparrot.gif', 
'unicornparrot.gif'].sort(comparador);

let cartasDuplicadas = []

cartasDuplicadas = cartas.slice(0,num/2);
cartasDuplicadas = cartasDuplicadas.concat(cartasDuplicadas).sort(comparador);


    const ul = document.querySelector('.cartinhas');
    for (let i=0; i<num; i++){
        let template =
            `<li class="carta" onclick = "virarCarta(this)">
                <div class="card">
                    <div class="back-face face">
                        <img class="frente" src="Imagens/${cartasDuplicadas[i]}" alt="Papagaio" />
                    </div>
                    <div class="front-face face">
                        <img class="verso" src="Imagens/back.png" alt="verso Papagaio" />
                    </div>
                </div>
            </li>`;
    ul.innerHTML = ul.innerHTML + template;
    }
}
adicionarDOM()

//para embaralhar cartas
function comparador() { 
	return Math.random() - 0.5; 
}

//para virar carta
function virarCarta(cartaClicada){
    if(travarJogada === true)
{
   return;
}
    if (cartaClicada.querySelector('.front-face').classList.contains('virar')){
        return;
    }
    cartaClicada.querySelector('.back-face').classList.add('desvirar');
    cartaClicada.querySelector('.front-face').classList.add('virar');
    if (segundoClique === true){
    validarJogada(cartaAnterior, cartaClicada);
    segundoClique = false;
    travarJogada = true;
    } else {
        cartaAnterior = cartaClicada;
        segundoClique = true;
    }
}

//verificando se as cartas são iguais
function validarJogada (cartaAnterior, cartaAtual){
  console.log(cartaAnterior);
  console.log(cartaAtual);
}
        