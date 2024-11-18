$(document).ready(function () {
  $("#cpf").inputmask("999.999.999-99");
  $("#tel").inputmask("(99)99999-9999");
  $("#cep").inputmask("99.999-999"); // Corrigido o formato de CEP
  $("#data_nascimento").inputmask("99/99/9999", {
    placeholder: "dd/mm/aaaa",
    removeMaskOnSubmit: false,
  });
});

function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ""); // Remove qualquer caractere não numérico

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false; // CPF com 11 caracteres e composto por números repetidos não é válido
  }

  const calcularDigito = (cpf, peso) => {
    let soma = 0;
    for (let i = 0; i < peso.length; i++) {
      soma += parseInt(cpf.charAt(i)) * peso[i];
    }
    return soma % 11 < 2 ? 0 : 11 - (soma % 11);
  };

  const primeiroDigito = calcularDigito(cpf, [10, 9, 8, 7, 6, 5, 4, 3, 2]);
  const segundoDigito = calcularDigito(cpf, [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);

  return (
    primeiroDigito === parseInt(cpf.charAt(9)) &&
    segundoDigito === parseInt(cpf.charAt(10))
  );
}

function validarFormulario() {
  // Validação da Senha
  const senha = document.getElementById("password").value;
  const confirmarSenha = document.getElementById("password_confirm").value;

  if (senha !== confirmarSenha) {
    alert(
      "As senhas não coincidem. Por favor, verifique a senha informada e tente novamente."
    );
    return false;
  }

  // Validação do CPF
  const cpf = document.getElementById("cpf").value;
  if (!validarCPF(cpf)) {
    alert("CPF inválido. Por favor, verifique o número digitado.");
    return false;
  }

  return true; // Tudo ok
}

function buscarCep(cep) {
  cep = cep.replace(/\D/g, ""); // Remove qualquer caractere não numérico
  if (cep.length !== 8) {
    alert("CEP inválido!");
    return;
  }

  // Requisição à API do ViaCEP
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      // Preenchendo os campos com os dados da API
      // document.getElementById("uf").value = data.uf;
      // document.getElementById("rua").value = data.logradouro;

      // Corrige o bairro se necessário
      // const bairroCorrigido = data.bairro.replace(/D[´'‘’]/g, " ").trim();
      // document.getElementById("bairro").value =
      //   bairroCorrigido === "Jardim Icaraí"
      //     ? "Condominio Icarai"
      //     : bairroCorrigido;

      // document.getElementById("cidade").value = data.localidade;

      // Concatena o bairro, cidade e estado para visualização
      const enderecoCompleto = `${data.logradouro}, ${data.bairro}, ${data.localidade}, - ${data.uf}`;
      document.getElementById("endereco_completo").value = enderecoCompleto;
    })
    .catch((error) => {
      console.error("Erro ao buscar CEP:", error);
      alert("Erro ao buscar CEP!");
    });
}
