//import './Cpf.js';

$(document).ready(function(){
	$("#cpf").keyup(function(){
		mascaraCPF();
	});

	$("#cpf").blur(function(){
		mascaraCPF();
	});
});

function mascaraCPF(){
	var bruto;
	var value;
	$.getScript("js/Cpf.js",function(){
		bruto = extraiNumerosCpf($("#cpf").val());
		value = formataCpf(bruto);
	

		//let bruto = extraiNumerosCpf($("#cpf").val());
		//let value = formataCpf(bruto);
		$("#cpf").val(value);

		if (bruto.length == 11){
			let resp;
			
				resp = TestaCPF(bruto);
			
			if (resp){
				$("#cpf-msg").html("");
			} else {
				$("#cpf-msg").html("CPF inválido.");
			}
		}
	});
}