// Selecionar elementos do DOM
const inputFilmes = document.getElementById('inputFilmes');
const addFilmeButton = document.getElementById('addFilme');
const filmesLista = document.getElementById('filmesLista');

const inputSeries = document.getElementById('inputSeries');
const addSerieButton = document.getElementById('addSerie');
const seriesLista = document.getElementById('seriesLista');

// Função para adicionar um item
function addItem(input, list) {
  const itemText = input.value.trim();
  if (itemText === '') {
    alert('Por favor, digite algo!');
    return;
  }

  // Criar o elemento <li> e botão
  const li = document.createElement('li');
  li.textContent = itemText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.classList.add('remove-button');

  // Adicionar o botão ao <li>
  li.appendChild(removeButton);

  // Adicionar o <li> à lista
  list.appendChild(li);

  // Limpar o campo de entrada
  input.value = '';
}

// Função para remover um item
function removeItem(event, list) {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentElement;
    list.removeChild(li);
  }
}


// Adicionar eventos de clique para os botões "Adicionar"
addFilmeButton.addEventListener('click', () => addItem(inputFilmes, filmesLista));
addSerieButton.addEventListener('click', () => addItem(inputSeries, seriesLista));

// Delegação de eventos para remover itens (uma para cada lista)
filmesLista.addEventListener('click', (event) => removeItem(event, filmesLista));
seriesLista.addEventListener('click', (event) => removeItem(event, seriesLista));