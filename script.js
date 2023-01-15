let cartaAnterior;
let contador = 0;
let travarJogada = false;
let jogadas = 0;
let carta1 ='';
let carta2 = '';

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

    if(travarJogada === true){
        return;
    }
    if (!cartaClicada.querySelector('.front-face').classList.contains('virar')&& carta1===''){
        cartaClicada.querySelector('.back-face').classList.add('desvirar');
        cartaClicada.querySelector('.front-face').classList.add('virar');
        carta1 = cartaClicada;
        contador++;
    } else if (carta1!==''){
        cartaClicada.querySelector('.back-face').classList.add('desvirar');
        cartaClicada.querySelector('.front-face').classList.add('virar');
        travarJogada = true;
        carta2 = cartaClicada;
        contador++;
        validarJogada();
    }

}

//verificando se as cartas são iguais
function validarJogada (){
    const carta1img = carta1.querySelector('.frente').getAttribute("src");
    console.log(carta1img)
    const carta2img = carta2.querySelector('.frente').getAttribute("src");
    console.log(carta2img);
    console.log(carta1img === carta2img)
if (carta1img !== carta2img){
    setTimeout(function(){
        carta1.querySelector('.back-face').classList.remove('desvirar');
        carta1.querySelector('.front-face').classList.remove('virar');
        carta2.querySelector('.back-face').classList.remove('desvirar');
        carta2.querySelector('.front-face').classList.remove('virar');
        carta1 = '';
        carta2 = '';
        travarJogada = false; 
    },1000)
} else {travarJogada = false;
carta1 = '';
carta2 = ''
encerrarJogo()}
}

//para encerrar o jogo
function encerrarJogo (){
    const cartasViradas = document.querySelectorAll('.back-face.desvirar').length;
    if (cartasViradas === num) {
        setTimeout(function(){
            alert(`Fim do jogo. Você ganhou em ${contador} jogadas`);
        },500)
    }
}
        