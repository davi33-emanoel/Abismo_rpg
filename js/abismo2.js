const morte_bite="../../historia-personagens/bite/game_over.html";
const morte_josefina="../../historia-personagens/josefina/game-over.html";
const morte_orc="../../historia-personagens/orc/game-over.html";
function chamar_prompt(texto, fase, game_over){
    let escolha;
    while (true){
    escolha=prompt(`${texto}`)
    if (escolha === '1'){
        location.replace(`${fase}`)
        break;
    }
    else if(escolha=== '2'){
            location.replace(`${game_over}`)
            break;
    }
    alert("Responda com 1 ou 2")
}
}
