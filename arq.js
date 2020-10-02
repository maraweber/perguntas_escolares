
let resC1 = document.getElementById('correta_resp1')
let resC2 = document.getElementById('correta_resp2')
let resC3 = document.getElementById('correta_resp3')
let resE1 = document.getElementById('errada_resp1')
let resE2 = document.getElementById('errada_resp2')
let resE3 = document.getElementById('errada_resp3')
let cancela = document.getElementById('teste1')
let apresent =document.getElementById('apresentacao')


let name = prompt ("QUAL É SEU NOME ?")
    if(name == '' || name == undefined){
        alert('NÃO REGISTRAMOS SEU NOME !!!')
    }

let inicio = prompt ("GOSTARIA DE INICIAR O TESTE :? \n 1. Sim  \n 2. Não")
    if( inicio == undefined || inicio == '' || inicio == 0){
            alert('[ERRO] DADOS INVÁLIDOS')
            cancela.innerHTML = ' MUITO OBRIGADO PELA VISITA !'  
    } else if (inicio == "sim" || inicio == 1){
        let perg1 = prompt('Quanto é 7 X 7 ? \n a) 24 \n b) 45 \n c) 49');
            if (perg1 == 49 || perg1 == "c" || perg1 == "C"){
                resC1.innerHTML = ' resposta 1 '
            } else {
                resE1.innerHTML = ' resposta 1 ' 
            }

        let perg2 = prompt('Quanto é 4 X 5? \n a) 15 \n b) 20 \n c) 40');
            if (perg2 == 20 || perg2 == "b" || perg1 == "B"){
                resC2.innerHTML = ' resposta 2  '
            } else {
                resE2.innerHTML = ' resposta 2 '
            }
        
        let perg3 = prompt('Quanto é 9 X 9 ? \n a) 81 \n b) 56 \n c) 46');
             if (perg3 == 81 || perg3 == "a" || perg1 == "A"){
                 resC3.innerHTML = ' resposta 3 '
             } else {
                 resE3.innerHTML = ' resposta 3 '
             }
               
    } else if (inicio == 2 || inicio == 'não'){
        cancela.innerHTML = ' MUITO OBRIGADO PELA VISITA !'  
    }

apresent.innerHTML = ' OBRIGADO ' + name.toUpperCase()    


    
    







