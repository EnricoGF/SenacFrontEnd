async function buscarCep() {
    const cep = document.getElementById('cep').value
    if (cep.length !== 8) {
        alert('CEP inválido. Centifique-se de digitar 8 números')
        return
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {method: 'GET'})

    const data = await response.json()

    if (data.erro) {
        alert('CEP não encontrado!')
    }
    else {
        document.getElementById('logradouro').textContent = data.logradouro || 'Não disponível'
        document.getElementById('bairro').textContent = data.bairro || 'Não disponível'
        document.getElementById('cidade').textContent = data.localidade || 'Não disponível'
        document.getElementById('estado').textContent = data.uf || 'Não disponível'

        document.getElementById('resultado').style.display = 'block'

        document.getElementById('map').style.display = 'block'
        const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}, Brazil`

        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${endereco}`)
        const geoData = await geoResponse.json()

        if (geoData.length > 0) {
            const lat = geoData[0].lat
            const lon = geoData[0].lon

            const map = L.map('map').setView([lat, lon], 13)

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([lat, lon]).addTo(map)
                .bindPopup(`${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`)
                .openPopup()
        } else {
            alert('Não foi possível encontrar o mapa para este endereço.')
        }
    }
}