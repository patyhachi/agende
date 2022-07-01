let labelhorarios = document.querySelector ('#labelhorarios')
let horarios = document.querySelector ('#horarios')
validhorarios =false

let labelpausa = document.querySelector ('#labelpausa')
let pausa =document.querySelector ('#pausa')




horarios.addEventListener ('keyup', ()=> {
    if(horarios.value.length <=3){
        labelhorarios.setAttribute ('style', 'color: red')
        labelhorarios.innerHTML = 'Quais são seus horários? Ex: "08:00" -> "09:00" *' 
        validhorarios =false    
        
    }
else  {
    labelhorarios.setAttribute ('style', 'color: green')
    labelhorarios.innerHTML = 'Quais são seus horários?'
    validhorarios =true
    
}
})


pausa.addEventListener ('keyup', ()=> {
    if(pausa.value.length <=3){
        labelpausa.setAttribute ('style', 'color: red')
        labelpausa.innerHTML = 'Qual é o seu horário de pausa? Ex: "10:00" -> "11:00"  *' 
         
        
    }
else  {
    labelpausa.setAttribute ('style', 'color: green')
    labelpausa.innerHTML = 'Qual é o seu horário de pausa?'
    
    
}
})






function proximo () {
    if ( validhorarios) { 
        
        window.location.href = '../cadastrodoParceiro/index.html'

    }

    else {
        alert ('Preencha todos os campos obrigatórios')
    }
} 