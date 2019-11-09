	// var peso = document.getElementById("peso-1").textContent; //.textContent; // pega o peso do paciente 1
	// var altura = document.getElementById("altura-1").textContent; //.textContent; // pega a altura do paciente
	// var nome = document.getElementById("nome-1").textContent; // pega o nome do paciente

	// var peso = document.getElementById("peso-2").textContent; //.textContent; // pega o peso do paciente 1
	// var altura = document.getElementById("altura-2").textContent; //.textContent; // pega a altura do paciente
	// var nome = document.getElementById("nome-2").textContent; // pega o nome do paciente

	// var paciente={
	// 	peso:peso,
	// 	altura:altura,
	// 	nome:nome
	// }

	// var paciente2={
	// 	peso:peso2,
	// 	altura:altura2,
	// 	nome:nome2
	// }

     

	var trPaciente = document.getElementsByClassName("paciente");

	for(posicaoTrAtual =0; posicaoTrAtual <= trPaciente.length -1; posicaoTrAtual++){
		var trAtual = trPaciente[posicaoTrAtual];
		var nomeTD = trAtual.getElementsByClassName("info-nome")[0];
		var pesoTD = trAtual.getElementsByClassName("info-peso")[0];
		var alturaTD = trAtual.getElementsByClassName("info-altura")[0];
		var imcTD = trAtual.getElementsByClassName("info-imc")[0];

		var paciente={
			nome:nomeTD.textContent,
			peso:pesoTD.textContent,
			altura:alturaTD.textContent
		}

		if(paciente.altura !=0 && paciente.peso !=0) {
		var imc = paciente.peso / (paciente.altura * paciente.altura);

			
		imcTD.textContent=imc; // altera o conteúdo do td para o valor da variável imc

		console.log(imc)
		}else{
		imcTD.textContent="Não dividirás por zero!";	
		console.log("Não dividirás por zero!");
	}		

}




