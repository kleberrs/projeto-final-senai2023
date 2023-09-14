const form = document.querySelector('form');
const pesquisaCep = document.querySelector('#cep');

const limpaForm =  () => {
    //  limpar os valores do endereço do Form
    document.querySelector('#uf').value         ='';
    document.querySelector('#cidade').value     ='';
    document.querySelector('#bairro').value     ='';
    document.querySelector('#logradouro').value ='';

};
// Função Callback
const meuCallback = (conteudo) =>{
    if (!('erro' in conteudo)){
        document.querySelector('#uf').value = (conteudo.uf);
        document.querySelector('#cidade').value = (conteudo.localidade);
        document.querySelector('#bairro').value = (conteudo.bairro);
        document.querySelector('#logradouro').value = (conteudo.logradouro);
    }
    else{
        // Cep não Localizado
        limpaForm();
        alert( 'Cep não encontrado.');
    }
};

// Invalida a Subimissão de dados do formulario
form.onsubmit = () => false;
//  Chama a função que ira preencher o dados do endereço automaticamente. '
pesquisaCep.addEventListener('blur', () => {
    //  Elimina caracteres especiais deixando domente numeros

    let cep = pesquisaCep.value.replace(/\D/g,'');

    //  Verifica se o campo cep possui valor informado

    if( cep!= ''){
        //  validando o Cep
        let validaCep = /^[0-9]{8}$/;

        if (validaCep.test(cep)){
            let script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meuCallback';

            document.body.appendChild(script);
        }
        else{
            limpaForm();
            alert('Cep Inválido.');
        }
    }


});

document.addEventListener("DOMContentLoaded", function () {
    const aceitoTermosCheckbox = document.getElementById("aceitoTermos");
    const modal = document.getElementById("modal");
    const fecharModalButton = document.getElementById("fecharModal");
  
    aceitoTermosCheckbox.addEventListener("change", function () {
      if (aceitoTermosCheckbox.checked) {
        modal.style.display = "block";
      } else {
        modal.style.display = "none";
      }
    });
  
    fecharModalButton.addEventListener("click", function () {
      modal.style.display = "none";
      aceitoTermosCheckbox.checked = false;
    });
  });


    // Adicionar um evento de clique ao botão Cadastrar
    document.getElementById("cadastrarButton").addEventListener("click", function() {
        // Exibir um alerta ao clicar no botão
        alert("Matrícula realizada com sucesso!");
        alert("Obrigado por se matricular no nosso curso!");
    });
 
     // Adicionar um evento de clique ao botão Enviar Mensagem
     document.getElementById("enviarButton").addEventListener("click", function() {
        // Exibir um alerta ao clicar no botão
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        // Resetar o formulário após mostrar o alerta
       
    });
    

    // Modo Noturno

 