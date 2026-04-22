function validarFormulario() {
  const campos = [
    { id: "nome", nome: "Nome" },
    { id: "email", nome: "E-mail" },
    { id: "cpf", nome: "CPF" },
    { id: "telefone", nome: "Telefone" },
    { id: "endereco", nome: "Endereço" },
    { id: "cidade", nome: "Cidade" },
    { id: "estado", nome: "Estado" },
    { id: "nascimento", nome: "Data de nascimento" },
    { id: "curso", nome: "Curso" }
  ];

  const erros = [];
  const mensagemErro = document.getElementById("mensagemErro");
  mensagemErro.innerHTML = "";

  campos.forEach(campo => {
    const valor = document.getElementById(campo.id).value.trim();
    if (valor === "") {
      erros.push(`O campo "${campo.nome}" é obrigatório.`);
    }
  });

  const termos = document.getElementById("termos").checked;
  if (!termos) {
    erros.push("- Você precisa aceitar os termos e condições.");
  }

  if (erros.length > 0) {
    mensagemErro.innerHTML = erros.join("<br>");
  } else {
    alert("Cadastro salvo com sucesso!");
    document.getElementById("formCadastro").reset();
  }
}
