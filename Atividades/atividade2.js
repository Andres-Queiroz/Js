// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());
let jogador1, jogador2;

if(N >= 1 && N <= 1000){
  for (let i = 0; i < N; i++) {
    jogador1 = gets();
    jogador2 = gets();
    		
    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")
        print("Aniquilacao mutua");
    else if ( jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL")             
    	print("Ambos venceram");
    else if ( jogador1.toUpperCase() == "ATAQUE") print("Jogador 1 venceu")
    else if ( jogador2.toUpperCase() == "ATAQUE") print("Jogador 2 venceu")
    else if ( jogador1.toUpperCase() == "PAPEL" ) print("Jogador 2 venceu")
    else if ( jogador2.toUpperCase() == "PAPEL" ) print("Jogador 1 venceu")
    else if ( jogador1.toUpperCase() == "PEDRA" && jogador2.toUpperCase() == "PEDRA") print("Sem ganhador");
}}

/*JEITO ERRADO -->
let N = parseInt(gets());
let jogador1, jogador2;

if(N >= 1 && N <= 1000){
  for (let i = 0; i < N; i++) {
    jogador1 = gets();
    jogador2 = gets();
    		
    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")
        print("Aniquilacao mutua");
    else if ( jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL")             
    	print("Ambos venceram");
    else if ( jogador1.toUpperCase() == "PAPEL" && jogador2.toUpperCase() == "ATAQUE") print("Jogador 2 venceu")
    else if ( jogador1.toUpperCase() == "PAPEL" && jogador2.toUpperCase() == "PEDRA") print("Jogador 2 venceu")
    else if ( jogador1.toUpperCase() == "ATAQUE"&& jogador2.toUpperCase() == "PAPEL") print("Jogador 1 venceu")
    else if ( jogador1.toUpperCase() == "ATAQUE"&& jogador2.toUpperCase() == "PEDRA") print("Jogador 1 venceu")
    else if ( jogador1.toUpperCase() == "PEDRA"&& jogador2.toUpperCase() == "PAPEL") print("Jogador 1 venceu")
    else if ( jogador1.toUpperCase() == "PEDRA"&& jogador2.toUpperCase() == "ATAQUE") print("Jogador 2 venceu")
    else if ( jogador1.toUpperCase() == "PEDRA"&& jogador2.toUpperCase() == "PEDRA") print("Sem ganhador");
}}*/
