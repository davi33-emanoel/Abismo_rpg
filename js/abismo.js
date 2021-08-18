// fases do BITE

function escolha_bite1(){
    let escolha;
    while (true){
    escolha=prompt("ficar ou não?","Responda com sim ou nao (em minúsculo)")
    if (escolha === 'sim'){
        location.replace('../../historia-personagens/bite/fase2.html')
        break;
    }
    else if(escolha=== 'nao'){
            location.replace('../../historia-personagens/bite/game_over.html')
            break;
    }
    alert("Responda com sim ou nao (em minúsculo)")
}
}

function escolha_bite2(){
    let escolha;
    while (true){
    escolha=prompt("enfrentar seu medo ou desistir e buscar ajuda?")
    if (escolha === 'enfrentar'){
        location.replace('../../historia-personagens/bite/fase3.html')
        break;
    }

    else if(escolha === 'desistir'){
            location.replace('../../historia-personagens/bite/game_over.html')
            break;
    }
    alert("Responda com enfrentar ou desistir (em minúsculo)")
}
}

function escolha_bite3(){
    let escolha;
    while (true){
    escolha=prompt("Volte ao menu e ajude os outros personagens a superar seus medos")
    if (escolha === 'menu'){
        location.replace('../../index.html')
        break;
    }
    else if(escolha === 'ajude'){
            location.replace('../../index.html')
            break;
    }
    alert("Responda menu (em minúsculo)")
}
}

function escolha_bite(){
    let escolha;
    while (true){
    escolha=prompt("Game over, Bite não superou seu medo, para tentar novamente digite jogar novamente ou vá para o menu para jogar com os outros personagens")
    if (escolha === 'jogar'){
        location.replace('../../historia-personagens/bite/fase1.html')
        break;
    }
    else if(escolha==='menu'){
            location.replace('../../index.html')
            break;
    }
    alert('"Responda jogar ou menu (em minúsculo)"')
}
}

// FIM das fases do BITE

// Começo fases JOSEFINA

function escolha_josefina1(){
    let escolha;
    while (true){
    escolha=prompt("Continuar nessa estrada ou voltar?")
    if (escolha === 'continuar'){
        location.replace('../../historia-personagens/josefina/fase2.html')
        break;
    }
    else if(escolha==='voltar'){
            location.replace('../../historia-personagens/josefina/game-over.html')
            break;
    }
    alert("Responda com continuar ou voltar (em minúsculo)")
}
}
function escolha_josefina2(){
    let escolha;
    while (true){
    escolha=prompt("Continuar caminhando ou voltar mesmo com o perigo dos ladinos?")
    if (escolha === 'continuar'){
        location.replace('../../historia-personagens/josefina/fase3.html')
        break;
    }
    else if(escolha==="voltar"){
            location.replace('../../historia-personagens/josefina/game-over.html')
            break;
    }
    alert("Responda com continuar ou voltar (em minúsculo)")
}
}
function escolha_josefina3(){
    let escolha;
    while (true){
    escolha=prompt("Josefina está quase no fim, mas a pressão na sua mente é enorme.")
    if (escolha === 'continuar'){
        location.replace('../../historia-personagens/josefina/fase4.html')
        break;
    }
    else if(escolha==="voltar"){
            location.replace('../../historia-personagens/josefina/game-over.html')
            break;
    }
    alert("Responda continuar ou voltar (em minúsculo)")
}
}
function escolha_josefina4(){
    let escolha;
    while (true){
    escolha=prompt("Você ajudou Josefina a enfrentar seu maior medo, agora ela sente que sua insegurança está diminuindo a cada dia que passa. Se quiser ajudar os outros personagens a enfrentarem seus medos digite, menu.")
    if (escolha === 'menu'){
        location.replace('../../index.html')
        break;
    }
    else if(escolha==='menu'){
            location.replace('../../index.html')
            break;
    }
    alert("Responda menu (em minúsculo)")
}
}
function escolha_josefina_game_over(){
    let escolha;
    while (true){
    escolha=prompt("Josefina não aguentou a pressâo de enfrentar seu medo, se quiser tentar novamente, digite novamente, se quiser ir para o menu digite menu.")
    if (escolha === 'novamente'){
        location.replace('../../historia-personagens/josefina/fase1.html')
        break;
    }
    else if (escolha==='menu'){
            location.replace('../../index.html')
            break;
    }
    alert('digite novamente ou menu (em minúsculo)')
}
}
// Fim fases JOSEFINA

// Começo fases ORC MORSE

function escolha_orc1(){
    let escolha;
    while (true){
    escolha=prompt("enfrentar o medo ou voltar para a vila?")
    if (escolha === 'enfrentar'){
        location.replace('../../historia-personagens/orc/fase2.html')
        break;
    }
    else if (escolha === 'voltar'){
            location.replace('../../historia-personagens/orc/game-over.html')
            break;
    }
    alert("Responda com enfrentar ou voltar (em minúsculo)")
}
}
function escolha_orc2(){
    let escolha;
    while (true){
    escolha=prompt("Ele engole seco e pensa se empurra ou vou embora.")
    if (escolha === 'empurrar'){
        location.replace('../../historia-personagens/orc/fase3.html')
        break;
    }
    else if(escolha === 'voltar'){
            location.replace('../../historia-personagens/orc/game-over.html')
            break;
    }
    alert("Responda com empurrar ou voltar (em minúsculo)")
}
}
function escolha_orc3(){
    let escolha;
    while (true){
    escolha=prompt("Ele entra ou deixa o medo tomar conta por completo?")
    if (escolha === 'entrar'){
        location.replace('../../historia-personagens/orc/fase4.html')
        break;
    }
    else if(escolha === 'voltar'){
            location.replace('../../historia-personagens/orc/game-over.html')
            break;
    }
    alert("Responda com empurrar ou voltar (em minúsculo)")
}
}
function escolha_orc4(){
    let escolha;
    while (true){
    escolha=prompt("Morse deve continuar para chegar ao final e encontrar o ponto de luz ou voltar e desistir?")
    if (escolha === 'continuar'){
        location.replace('../../historia-personagens/orc/fase5.html')
        break;
    }
    else if(escolha === 'voltar'){
            location.replace('../../historia-personagens/orc/game-over.html')
            break;
    }
    alert("Responda com entrar ou voltar (em minúsculo)")
}
}
function escolha_orc5(){
    let escolha;
    while (true){
    escolha=prompt("Morse agora pode enfrentar os medos que surgirem em sua vida. Se quiser voltar ao menu e ajudar aos outros personagens digite menu.")
    if (escolha === 'menu'){
        location.replace('../../index.html')
        break;
    }
    else if(escolha === 'voltar'){
            location.replace('../../index.html')
            break;
    }
    alert("Responda menu ou voltar (em minúsculo)")
}
}
function escolha_orc6(){
    let escolha;
    while (true){
    escolha=prompt("Morse não superou seu medo e voltou para sua vila. Se quiser tentar novamente digite novamente ou se quiser ir para o menu digite menu")
    if (escolha === 'novamente'){
        location.replace('../../historia-personagens/orc/fase1.html')
        break;
    }
    else if(escolha === 'menu'){
            location.replace('../../index.html')
    break;
    }
    alert("Responda novamente ou menu (em minúsculo)")
}
}