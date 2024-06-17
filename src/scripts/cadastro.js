let cadastrados = [];

document.querySelector(".enviar").addEventListener('click', e => {
    e.preventDefault()
    let nome = document.getElementById("nome");
    
    if (nome.value != "") {
        alert(`Obrigado ${nome.value}! Você foi cadastrado com sucesso!`);
    }

    let pessoa = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value
    }

    cadastrados.push(pessoa)
}) 

document.querySelector(".cadastrados").addEventListener('click', e => {
    e.preventDefault()  
    if (cadastrados.length > 0) {
        let usuarios = [];
        for (let i = 0; i < cadastrados.length; i++) {
            usuarios.push(cadastrados[i].nome);
        }
        alert(`${cadastrados.length} usuários cadastrados!`);
    }

    if (cadastrados.length <= 0) {
        alert("Ainda não tem ninguém cadastrado!");
    }
}) 
