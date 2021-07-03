document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&   document.getElementById("cliente").value != "" &&   document.getElementById("datadeinicio").value !="" &&
  document.getElementById("datadetermino").value !="" &&
  document.getElementById("investimentopordia").value !=""){
      alert("Cadastro realizado com sucesso!")
  }else{
    alert("Por favor, preencha os campos de nome,cliente, Data de Início, Data de Término e Investimento por dia!")
  }
}