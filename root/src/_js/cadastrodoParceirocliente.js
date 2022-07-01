let labelLogradouro = document.querySelector ('#labelLogradouro')
let logradouro = document.querySelector ('#logradouro')
Validlogradouro = false

let labelCidade = document.querySelector ('#labelCidade')
let cidade = document.querySelector ('#cidade')
Validcidade = false

let labelNumero = document.querySelector ('#labelNumero')
let numero = document.querySelector ('#numero')
Validnumero = false

let labelComplemento = document.querySelector ('#labelComplemento')
let complemento = document.querySelector('#complemento')
Validcomplemento = false

let labelBairro = document.querySelector ('#labelBairro')
let bairro = document.querySelector ('#bairro')
Validbairro = false


let Labelestado = document.querySelector ('#Labelestado')
let estado = document.querySelector ('#estado')


logradouro.addEventListener ('keyup', ()=> {
    if(logradouro.value.length <=2){
        labelLogradouro.setAttribute ('style', 'color: red')
        labelLogradouro.innerHTML = 'Logradouro *'
        Validlogradouro = false
        

    }
else  {
    labelLogradouro.setAttribute ('style', 'color: green')
    labelLogradouro.innerHTML = 'Logradouro'
    Validlogradouro = true
}
})



cidade.addEventListener ('keyup', ()=> {
    if(cidade.value.length <=2){
        labelCidade.setAttribute ('style', 'color: red')
        labelCidade.innerHTML = 'Cidade *'
        Validcidade = false
        

    }
else  {
    labelCidade.setAttribute ('style', 'color: green')
    labelCidade.innerHTML = 'Cidade'
    Validcidade = true
}
})


numero.addEventListener ('keyup', ()=> {
    if(numero.value.length <=0){
        labelNumero.setAttribute ('style', 'color: red')
        labelNumero.innerHTML = 'Número *'
        Validnumero = false
        

    }
else  {
    labelNumero.setAttribute ('style', 'color: green')
    labelNumero.innerHTML = 'Número'
    Validnumero = true
}
})

complemento.addEventListener ('keyup', ()=> {
    if  (complemento.value.length <=0) {
        labelComplemento.setAttribute ('style', 'color: red')
        labelComplemento.innerHTML = 'Complemento *'
        Validcomplemento = false
    }

    else {
        labelComplemento.setAttribute ('style', 'color: green')
        labelComplemento.innerHTML= 'Complemento'
        Validcomplemento = true
    }

})

bairro.addEventListener ('keyup', ()=> {
    if  (bairro.value.length <=3) {
        labelBairro.setAttribute ('style', 'color: red')
        labelBairro.innerHTML = 'Bairro *'
        Validbairro = false
    }

    else {
        labelBairro.setAttribute ('style', 'color: green')
        labelBairro.innerHTML= 'Bairro'
        Validbairro = true
    }

})



function cadastrar () {
    if (Validbairro && Validcomplemento && Validnumero && Validcidade && Validlogradouro) { 
        let listaUser = JSON.parse(localStorage.getItem ('listaUser') || '[]')

        listaUser.push (
            {
                cadlogradouro: logradouro.value, 
                cadcidade: cidade.value,
                cadnumero : numero.value, 
                cadcomplemento: complemento.value,
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