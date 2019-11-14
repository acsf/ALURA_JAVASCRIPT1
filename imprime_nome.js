//arquivo imprime-nome.js                        

var trsPaciente = document.getElementsByClassName("paciente");                        

//agora usando uma função anonima (função sem nome)                        
percorreArray(trsPaciente, function(pacienteTr){                        

        var nomeTD = pacienteTr.getElementsByClassName("info-nome")[0];
        var pesoTD = pacienteTr.getElementsByClassName("info-peso")[0];
        var alturaTD = pacienteTr.getElementsByClassName("info-altura")[0];                   

        var pacienteAtual={
            nome:nomeTD.textContent,
            peso:pesoTD.textContent,
            altura:alturaTD.textContent,
            pegaImc: function() {

                if(this.altura != 0 && this.peso !=0){                        
                    var imc = this.peso / (this.altura * this.altura);                        
                    return imc;                        
                 } else{                        

                  console("Não dividirás por zero!");                        
            } 
        }
    };                          

    console.log(pacienteAtual.nome);                         
}); 