let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 
let placar = 0 

let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual o maior bloco de carnaval do Brasil?",
    alternativaA : "O galo da madrugada",
    alternativaB : "Sargento Pimenta",
    alternativaC : "Canto da sereia",
    alternativaD : "Minhoqueens",
    correta      : "O galo da madrugada",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual o país da origem do carnaval?",
    alternativaA : "China",
    alternativaB : "Grécia",
    alternativaC : "Antigo Egito",
    alternativaD : "Honduras",
    correta      : "Antigo Egito",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A palavra carnaval vem do latim carnis levale. Qual o significado desta expressão?",
    alternativaA : "Festa da carne",
    alternativaB : "Beijo na carne",
    alternativaC : "Sangue da carne",
    alternativaD : "Retirar a carne",
    correta      : "Retirar a Carne",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O famoso Galo da Madrugada é um bloco que tem sua origem em qual estado brasileiro?",
    alternativaA : "Pernambuco",
    alternativaB : "Ceará",
    alternativaC : "Bahia",
    alternativaD : "Santa Catarina",
    correta      : "Pernambuco",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O término do carnaval, na Quarta-feira de Cinzas, marca também o início de um período do catolicismo. Qual o nome deste período?",
    alternativaA : "Quarentena",
    alternativaB : "Quaresma",
    alternativaC : "Quarentina",
    alternativaD : "Quarenta",
    correta      : "Quaresma",
}



    const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
   
    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa) {
        pontos += 10 
    }  
    

    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function() {
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 
        location.reload();
    }, 2000)
}