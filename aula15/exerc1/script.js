// Selecionar elementos do DOM
const input = document.getElementById('itemInput');
const addButton = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

// Função para adicionar um item
function addItem() {
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
  itemList.appendChild(li);

  // Limpar o campo de entrada
  input.value = '';
}

// Função para remover um item
function removeItem(event) {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentElement;
    itemList.removeChild(li);
  }
}

// Adicionar evento ao botão "Adicionar"
addButton.addEventListener('click', addItem);

// Delegação de eventos para remover itens
itemList.addEventListener('click', removeItem);