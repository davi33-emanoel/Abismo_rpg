// fases do BITE

function escolha_bite1 (){
    var escolha=prompt("ficar ou não?","Responda com sim ou nao em minusculo")
    if (escolha === 'sim'){
        location.replace('../../historia-personagens/bite/fase2.html')
    }
    else{
            location.replace('../../historia-personagens/bite/game_over.html')
    }
}
function escolha_bite2(){
    var escolha=prompt("enfrentar seu medo, ou desistir e buscar ajuda?","Responda com enfrentar ou desistir em minusculo")
    if (escolha === 'enfrentar'){
        location.replace('../../historia-personagens/bite/fase3.html')
    }
    else{
            location.replace('../../historia-personagens/bite/game_over.html')
    }
}
function escolha_bite3(){
    var escolha=prompt("volte para o menu, e ajude os outros personagens a superarem seus medos","Responda menu em minusculo")
    if (escolha === 'menu'){
        location.replace('../../index.html')
    }
    else{
            location.replace('../../index.html')
    }
}
function escolha_bite(){
    var escolha=prompt("Game over, Bite não superou seu medo, para tentar novamente use jogar novamente ou vá para o menu para jogar com os outros personagens","Responda jogar ou menu em minusculo")
    if (escolha === 'jogar'){
        location.replace('../../historia-personagens/bite/fase1.html')
    }
    else{
            location.replace('../../index.html')
    }
}
// FIM das fases do BITE

// Começo fases JOSEFINA

function escolha_josefina1(){
    var escolha=prompt("Continuar nessa estrada ou voltar?","Responda com continuar ou voltar em minusculo")
    if (escolha === 'continuar'){
        location.replace('../../historia-personagens/josefina/fase2.html')
    }
    else{
            location.replace('../../historia-personagens/josefina/game-over.html')
    }
}
function escolha_josefina2(){
    var escolha=prompt("Continuar caminhando ou voltar mesmo com o perigo dos ladinos?","Responda com continuar ou voltar em minusculo")
    if (escolha === 'continuar'){
        location.replace('../../historia-personagens/josefina/fase3.html')
    }
    else{
            location.replace('../../historia-personagens/josefina/game-over.html')
    }
}
function escolha_josefina3(){
    var escolha=prompt("Josefina esta quase no fim, mas a pressão na sua mente é enorme, ir até o fim ou não?","Responda continuar ou voltar em minusculo")
    if (escolha === 'continuar'){
        location.replace('../../historia-personagens/josefina/fase4.html')
    }
    else{
            location.replace('../../historia-personagens/josefina/game-over.html')
    }
}
function escolha_josefina4(){
    var escolha=prompt("Você ajudou Josefina a enfrentar seu maior medo, agora ela sente que sua insegurança esta dfiminuindo a cada dia que passa, se quiser ajudar os outros personagens a enfrentarem seus medos digite menu?","Responda menu em minusculo")
    if (escolha === 'menu'){
        location.replace('../../index.html')
    }
    else{
            location.replace('../../index.html')
    }
}
function escolha_josefina_game_over(){
    var escolha=prompt("Josefina não aguentou a pressâo de enfrentar seu medo, se quiser tentar novamente digite novamente, se quiser ir para o menu digite menu?","Responda novamente menu em minusculo")
    if (escolha === 'novamente'){
        location.replace('../../historia-personagens/josefina/fase1.html')
    }
    else{
            location.replace('../../index.html')
    }
}
// Fim fases JOSEFINA

// Começo fases ORC MORSE

function escolha_orc1(){
    var escolha=prompt("enfrentar o medo que repentinamente apareçe ou voltar para a vila?","Responda com enfrentar ou voltar em minusculo")
    if (escolha === 'enfrentar'){
        location.replace('../../historia-personagens/orc/fase2.html')
    }
    else{
            location.replace('../../historia-personagens/orc/game-over.html')
    }
}
function escolha_orc2(){
    var escolha=prompt("Ele engole seco, e pensa empurro ou vou embora?","Responda com empurrar ou voltar em minusculo")
    if (escolha === 'empurrar'){
        location.replace('../../historia-personagens/orc/fase3.html')
    }
    else{
            location.replace('../../historia-personagens/orc/game-over.html')
    }
}
function escolha_orc3(){
    var escolha=prompt("Ele entrar ou deixar o medo tomar conta por completo?","Responda com entrar ou voltar em minusculo")
    if (escolha === 'entrar'){
        location.replace('../../historia-personagens/orc/fase4.html')
    }
    else{
            location.replace('../../historia-personagens/orc/game-over.html')
    }
}
function escolha_orc4(){
    var escolha=prompt("Morse deve continuar para chegar ao final e encontrar o ponto de luz, ou voltar e desistir?","Responda com entrar ou voltar em minusculo")
    if (escolha === 'continuar'){
        location.replace('../../historia-personagens/orc/fase5.html')
    }
    else{
            location.replace('../../historia-personagens/orc/game-over.html')
    }
}
function escolha_orc5(){
    var escolha=prompt("Morse agora pode enfrentar seus outros medos que surgirem em sua vida, se quiser voltar ao menu e ajudar aos outros personagens enfrentarem seus medos digite menu","Responda menu em minusculo")
    if (escolha === 'menu'){
        location.replace('../../index.html')
    }
    else{
            location.replace('../../historia-personagens/orc/game-over.html')
    }
}
function escolha_orc6(){
    var escolha=prompt("Morse não superou seu medo voltou para sua vila, se quiser tentar novamente digite novamente ou se quiser ir para o menu digite menu","Responda novamente ou menu em minusculo")
    if (escolha === 'novamente'){
        location.replace('../../historia-personagens/orc/fase1.html')
    }
    else{
            location.replace('../../index.html')
    }
}