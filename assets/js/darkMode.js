
const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

// Verifica se já existe uma preferência de tema no localStorage
const modoPreferido = localStorage.getItem('modoPreferido');

// Define o tema com base na preferência armazenada ou padrão 'light'
const modo = modoPreferido || 'light';
elemento.setAttribute("data-bs-theme", modo);
modo === 'dark' ? inputCheck.setAttribute('checked',  true) : ''

// Adiciona um ouvinte de evento ao botão para alternar entre os temas
inputCheck.addEventListener('click', () => {
  const novoModo = inputCheck.checked ? 'dark' : 'light';
  elemento.setAttribute("data-bs-theme", novoModo);
  
  // Armazena a preferência de tema no localStorage
  localStorage.setItem('modoPreferido', novoModo);
});
