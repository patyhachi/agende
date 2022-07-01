let labelservicos = document.querySelector ('#labelservicos')
let servicos = document.querySelector ('#servicos')
validservicos =false

let labeldescricao = document.querySelector ('#labeldescricao')
let descricao =document.querySelector ('#descricao')
validdescricao=false




servicos.addEventListener ('keyup', ()=> {
    if(servicos.value.length <=4){
        labelservicos.setAttribute ('style', 'color: red')
        labelservicos.innerHTML = 'Que serviços você oferece? *' 
        validservicos =false    
        
    }
else  {
    labelservicos.setAttribute ('style', 'color: green')
    labelservicos.innerHTML = 'Que serviços você oferece?'
    validservicos =true
    
}
})


descricao.addEventListener ('keyup', ()=> {
    if(descricao.value.length <=10){
        labeldescricao.setAttribute ('style', 'color: red')
        labeldescricao.innerHTML = 'Breve descrição *' 
        validdescricao=false    
        
    }
else  {
    labeldescricao.setAttribute ('style', 'color: green')
    labeldescricao.innerHTML = 'Breve descrição'
    validdescricao=true
    
}
})


 


function proximo () {
    if ( validservicos && validdescricao) { 
        
        window.location.href = '../cadastro%20do%20parceiro_horarios/cdp_horarios.html'

    }

    else {
        alert ('Preencha todos os campos')
    }
} 