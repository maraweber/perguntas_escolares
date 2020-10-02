
let resC1G = document.getElementById('correta_resp1G')
let resC2G = document.getElementById('correta_resp2G')
let resC3G = document.getElementById('correta_resp3G')
let resE1G = document.getElementById('errada_resp1G')
let resE2G = document.getElementById('errada_resp2G')
let resE3G = document.getElementById('errada_resp3G')
let resC1H = document.getElementById('correta_resp1H')
let resC2H = document.getElementById('correta_resp2H')
let resC3H = document.getElementById('correta_resp3H')
let resE1H = document.getElementById('errada_resp1H')
let resE2H = document.getElementById('errada_resp2H')
let resC1M = document.getElementById('correta_resp1M')
let resC2M = document.getElementById('correta_resp2M')
let resC3M = document.getElementById('correta_resp3M')
let resE1M = document.getElementById('errada_resp1M')
let resE2M = document.getElementById('errada_resp2M')
let resE3M = document.getElementById('errada_resp3M')

let canc = document.getElementById('teste2')


let escolha = prompt('QUAL TESTE GOSTARIA DE FAZER : \n 1. Geografia \n 2. História \n 3. Matemática (novamente) \n 4. Cancelar')  
    if(escolha == undefined || escolha == ''){
                alert('[ERRO] DADOS INVÁLIDOS')
                canc.innerHTML =  ` VOLTE PARA PÁGINA INICIAL E TENTE NOVAMENTE !`
                
    } else if (escolha == 1 || escolha == "geografia"){
        let perg1G = prompt('Qual é a capital do Brasil ? \n a) Brasilia \n b) São Paulo \n c) Salvador');
            if(perg1G == "a" || perg1G == "Brasilia" || perg1G == "A"){
                resC1G.innerHTML = ' resposta de geografia 1'
            } else {
                resE1G.innerHTML = 'resposta de geografia 1'
            }           

        let perg2G = prompt('Qual é a capital do Rio Grande do Sul ? \n a) Cuiabá \n b) Porto Alegre \n c) Manaus')
             if(perg2G == 'b' || perg2G == 'Porto Alegra' || perg2G == 'B'){
                 resC2G.innerHTML =' resposta de geografia 2'
             } else {
                 resE2G.innerHTML =' resposta de geografia 2'
             }  
        
        let perg3G = prompt('Qual é a capital de Espírito Santo ? \n a) Paraíba \n b) Belo Horizonte \n c) Vitória')
             if(perg3G == 'c' || perg3G == 'Vitória' || perg3G == 'C'){
                 resC3G.innerHTML = 'resposta de geografia 3'
             } else {
                 resE3G.innerHTML = 'resposta de geografia 3'
             } 
      
        
    } else if (escolha == 2 || escolha == 'história'){
        let perg1H = prompt('Quem descobriu o Brasil? \n a) Cristovão Colombo \n b) Pedro Alvares Cabral \n c) Matosso Ramos');
           if(perg1H == 'b' || perg1H == 'Pedro Alvares Cabral' || perg1H == 'B'){
               resC1H.innerHTML =' resposta de história 1'
           } else {
               resE1H.innerHTML =' resposta de história 1'
           }
        let perg2H = prompt('Qual é o dia da indenpendência do Brasil ? \n a) 15 de Novembro \n b) 22 de Abril \n c) 07 de Setembro')
           if(perg2H == 'c' || perg2H == '07 de Setembro' || perg2H == 'C'){
               resC2H.innerHTML = 'resposta de história 2'
           } else {
               resE2H.innerHTML = 'resposta de história 2'
           }
        let perg3H = prompt('Qual é o dia do fim da escravidão no Brasil ? \n a) 13 de Maio 1988 \n b) 24 de Agosto 1889 \n c) 13 de maio 1989')
           if(perg3H == 'a' || perg3H == '13 de Maio 1988' || perg3H== 'A'){
               resC3H.innerHTML = 'resposta de história 3'
           } else {
               resE3H.innerHTML = 'resposta de história 3'
           }

    } else if (escolha == 3 || escolha == 'matemática'){
        let perg1M = prompt('Quanto é 7 X 7 ? \n a) 24 \n b) 45 \n c) 49')
            if (perg1M == 49 || perg1M == "c" || perg1M == "C"){
                resC1M.innerHTML = ' resposta de matemática 1 '
            } else {
                resE1M.innerHTML = ' resposta de matemática 1 ' 
            }

        let perg2M = prompt('Quanto é 4 X 5? \n a) 15 \n b) 20 \n c) 40');
            if (perg2M == 20 || perg2M == "b" || perg2M == "B"){
                resC2M.innerHTML = ' resposta de matemática 2  '
            } else {
                resE2M.innerHTML = ' resposta de matemática 2 '
            }
        
        let perg3M = prompt('Quanto é 9 X 9 ? \n a) 81 \n b) 56 \n c) 46');
            if (perg3M == 81 || perg3M == "a" || perg3M == "A"){
                resC3M.innerHTML = ' resposta de matemática 3 '
            } else {
                resE3M.innerHTML = ' resposta de matemática 3 '
            }

    } else if ( escolha == 4 || escolha == 'cancelar'){
        canc.innerHTML =  ` MUITO OBRIGADO PELA VISITA !`
    }