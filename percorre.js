//arquivo percorre.js                        

function percorreArray(trsPaciente, comportamento) {                        

    for(var posicaoAtual = 0; posicaoAtual <= trsPaciente.length - 1; posicaoAtual++){                    

        var pacienteTrAtual = trsPaciente[posicaoAtual];                
        comportamento(pacienteTrAtual);                
    }                    
}