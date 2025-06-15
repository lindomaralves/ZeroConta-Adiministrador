document.getElementById("cadastroForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    tipo: form.tipo.value.trim(),
    nome: form.nome.value.trim(),
    cpf: form.cpf.value.trim(),
    whatsapp: form.whatsapp.value.trim(),
    endereco: form.endereco.value.trim(),
    mei: form.mei.value.trim(),
    cnpj: form.cnpj.value.trim(),
    email: form.email.value.trim(),
    cnh: form.cnh.value.trim(),
    endcomercial: form.endcomercial.value.trim(),
    endresidencial: form.endresidencial.value.trim(),
    pai: form.pai.value.trim(),
    mae: form.mae.value.trim(),
    whatsapp2: form.whatsapp2.value.trim(),
    data_envio: new Date().toISOString()
  };

  try {
    const response = await fetch("https://hook.us2.make.com/2pb32fhzkiuo90xeq816jkr7ocou9zko", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Cadastro enviado com sucesso!");
      form.reset();
    } else {
      alert("Erro ao enviar cadastro. Tente novamente.");
    }
  } catch (error) {
    alert("Erro de conexão. Verifique sua internet.");
  }
});
