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
function addCadastro() {
    let dados = leDados();
    let jogo = "";
    let funcao = "";
    if (document.getElementById("campoJogo").value == 1) {
        jogo = "LOL";
    } else if (document.getElementById("campoJogo").value == 2) {
        jogo = "Valorant";
    }
    if (document.getElementById("campoFuncao").value == 1) {
        funcao = "Aluno";
    } else if (document.getElementById("campoFuncao").value == 2) {
        funcao = "Coach";
    }
    let membro = {
        "lapide": false,
        "id": dados.usuario.length,
        "jogo": jogo,
        "nome": document.getElementById("campoNome").value,
        "nick": document.getElementById("campoNick").value,
        "funcao": funcao,
        "elo": document.getElementById("campoElo").value,
        "discord": document.getElementById("campoDiscord").value,
        "avatar": document.getElementById("campoAvatar").value, 
        "descricao": document.getElementById("campoDescricao").value,
    }   
    dados.usuario.push(membro);
    salvaDados(dados);
    alert("Membro adicionado com sucesso!");
    mostraMembros();
}

function mostraMembros() {

    let tela = document.getElementById("catJogadores");
    let strHtml = "";
    let objDados = leDados();
    for (i = 0; i < objDados.usuario.length; i++) {
        if (!objDados.usuario[i].lapide){
        strHtml += `<div id=${i} class=selCard>`;
        strHtml += `<p><b>ID: </b>${objDados.usuario[i].id}  `;
        strHtml += ` <b>Jogo: </b>${objDados.usuario[i].jogo}  `;
        strHtml += ` <b>Nome: </b>${objDados.usuario[i].nome}  `;
        strHtml += ` <b>Nick: </b>${objDados.usuario[i].nick}  `;
        strHtml += ` <b>Função: </b>${objDados.usuario[i].funcao}  `;
        strHtml += ` <b>Elo: </b>${objDados.usuario[i].elo}  `;
        strHtml += ` <b>Discord: </b>${objDados.usuario[i].discord}</p>`;
        strHtml += `<p><b>Descrição: </b>${objDados.usuario[i].descricao}</p>`;
        strHtml += "</div>";
    }
    }
    tela.innerHTML = strHtml;
}
//buttons
document.getElementById("botaoSalvar").addEventListener("click", addCadastro)
document.getElementById("botaoAlterar").addEventListener("click", editaDica)
document.getElementById("botaoApagar").addEventListener("click", apagaMembro)

function editaDica() {
    let dados = leDados();
    let jogo = "";
    let funcao = "";
    if (document.getElementById("campoJogo").value == 1) {
        jogo = "LOL";
    } else if (document.getElementById("campoJogo").value == 2) {
        jogo = "Valorant";
    }
    if (document.getElementById("campoFuncao").value == 1) {
        funcao = "Aluno";
    } else if (document.getElementById("campoFuncao").value == 2) {
        funcao = "Coach";
    }
    let membro = {
        "lapide": false,
        "id": dados.usuario[index].id,
        "jogo": jogo,
        "nome": document.getElementById("campoNome").value,
        "nick": document.getElementById("campoNick").value,
        "funcao": funcao,
        "elo": document.getElementById("campoElo").value,
        "discord": document.getElementById("campoDiscord").value,
        "avatar": document.getElementById("campoAvatar").value, 
        "descricao": document.getElementById("campoDescricao").value,
    }   
    dados.usuario[index]=membro;
    salvaDados(dados);
    alert("Membro alterado com sucesso!");
    console.log("editaMembro");
    mostraMembros();
}

function apagaMembro(){
    let dados = leDados();
    dados.usuario[index].lapide = true;
    salvaDados(dados);
    alert("Membro apagado com sucesso!");
    mostraMembros();
    console.log("apagaMembro");
}

function CheckClickMembro() {
    let lista = document.querySelectorAll(".selCard");
    lista.forEach((item) => {
        item.onclick = trataEvento;
    });
}
let trataEvento = (evento) => {
    let objDados = leDados();
    let jogo = "";
    let funcao = "";
    alvo = objDados.usuario[$(evento.currentTarget).attr("id")];
    index = alvo.id;
    console.log(alvo);
    document.getElementById("campoNome").value = alvo.nome;
    document.getElementById("campoNick").value = alvo.nick;
    document.getElementById("campoElo").value = alvo.elo;
    document.getElementById("campoDescricao").value = alvo.descricao;
    document.getElementById("campoDiscord").value = alvo.discord;
    document.getElementById("campoAvatar").value = alvo.avatar;
    if (alvo.jogo == "LOL") {
        jogo = 1;
    } else if (alvo.jogo == "Valorant") {
        jogo = 2;
    }
    if (alvo.funcao == "Aluno") {
        funcao = 1;
    } else if (alvo.funcao == "Coach") {
        funcao = 2;
    }
    document.getElementById("campoJogo").value = jogo;
    document.getElementById("campoFuncao").value = funcao;
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
        mostraMembros();
        botaoSalvar.disabled = true;
        botaoAlterar.disabled = true;
        botaoApagar.disabled = true;
        let ValidaForm = () => {
            if (campoJogo.value == 0 || campoNome.value == "" || campoNick.value == "" || campoFuncao.value == 0 || campoElo.value == "" || campoDiscord.value == "" || campoDescricao.value == "" ){
                botaoSalvar.disabled = true;
            } else {
                botaoSalvar.disabled = false;
            }
        }
        campoJogo.onchange = ValidaForm;
        campoNome.onchange = ValidaForm;
        campoNick.onchange = ValidaForm;
        campoFuncao.onchange = ValidaForm;
        campoElo.onchange = ValidaForm;
        campoDiscord.onchange = ValidaForm;
        campoDescricao.onchange = ValidaForm;
        CheckClickMembro();
    })



















    