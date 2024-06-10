function modificarCardNum() {
    let regex = /[a-z]/g
    let errorMsg = document.querySelector('sub#numberError')
    var numeroNoInput = document.querySelector('input#cardnumber')
    var numeroDoCartao = document.querySelector('p#cnumber')
    let inputlength = numeroNoInput.value.length
    if (numeroNoInput.value == '' ) {
        numeroDoCartao.innerHTML = '0000 0000 0000 0000'
        errorMsg.innerHTML = "Can't be blank."
        numeroNoInput.style.border = '2px solid red'
    }

    else if (regex.test(numeroNoInput.value)) {
        errorMsg.innerHTML = 'Wrong format, numbers only'
        numeroNoInput.style.border = '2px solid red'
    }

    else {
        numeroDoCartao.innerHTML = numeroNoInput.value
        errorMsg.innerHTML = ''
        numeroNoInput.style.border = '1px solid black'
    }
}

function autoSpace() {
    var numeroNoInput = document.querySelector('input#cardnumber')
    let inputlength = numeroNoInput.value.length
    if (inputlength == 4 || inputlength == 9 || inputlength == 14) {
        numeroNoInput.value += ' '
    }
}

function modificarCardName() {
    let regex = /\d/g
    let errorMsg = document.querySelector('sub#nameError')
    var nomeNoInput = document.querySelector('input#cardname')
    var nomeDoCartao = document.querySelector('sub#cname')
    if (nomeNoInput.value == '') {
        nomeDoCartao.innerHTML = 'JANE APPLESEED'
        errorMsg.innerHTML = "Can't be blank."
        nomeNoInput.style.border = '2px solid red'
    }

    else if (regex.test(nomeNoInput.value)) {
        errorMsg.innerHTML = 'Wrong format, letters and points only'
        nomeNoInput.style.border = '2px solid red'
    }

    else {
        nomeDoCartao.innerHTML = nomeNoInput.value
        errorMsg.innerHTML = ''
        nomeNoInput.style.border = '1px solid black'
    }
}

function mesVenc() {
    let errorMsg = document.querySelector('sub#monthError')
    var mesNoInput = document.querySelector('input#expiration')
    var mesDoCartao = document.querySelector('mm')
    if (mesNoInput.value == '') {
        mesDoCartao.innerHTML = '00'
        errorMsg.innerHTML = "Can't be blank."
        mesNoInput.style.border = '2px solid red'
    }

    else if (mesNoInput.value > 12 ) {
        mesDoCartao.innerHTML = '00'
        mesNoInput.style.border = '2px solid red'
        errorMsg.innerHTML = 'Invalid. (Max: 12)'
        mesNoInput.value = null
    }

    else if (mesNoInput.value.length == 2 & mesNoInput.value == 0) {
        mesNoInput.value = 1
    }

    else if (mesNoInput.value.length < 2) {
        mesDoCartao.innerHTML = ('0' + mesNoInput.value)
        mesNoInput.style.border = '1px solid black'
        errorMsg.innerHTML = ""
    }

    else {
        mesDoCartao.innerHTML = mesNoInput.value
        errorMsg.innerHTML = ""
        mesNoInput.style.border = '1px solid black'
    }
}

function anoVenc() {
    let errorMsg = document.querySelector('sub#yearError')
    var anoNoInput = document.querySelector('input#yy')
    var anoDoCartao = document.querySelector('yy')
    anoDoCartao.innerHTML = anoNoInput.value
    if (anoNoInput.value == '') {
        anoDoCartao.innerHTML = '00'
        errorMsg.innerHTML = "Can't be blank"
        anoNoInput.style.border = '2px solid red' 
    }
    else {
        if (anoNoInput.value.length < 2) {
            anoDoCartao.innerHTML = ('0' + anoNoInput.value)
        }
        else {
            anoDoCartao.innerHTML = anoNoInput.value
        }
        errorMsg.innerHTML = ''
        anoNoInput.style.border = '1px solid black'
    }
}

function modificarCVC() {
    let errorMsg = document.querySelector('sub#cvcError')
    var cvcNoInput = document.querySelector('input#cvc')
    var cvcDoCartao = document.querySelector('sub#treenumbers')
    if (cvcNoInput.value == '') {
        cvcDoCartao.innerHTML = '000'
        errorMsg.innerHTML = "Can't be blank"
        cvcNoInput.style.border = '2px solid red' 
    }
    else {
        cvcDoCartao.innerHTML = cvcNoInput.value
        errorMsg.innerHTML = ''
        cvcNoInput.style.border = '1px solid black'
    }
}

function buttonAction() {
    let camposDeInput = document.querySelector('section#inputs')
    let telaFinal = document.querySelector('div#thanks')
    if (camposDeInput.style.display = 'grid') {
        camposDeInput.style.display = 'none'
        telaFinal.style.display = 'grid'
    }
}