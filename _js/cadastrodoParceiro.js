let labelNome = document.querySelector ('#labelNome')
let nome = document.querySelector ('#nome')
validnome = false

let labelLogradouro = document.querySelector('#labelLogradouro')
let logradouro = document.querySelector ('#logradouro')
validlogradouro = false

let labelCpfCnpj =document.querySelector ('#labelCpfCnpj')
let cpfCnpj = document.querySelector ('#cpfCnpj')
validcpfCnpj= false

let labelNumero =document.querySelector ('#labelNumero')
let numero =document.querySelector ('#numero')
validnumero =false

let labelCidade = document.querySelector ('#labelCidade')
let cidade = document.querySelector ('#cidade')
validcidade =false

let labelComplemento = document.querySelector ('#labelComplemento')
let complemento =document.querySelector ('#complemento')
validcomplemento =false

let labelTelefone = document.querySelector ('#labelTelefone')
let telefone = document.querySelector ('#telefone')
validtelefone= false 

let labelBairro =document.querySelector ('#labelBairro')
let bairro =document.querySelector ('#bairro')
validbairro=false

let labelEstado = document.querySelector ('#labelEstado')
let estado = document.querySelector ('#estado')




nome.addEventListener ('keyup', ()=> {
    if (nome.value.length <=0) {
        labelNome.setAttribute ('style', 'color: red')
        labelNome.innerHTML = 'Qual é o nome do estabelecimento? *'
        validnome = false
        
    }
    else {
        labelNome.setAttribute ('style', 'color: green')
        labelNome.innerHTML = 'Qual é o nome do estabelecimento?'
        validnome = true

    }
})


logradouro.addEventListener ('keyup', () =>{
    if (logradouro.value.length <=3) {
        labelLogradouro.setAttribute ('style', 'color:red')
        labelLogradouro.innerHTML = 'Logradouro *'
        validlogradouro = false
    
    }
        

    else {
        labelLogradouro.setAttribute ('style', 'color : green')
        labelLogradouro.innerHTML ='Logradouro'
        validlogradouro = true
    }
})


cpfCnpj.addEventListener ('keyup', () =>{
    if (cpfCnpj.value.length <=3) {
        labelCpfCnpj.setAttribute ('style', 'color:red')
        labelCpfCnpj.innerHTML = 'CPF/CNPJ *'
        validcpfCnpj= false
    
    }
        

    else {
        labelCpfCnpj.setAttribute ('style', 'color : green')
        labelCpfCnpj.innerHTML ='CPF/CNPJ '
        validcpfCnpj= true
    }
})

numero.addEventListener ('keyup', () =>{
    if (numero.value.length <=0) {
        labelNumero.setAttribute ('style', 'color:red')
        labelNumero.innerHTML = 'Número *'
        validnumero =false
    
    }

    else {
        labelNumero.setAttribute ('style', 'color : green')
        labelNumero.innerHTML ='Número'
        validnumero =true 
    }
})

cidade.addEventListener ('keyup', () => {
    if (cidade.value.length <=2 ) { 
        labelCidade.setAttribute ('style', 'color:red')
        labelCidade.innerHTML = 'Cidade *'
        validcidade =false
    
    }


   
    else {
        labelCidade.setAttribute ('style', 'color : green')
        labelCidade.innerHTML ='Cidade'
        validcidade =true

    }
})

complemento.addEventListener ('keyup', () => {
    if (complemento.value.length <=0 ) { 
        labelComplemento.setAttribute ('style', 'color:red')
        labelComplemento.innerHTML = 'Complemento *'
        validcomplemento =false
    
    }


   
    else {
        labelComplemento.setAttribute ('style', 'color : green')
        labelComplemento.innerHTML ='Complemento'
        validcomplemento =true

    }
})

telefone.addEventListener ('keyup', () => {
    if (telefone.value.length <=6 ) { 
        labelTelefone.setAttribute ('style', 'color:red')
        labelTelefone.innerHTML = 'Telefone *'
        validtelefone= false }


   
    else {
        labelTelefone.setAttribute ('style', 'color : green')
        labelTelefone.innerHTML ='Telefone'
        validtelefone= true 

    }
})

bairro.addEventListener ('keyup', () => {
    if (bairro.value.length <=3 ) { 
        labelBairro.setAttribute ('style', 'color:red')
        labelBairro.innerHTML = 'Bairro *'
        validbairro=false
    }


   
    else {
        labelBairro.setAttribute ('style', 'color : green')
        labelBairro.innerHTML ='Bairro'
        validbairro=true

    }
})

function cadastrar () {
    if(validbairro && validtelefone && validcomplemento && validcidade &&validnumero && validcpfCnpj && validlogradouro && validnome ){
        let listaUser = JSON.parse (localStorage.getItem ('listaUser') || '[]')

        listaUser.push (
            {
                cadnome: nome.value,
                cadlogradouro: logradouro.value,
                cadcpfCnpj: cpfCnpj.value, 
                cadnumero: numero.value, 
                cadcidade : cidade.value,
                cadcomplemento: complemento.value, 
                cadtelefone: telefone.value,
                cadbairro: bairro.value,
                cadestado: estado.value



            }
        )

        localStorage.setItem ('listaUser', JSON.stringify (listaUser))

        alert ('Usuário cadastrado com sucesso!')

        window.location.href = '../logIn/login.html'

    }
    
    else {
        alert ('Preencha todos os campos')
    }
}
