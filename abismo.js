

alert('Você esta em uma ponte e no final dela voce se depara com uma porta imensa em um local sombrio e triste.');

var entrar = prompt ('Você ve que ela esta pesada mas pode ser empurrada, você quer empurrar a porta??');
if (entrar == 'sim')
{
    alert('empurrando a porta');

    var continuar= prompt('você ve uma sala escura, você fica com muito medo, continuar?');
    if (continuar == 'sim')
    {
        alert('Você esta em uma sala escura');

        var caminhar= prompt('Você sente um calafrio..... e pensa se continua ou não a caminhar, continuar caminhando??')
        if(caminhar == 'sim')
        {       
            alert('você continua caminhando no escuro com o auxilio das parades para guiar o caminho...'); 
            alert('Você chegou ao final da sala e se deparou com um jardim lindo e magnifico')
            alert('Muito bem bravo guerreiro(a) consegiu chegar ao fim da sua jornada e descobriu que enfrentar o medo as vezes é muito bom, pois a recompensa no final do caminho é magnifica, caso você tenha voltado e ficado inseguro tente jogar novamente.')   
    }
}
}
else {
  alert  ('você olha para tras e se depara com uma imensa massa negra que te envolve e lhe leva para um abismo sem fim,onde você acaba morrendo envolvido em uma grande tristeza e dor, pensando no que poderia ter visto se tivesse encaro seu medo e entrado na porta.')
}

