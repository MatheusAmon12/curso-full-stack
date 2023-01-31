/*
    HOISTING (IÇAR, ERGUER)

    Hoisting é o comportamento do JavaScript de mover as declarações para o topo de um escopo.
*/

function teste(){
    outraFuncao()//o Hoisting faz com a declaração seja erguida ao topo, mesmo que seja chamada antes

    function outraFuncao(){
        console.log('ok sou a outra função')
    }

    //outraFuncao()//a boa prática é chamar a função depois de sua declaração
}

teste()