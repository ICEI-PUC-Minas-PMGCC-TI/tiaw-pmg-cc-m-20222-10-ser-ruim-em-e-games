function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ 
                        {nome: "Farmando na torre", descricao: "Como farmar de baixo da torre", link: "https://www.youtube.com/embed/TbnmRrGZrso", agente: "Farm", tipo: "wave management", mapa: "Summoner's Rift"},
                        {nome: "Como usar o flash", descricao: "USE FLASH COMO UM SCRIPT", link: "https://www.youtube.com/embed/nyzth-6AhCw", agente: "Flash spell", tipo: "setup", mapa: "Summoner's Rift"},
                        {nome: "Como subir de elo", descricao: "QUER SUBIR DE ELO? FAÇA COMO ELE", link: "https://www.youtube.com/embed/fz7htXNPMZE", agente: "Elo", tipo: "Dicas gerais", mapa: "Summoner's Rift, solo duo"},
                        {nome: "Rotação", descricao: "QUE AULA DE ROTAÇÃO!", link: "https://www.youtube.com/embed/NByGlmX3gxM", agente: "rotação", tipo: "Todas as lanes", mapa: "Summoner's Rift"}
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById ('campoNome').value;
    let strDescricao = document.getElementById ('campoDescricao').value;
    let strLink = document.getElementById ('campoLink').value;
    let strAgente = document.getElementById ('campoAgente').value;
    let strTipo = document.getElementById ('campoTipo').value;
    let strMapa = document.getElementById ('campoMapa').value;
    let novoContato = {
        nome: strNome,
        descricao: strDescricao,
        link: strLink,
        agente: strAgente,
        tipo: strTipo,
        mapa: strMapa
    };
    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p><h10>${objDados.contatos[i].nome}<\h10></p>- <p><h10>${objDados.contatos[i].descricao}</h10></p>- </p><iframe width="100%" height="30%" src=${objDados.contatos[i].link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></p> - </p><h10> TAGS: ${objDados.contatos[i].agente}</h10></p> - </p><h10>${objDados.contatos[i].tipo}</h10></p> - <p><h10>${objDados.contatos[i].mapa}</h10></p> - <p> </p> - <p> </p> - <p> </p>==============================================================================================================================`
}

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);

