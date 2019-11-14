var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function(){

  	var trPaciente = document.getElementsByClassName("paciente");

	percorreArray(trPaciente, function (pacienteTr){

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
		            		
		                	console.log("Não dividirás por zero!");                        
		            } 
				}
			};

			var imc = pacienteAtual.pegaImc();  
			var tdImc = pacienteTr.getElementsByClassName("info-imc")[0]; 

			if (imc === undefined || imc ==0) {				                        
				    tdImc.textContent = "Não dividirás por zero!";
				 	}else{				                          
				    tdImc.textContent = imc; 
			    }

		    //var imc = pacienteAtual.pegaImc();                        

		    //var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];                         
		    //tdImc.textContent = imc;                        
     
		    console.log(imc);                    

		});

  });
   
              
