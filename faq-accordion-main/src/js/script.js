let iconeBotao1 = document.querySelector('img#icone1')
let iconeBotao2 = document.querySelector('img#icone2')
let iconeBotao3 = document.querySelector('img#icone3')
let iconeBotao4 = document.querySelector('img#icone4')
const paragrafoBotao_1 = document.querySelector('p#descricao1')
const paragrafoBotao_2 = document.querySelector('p#descricao2')
const paragrafoBotao_3 = document.querySelector('p#descricao3')
const paragrafoBotao_4 = document.querySelector('p#descricao4')

paragrafoBotao_1.style.display = 'none'
paragrafoBotao_2.style.display = 'none'
paragrafoBotao_3.style.display = 'none'
paragrafoBotao_4.style.display = 'none'

function mostrarDescricao1() {
    if (paragrafoBotao_1.style.display == 'none') {
        paragrafoBotao_1.style.display = 'block'
        paragrafoBotao_2.style.display = 'none'
        paragrafoBotao_3.style.display = 'none'
        paragrafoBotao_4.style.display = 'none'
        iconeBotao1.setAttribute('src', 'assets/images/icon-minus.svg')
        iconeBotao2.setAttribute('src', 'assets/images/icon-plus.svg')
        iconeBotao3.setAttribute('src', 'assets/images/icon-plus.svg')
        iconeBotao4.setAttribute('src', 'assets/images/icon-plus.svg')
    } else {
        paragrafoBotao_1.style.display = 'none'
        iconeBotao1.setAttribute('src', 'assets/images/icon-plus.svg')
    }
}

function mostrarDescricao2() {
    if (paragrafoBotao_2.style.display == 'none') {
        paragrafoBotao_2.style.display = 'block'
        paragrafoBotao_1.style.display = 'none'
        paragrafoBotao_3.style.display = 'none'
        paragrafoBotao_4.style.display = 'none'
        iconeBotao2.setAttribute('src', 'assets/images/icon-minus.svg')
        iconeBotao1.setAttribute('src', 'assets/images/icon-plus.svg')
        iconeBotao3.setAttribute('src', 'assets/images/icon-plus.svg')
        iconeBotao4.setAttribute('src', 'assets/images/icon-plus.svg')
    } else {
        paragrafoBotao_2.style.display = 'none'
        iconeBotao2.setAttribute('src', 'assets/images/icon-plus.svg')
    }
}

function mostrarDescricao3() {
    if (paragrafoBotao_3.style.display == 'none') {
        paragrafoBotao_3.style.display = 'block'
        paragrafoBotao_1.style.display = 'none'
        paragrafoBotao_2.style.display = 'none'
        paragrafoBotao_4.style.display = 'none'
        iconeBotao3.setAttribute('src', 'assets/images/icon-minus.svg')
        iconeBotao1.setAttribute('src', 'assets/images/icon-plus.svg')
        iconeBotao2.setAttribute('src', 'assets/images/icon-plus.svg')
        iconeBotao4.setAttribute('src', 'assets/images/icon-plus.svg')
    } else {
        paragrafoBotao_3.style.display = 'none'
        iconeBotao3.setAttribute('src', 'assets/images/icon-plus.svg')
    }
}

function mostrarDescricao4() {
    if (paragrafoBotao_4.style.display == 'none') {
        paragrafoBotao_4.style.display = 'block'
        paragrafoBotao_1.style.display = 'none'
        paragrafoBotao_2.style.display = 'none'
        paragrafoBotao_3.style.display = 'none'
        iconeBotao4.setAttribute('src', 'assets/images/icon-minus.svg')
        iconeBotao1.setAttribute('src', 'assets/images/icon-plus.svg')
        iconeBotao2.setAttribute('src', 'assets/images/icon-plus.svg')
        iconeBotao3.setAttribute('src', 'assets/images/icon-plus.svg')
    } else {
        paragrafoBotao_4.style.display = 'none'
        iconeBotao4.setAttribute('src', 'assets/images/icon-plus.svg')
    }
}