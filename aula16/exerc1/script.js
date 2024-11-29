function select() {
    //selecionando elementos
    let titulo = document.getElementById('titulo')
    let firstP = document.getElementById('firstP')
    let secondP = document.getElementById('secondP')
    let texto = document.getElementById('texto')

    titulo.textContent = "Bem-vindo ao meu site!"

    //mostrando o conteudo selecionado 
    secondP.style.backgroundColor = "yellow"
    texto.style.backgroundColor = "lightblue"
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const input = document.getElementById('itemInput');
const addButton = document.getElementById('addItem');
const itemList = document.getElementById('itemList');

function addItem() {
    const itemText = input.value.trim();
    if (itemText === '') {
        alert('Por favor, digite algo!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = itemText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.classList.add('remove-button');

    li.appendChild(removeButton);
    itemList.appendChild(li);
    input.value = '';
}

function removeItem(event) {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;
        itemList.removeChild(li);
    }
}

addButton.addEventListener('click', addItem);
itemList.addEventListener('click', removeItem);


///////////////////////////////////////////////////////////////////////////////////////////////////////////

function criarListas() {
    const container = document.getElementById('listas');

    for (let i = 1; i <= 10; i++) {
        const ul = document.createElement('ul');
        ul.id = i;

        for (let j = 1; j <= i; j++) {
            const li = document.createElement('li');
            li.textContent = `Item ${j} da lista ${i}`;
            ul.appendChild(li);
        }

        container.appendChild(ul);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function alerta() {
    const texto = document.getElementById('textAlert')

    alert("Parabéns, você clicou!")
    texto.textContent = "Texto alterado!"
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function mudarCSS(arquivoCSS) {
    let link = document.getElementById("estilo"); // Acessa o elemento <link> pelo id
    link.href = arquivoCSS; // Altera o arquivo CSS para o novo especificado
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function mudarCor() {
    let p = document.querySelectorAll('.lista')
    
    for (let x of p) {
        x.style.color = "red"
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleDivs() {
    // Pega todas as divs
    const divs = document.querySelectorAll('div');
    
    // Usando um loop for tradicional para iterar sobre as divs
    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        if (div.style.display === 'none') {
            div.style.display = ''; // Mostra a div
        } else {
            div.style.display = 'none'; // Oculta a div
        }
    }
}