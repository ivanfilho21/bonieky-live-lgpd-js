// HTML do banner
let lgpdHTML = `
    <div class="lgpd">
        <div class="lpdg--left">
            Nós usamos cookies para melhorar sua experiência de usuário.<br>
            Para conferir detalhadamente todos os cookies utilizados, leia nossa
            <a href="#">política de privacidade</a>.
        </div>
        <div class="lgpd--right">
            <button>OK</button>
        </div>
    </div>
    <link rel="stylesheet" href="lgpd.css">
`;

// URL para o seu servidor que deve guardar os dados de acesso do visitante
let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';

// conteúdo do local storage
let lsContent = localStorage.getItem('lgpd');

// verifica se ainda não há conteúdo do LGPD
if (!lsContent) {
    document.body.innerHTML += lgpdHTML;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    // adiciona evento de click ao botão
    lgpdButton.addEventListener('click', async () => {
        // remover o banner
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let json = await result.json();


        // verificar se não deu erro na requisição
        if (json.error != '') {
            // id teste
            let id = '123';

            // preencher o local storage com algum valor
            localStorage.setItem('lgpd', id);
        }
    })
}