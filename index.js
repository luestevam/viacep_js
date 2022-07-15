'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
}

const pesquisaCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

  
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
}

document.getElementById('cep').addEventListener('focusout', pesquisaCep); 