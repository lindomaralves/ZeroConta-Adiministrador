document.getElementById("cadastro").addEventListener("submit", async function (e) {
  e.preventDefault();

  const dados = {
    nome: this.nome.value,
    tipo: this.tipo.value,
    cpf: this.cpf.value,
    email: this.email.value,
    whatsapp: this.whatsapp.value,
    endereco: this.endereco.value,
  };

  const resposta = await fetch("https://hook.us2.make.com/2pb32fhzkiuo90xeq816jkr7ocou9zko", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  });

  const resultado = document.getElementById("msgRetorno");
  if (resposta.ok) {
    resultado.innerText = "✅ Cadastro enviado com sucesso!";
    this.reset();
  } else {
    resultado.innerText = "❌ Erro ao enviar. Tente novamente.";
  }
});
