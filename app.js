/**
 * Simples simulador de uma lâmpada
 * @author Gabriel Yago 
 */

// variaveis de apoio lógica 
let chave = false // o interruptor inicia desligado
let lampada = true // a lampada está OK 

function quebrar() {
    if (lampada === true ) {
        document.getElementById('lamp').src="img/broken.jpg"
        // reproduzindo um arquivo de áudio no JS
        // Passo 1: copiar o arquivo de audio para o projeto
        // Passo 2: Usar a classe Audio(biblioteca interna do JS)
        let som = new Audio()
        som.src = "sound/glassbreaking.wav"
        som.play()
        //apoio a lógica para o JS indentificar a lâmpada quebrada
        lampada = false
    }   
}


function onoff(){
    if (chave === false && lampada === true) {
        //ligar a chave
        document.getElementById('interruptor').src="img/swon.png"
        chave = true //O JS  agora sabe que a chave está ligada
        // acender a lampada
        document.getElementById('lamp').src="img/on.jpg"
    } else if (lampada === true) {
        document.getElementById('interruptor').src="img/swoff.png"
        chave = false
        //desligar lampada 
        document.getElementById('lamp').src="img/off.jpg"
    }
}