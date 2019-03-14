function formataCpf(numeros){
		return numeros.replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
	}

function extraiNumerosCpf(texto){
		return texto.replace(/[^0-9]/g, "").substring(0, 11);
	}

function TestaCPF(strCPF) {
	    var Soma;
	    var Resto;
	    Soma = 0;
		if (strCPF == "00000000000") return false;
		 
		for (i = 1; i <= 9; i++){
			Soma += parseInt(strCPF.substring(i-1, i)) * (11 - i);
		}

		Resto = (Soma * 10) % 11;

		if ((Resto == 10) || (Resto == 11))
			Resto = 0;

		if (Resto != parseInt(strCPF.substring(9, 10)))
			return false;

		Soma = 0;
		for (i = 1; i <= 10; i++){
			Soma += parseInt(strCPF.substring(i-1, i)) * (12 - i);
		}

		Resto = (Soma * 10) % 11;

		if ((Resto == 10) || (Resto == 11))
			Resto = 0;

		if (Resto != parseInt(strCPF.substring(10, 11)))
			return false;
		
		return true;
	}





/*
OUTRO SCRIPT

const cpf = document.querySelector("#cpf");

cpf.addEventListener("keyup", function(){
	mascaraCPF();
});

cpf.addEventListener("blur", () => {
	mascaraCPF();
});


function mascaraCPF(){
	var bruto = cpf.value.replace(/[^0-9]/g, "")
	.substring(0, 11);

	var value = bruto.replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
	cpf.value = value;

	if (bruto.length == 11){
		if (TestaCPF(bruto)){
			$("#cpf-msg").html("");
		} else {
			$("#cpf-msg").html("CPF inválido.");
		}
	}
}
*/