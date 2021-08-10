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
            location.replace('../../index.html')
    }
}
function escolha_bite3(){
    var escolha=prompt("volte para o menu, e ajude os outros personagens a superarem seus medos","Responda menu em minusculo")
    if (escolha === 'menu'){
        location.replace('../../index.html')
    }
    else{
            location.replace('../../historia-personagens/bite/game_over.html')
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