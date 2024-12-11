const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

const box = 20
let snake = [{ x: box * 5, y: box * 5 }]
let direction = 'RIGHT'
let food = {x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box}

let pontos = 0
let texto = document.getElementById('pontos')
let dificuldade = 200

document.addEventListener('keydown', changeDirection)

function changeDirection(event) {
    if (event.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (event.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
    if (event.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (event.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
}

function draw() {
    ctx.fillStyle = 'lightskyblue'
    ctx.fillRect(0, 0, canvas.width, canvas.height) // cordenada x e y do canto superior esquerdo do retangulo e largura e altura do retangulo

    for (let i = 0; i < snake.length; i++) {
        if (i == 0) {
            ctx.fillStyle = 'green' // cor da 'cabeça' da cobra
        }
        else {
            ctx.fillStyle = 'lightgreen' // cor do 'corpo' da cobra
        }
        ctx.fillRect(snake[i].x, snake[i].y, box, box) // desenha segmento da cobra

        ctx.strokeStyle = 'darkgreen' // estilo da borda
        ctx.strokeRect(snake[i].x, snake[i].y, box, box) //desenha borda do segmento
    }

    ctx.fillStyle = 'red'
    ctx.fillRect(food.x, food.y, box, box) // desenha comida na posição gerada

    ctx.strokeStyle = 'white'
    ctx.strokeRect(food.x, food.y, box, box) // desenha borda do segmento

    // posições x e y da cabeça da cobra
    let snakeX = snake[0].x
    let snakeY = snake[0].y

    // atualiza a posição de onde começa a cobra com base na direção
    if (direction === 'LEFT') snakeX -= box 
    if (direction === 'UP') snakeY -= box 
    if (direction === 'RIGHT') snakeX += box 
    if (direction === 'DOWN') snakeY += box 

    if (snakeX === food.x && snakeY === food.y) {
        pontos++
        texto.textContent = 'Pontuação: ' + pontos

        dificuldade -= 10

        clearInterval(game)
        game = setInterval(draw, dificuldade)

        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        }
    }
    // se a cobra não comeu, remove o ultimo segmento
    else {
        snake.pop()
    }
    // cria um novo segmento para a nova cabeça da cobra
    const newHead = { x: snakeX, y: snakeY }

    //verifica colisões com as bordas do canvas ou com ela mesma
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        // para o jogo se houver colisão
        clearInterval(game)
        alert('Game Over!')
    }

    snake.unshift(newHead) // adiciona a nova cabeça da cobra ao inicio do array
}

function collision(head, array) {
    //loop para verificar se a cabeça coincide com qualquer segmento da cobra
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true
        }
        return false
    }
}

//inicia o jogo chamando a função draw a cada 200 ms
let game = setInterval(draw, dificuldade)