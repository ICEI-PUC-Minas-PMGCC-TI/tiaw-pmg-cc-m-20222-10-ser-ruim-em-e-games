function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            "dicas": [
                {
                    "lapide": false,
                    "id": 0,
                    "habilidade": "Lineup de viper Fracture",
                    "jogo": "Valorant",
                    "descricao": "Lineup de viper na fracture que eu escontrei, roubado",
                    "categoria": "Viper, Fracture, Lineup",
                    "urlmidia": "biFi8_fVr98",
                    "midia": "https://www.youtube.com/embed/biFi8_fVr98",
                    "dificuldade": "Iniciante",
                },
                {
                    "lapide": false,
                    "id": 1,
                    "habilidade": "Setup de Cypher na ascent",
                    "jogo": "Valorant",
                    "descricao": "Setup de Cypher pos-rework na ascent",
                    "categoria": "Cypher, Ascent, Setup",
                    "urlmidia": "Hrf5EMwvIiM",
                    "midia": "https://www.youtube.com/embed/Hrf5EMwvIiM",
                    "dificuldade": "Iniciante",
                },
                {
                    "lapide": false,
                    "id": 2,
                    "habilidade": "Counter-Strafe",
                    "jogo": "Valorant",
                    "descricao": "Como dar counter-strafe pra não tomar capa toda hora",
                    "categoria": "Movimentação, Tiro, Todos",
                    "urlmidia": "FSgzDYxLKIo",
                    "midia": "https://www.youtube.com/embed/FSgzDYxLKIo",
                    "dificuldade": "Avançado",
                },
                {
                    "lapide": false,
                    "id": 3,
                    "habilidade": "Como manter a Economia",
                    "jogo": "Valorant",
                    "descricao": "Como manter o dinheiro sem ter que ficar jogando eco o jogo todo",
                    "categoria": "Economia, Todos",
                    "urlmidia": "SS9JBP5fKnc",
                    "midia": "https://www.youtube.com/embed/SS9JBP5fKnc",
                    "dificuldade": "Intermediário",
                },
                {
                    "lapide": false,
                    "id": 4,
                    "habilidade": "Aprenda a usar o flash",
                    "jogo": "LOL",
                    "descricao": "Comno usar o flash e algumas spells no time correto",
                    "categoria": "spell setup",
                    "urlmidia": "nyzth-6AhCw",
                    "midia": "https://www.youtube.com/embed/nyzth-6AhCw",
                    "dificuldade": "Iniciante",
                },
                {
                    "lapide": false,
                    "id": 5,
                    "habilidade": "Setup de minions",
                    "jogo": "LOL",
                    "descricao": "Como farmar",
                    "categoria": "farm",
                    "urlmidia": "TbnmRrGZrso",
                    "midia": "https://www.youtube.com/embed/TbnmRrGZrso",
                    "dificuldade": "Intermediario",
                },
                {
                    "lapide": false,
                    "id": 6,
                    "habilidade": "Rotação",
                    "jogo": "LOL",
                    "descricao": "Onde e quando rotacionar",
                    "categoria": "Movimentação no mapa",
                    "urlmidia": "NByGlmX3gxM",
                    "midia": "https://www.youtube.com/embed/NByGlmX3gxM",
                    "dificuldade": "Avançado",
                },
                {
                    "lapide": false,
                    "id": 7,
                    "habilidade": "Como subir de elo",
                    "jogo": "LOL",
                    "descricao": "Como sair do elohell",
                    "categoria": "Dicas gerais",
                    "urlmidia": "fz7htXNPMZE",
                    "midia": "https://www.youtube.com/embed/fz7htXNPMZE",
                    "dificuldade": "Avançado",
                }
            ],
            "usuario": [
                {
                    "lapide": false,
                    "id": 0,
                    "jogo": "LOL",
                    "nome": "Felipe Gonçalves",
                    "nick": "brTT",
                    "funcao": "Coach",
                    "elo": "Desafiante",
                    "discord": "brTT#0001",
                    "avatar": "",
                    "descricao": "Ex-jogador profissional buscando ajudar novos jogadores a melhorarem",
                },
                {
                    "lapide": false,
                    "id": 1,
                    "jogo": "LOL",
                    "nome": "Besourinho",
                    "nick": "Besourinho",
                    "funcao": "Aluno",
                    "elo": "Prata",
                    "discord": "besourinho#9323",
                    "avatar": "",
                    "descricao": "Jogador casual e ruim que quer aprender a farmar",
                },
                {
                    "lapide": false,
                    "id": 2,
                    "jogo": "Valorant",
                    "nome": "Daniel da Silveira",
                    "nick": "Pancho",
                    "funcao": "Aluno",
                    "elo": "Ferro",
                    "discord": "Daniel S M#2471",
                    "avatar": "",
                    "descricao": "Acabei de instalar Valorant e gostaria de aprender a jogar, nunca joguei FPS antes",
                },
                {
                    "lapide": false,
                    "id": 3,
                    "jogo": "Valorant",
                    "nome": "Gabriel Toledo",
                    "nick": "FalleN",
                    "funcao": "Coach",
                    "elo": "Radiante",
                    "discord": "FalleN#0002",
                    "avatar": "",
                    "descricao": "Jogador profissional de CS:GO, bicampeão mundial disposto a ensinar o básico de FPS para novatos no Valorant ",
                }
            ]        
        };
    }
    return objDados;
}


function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function geraUrl(link){
    let url = '';
    for(i=0;i<11;i++){
        url += link[link.length-11+i];
    }
    return url;
}

function addDica() {
    let dados = leDados();
    let dificuldade = "";
    let jogo = "";
    if (document.getElementById("campoDificuldade").value == 1) {
        dificuldade = "Iniciante";
    } else if (document.getElementById("campoDificuldade").value == 2) {
        dificuldade = "Intermediário";
    } else if (document.getElementById("campoDificuldade").value == 3) {
        dificuldade = "Avançado";
    }
    if (document.getElementById("campoJogo").value == 1) {
        jogo = "LOL";
    } else if (document.getElementById("campoJogo").value == 2) {
        jogo = "Valorant";
    }
    let url = geraUrl(document.getElementById("campoMidia").value);
    let dica = {
        "lapide": false,
        "id": dados.dicas.length,
        "habilidade": document.getElementById("campoHabilidade").value,
        "descricao": document.getElementById("campoDescricao").value,
        "categoria": document.getElementById("campoCategoria").value,
        "midia": document.getElementById("campoMidia").value,
        "urlmidia": url,
        "jogo": jogo,
        "dificuldade": dificuldade,
    }
    dados.dicas.push(dica);
    salvaDados(dados);
    alert("Dica adicionada com sucesso!");
    mostraDicas();
}

function mostraDicas() {

    let tela = document.getElementById("catAulas");
    let strHtml = "";
    let objDados = leDados();
    console.log("teste");
    for (i = 0; i < objDados.dicas.length; i++) {
        if (!objDados.dicas[i].lapide){
        strHtml += `<div id=${i} class=selCard>`;
        strHtml += `<p><b>ID: </b>${objDados.dicas[i].id}  `;
        strHtml += `<b>Jogo: </b>${objDados.dicas[i].jogo} </p>`;
        strHtml += ` <p><b>Habilidade: </b>${objDados.dicas[i].habilidade}  `;
        strHtml += ` <b>Categoria: </b>${objDados.dicas[i].categoria}`;
        strHtml += ` <b>Dificuldade: </b>${objDados.dicas[i].dificuldade}</p>`;
        strHtml += `<p><b>Descrição: </b>${objDados.dicas[i].descricao}</p>`;
        if (objDados.dicas[i].midia != "") {
            strHtml += `<p><b>Mídia: </b> <a href =${objDados.dicas[i].midia}> Link </a></p>`;
        }
        strHtml += "</div>";
    }
    }
    tela.innerHTML = strHtml;
}
//buttons
document.getElementById("botaoSalvar").addEventListener("click", addDica)
document.getElementById("botaoAlterar").addEventListener("click", editaDica)
document.getElementById("botaoApagar").addEventListener("click", apagaDica)

function editaDica() {
    let dados = leDados();
    if (document.getElementById("campoDificuldade").value == 1) {
        dificuldade = "Iniciante";
    } else if (document.getElementById("campoDificuldade").value == 2) {
        dificuldade = "Intermediário";
    } else if (document.getElementById("campoDificuldade").value == 3) {
        dificuldade = "Avançado";
    }
    if (document.getElementById("campoJogo").value == 1) {
        jogo = "LOL";
    } else if (document.getElementById("campoJogo").value == 2) {
        jogo = "Valorant";
    }
    let dica = {
        "lapide": false,
        "id": dados.dicas[index].id,
        "habilidade": document.getElementById("campoHabilidade").value,
        "descricao": document.getElementById("campoDescricao").value,
        "jogo": jogo,
        "categoria": document.getElementById("campoCategoria").value,
        "midia": document.getElementById("campoMidia").value,
        "urlmidia": geraUrl(document.getElementById("campoMidia").value),
        "dificuldade": dificuldade,
    }
    dados.dicas[index]=dica;
    salvaDados(dados);
    alert("Dica alterada com sucesso!");
    console.log("editaDica");
    mostraDicas();
}

function apagaDica(){
    let dados = leDados();
    dados.dicas[index].lapide = true;
    salvaDados(dados);
    alert("Dica apagada com sucesso!");
    mostraDicas();
    console.log("apagaDica");
}

function CheckClick() {
    let lista = document.querySelectorAll(".selCard");
    lista.forEach((item) => {
        item.onclick = trataEvento;
    });
}
let trataEvento = (evento) => {
    let objDados = leDados();
    let dificuldade = "";
    let jogo = "";
    alvo = objDados.dicas[$(evento.currentTarget).attr("id")];
    index = alvo.id;
    console.log(alvo);
    document.getElementById("campoHabilidade").value = alvo.habilidade;
    document.getElementById("campoDescricao").value = alvo.descricao;
    document.getElementById("campoCategoria").value = alvo.categoria;
    document.getElementById("campoMidia").value = alvo.midia;
    if (alvo.dificuldade == "Iniciante") {
        dificuldade = 1;
    } else if (alvo.dificuldade == "Intermediário") {
        dificuldade = 2;
    } else if (alvo.dificuldade == "Avançado") {
        dificuldade = 3;
    }
    if (alvo.jogo == "LOL") {
        jogo = 1;
    } else if (alvo.jogo == "Valorant") {
        jogo = 2;
    } 
    document.getElementById("campoDificuldade").value = dificuldade;
    document.getElementById("campoJogo").value = jogo;
    checkChange();
  };


function checkChange(){
    if(index >= 0) {
        botaoAlterar.disabled = false;
        botaoApagar.disabled = false;
    }
}


window.addEventListener("load",function() {
        var index = -1;
        console.log("Página carregada");
        mostraDicas();
        botaoSalvar.disabled = true;
        botaoAlterar.disabled = true;
        botaoApagar.disabled = true;
        let ValidaForm = () => {
            if (campoHabilidade.value == "" || campoDescricao.value == "" || campoCategoria.value == "" || campoDificuldade.value == 0) {
                botaoSalvar.disabled = true;
            } else {
                botaoSalvar.disabled = false;
            }
        }
        campoHabilidade.onchange = ValidaForm;
        campoDescricao.oninput = ValidaForm;
        campoCategoria.onchange = ValidaForm;
        campoDificuldade.onchange = ValidaForm;
        CheckClick();
    })


