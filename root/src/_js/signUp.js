let labelnome = document.querySelector ('#labelnome')
let nome = document.querySelector ('#nome')
validnome =false

let labelemail = document.querySelector ('#labelemail')
let email = document.querySelector ('#email')
validemail=false

let labeltelefone = document.querySelector ('#labeltelefone')
let telefone = document.querySelector ('#telefone')
validtelefone=false

let labelcep = document.querySelector ('#labelcep')
let cep = document.querySelector ('#cep')
validcep=false

let labelsenha = document.querySelector ('#labelsenha')
let senha = document.querySelector ('#senha')
validsenha=false

let labelconfsenha =document.querySelector ('#labelconfsenha')
let confsenha = document.querySelector ('#confsenha')
validconfsenha =false


let cliente = document.querySelector ('#cliente')
validUser = true





nome.addEventListener ('keyup', () =>{
    if (nome.value.length <=2) {
        labelnome.setAttribute ('style', 'color: red')
        labelnome.innerHTML = 'Nome *'
        validnome =false


    }
    else {
        labelnome.setAttribute ('style', 'color: green')
        labelnome.innerHTML = 'Nome'
        validnome =true
    }
})


email.addEventListener ('keyup', () =>{
    if (email.value.length <=5) {
        labelemail.setAttribute ('style', 'color: red')
        labelemail.innerHTML = 'E-mail *'
        validemail =false


    }
    else {
        labelemail.setAttribute ('style', 'color: green')
        labelemail.innerHTML = 'E-mail'
        validemail =true
    }
})


telefone.addEventListener ('keyup', () =>{
    if (telefone.value.length <=5) {
        labeltelefone.setAttribute ('style', 'color: red')
        labeltelefone.innerHTML = 'Telefone *'
        validtelefone =false


    }
    else {
        labeltelefone.setAttribute ('style', 'color: green')
        labeltelefone.innerHTML = 'Telefone'
        validtelefone =true
    }
})


cep.addEventListener ('keyup', () =>{
    if (cep.value.length <=4) {
        labelcep.setAttribute ('style', 'color: red')        
        labelcep.innerHTML = 'CEP *'
        validcep =false


    }
    else {
        labelcep.setAttribute ('style', 'color: green')
        labelcep.innerHTML = 'CEP'
        validcep =true
    }
})


senha.addEventListener ('keyup', () =>{
    if (senha.value.length <=5) {
        labelsenha.setAttribute ('style', 'color: red')        
        labelsenha.innerHTML = 'Senha *'
        validsenha =false


    }
    else {
        labelsenha.setAttribute ('style', 'color: green')
        labelsenha.innerHTML = 'Senha'
        validsenha =true
    }
})


confsenha.addEventListener ('keyup', () =>{
    if (senha.value != confsenha.value) {
        labelconfsenha.setAttribute ('style', 'color: red')        
        labelconfsenha.innerHTML = 'Confirme sua senha * As senhas não conferem'
        validconfsenha =false


    }
    else {
        labelconfsenha.setAttribute ('style', 'color: green')
        labelconfsenha.innerHTML = 'Confirme sua senha'
        validconfsenha =true
    }
})

function validocliente () {
    validUser = true
}


function validoprestador () {
    validUser = false
}


function cadastrar () {
    if ( validnome && validemail && validtelefone && validcep && validsenha && validconfsenha && validUser) { 
        
        window.location.href = '../cadastrodoParceirocliente/index.html'

    }

    else if ( validnome && validemail && validtelefone && validcep && validsenha && validconfsenha) { 
        
        window.location.href = '../cadastro%20do%20parceiro_addservicos/cdp_addServico.html'

    }

    else {
        alert ('Preencha todos os campos obrigatórios')
    }
} 