let heroi = "Afonso";
let nivel = 5.300; 
let resultado = [];

    if (nivel <= 1.000) {
    resultado ='Ferro'
    }

    else if  (nivel > 1.001 && nivel <= 2.000) {
    resultado ='Bronze'
    }

    else if (nivel > 2.001 && nivel <= 5.000) {
    resultado ='Prata'
    }

    else if (nivel > 5.001 && nivel <= 7.000) {
    resultado ='Ouro'
    }

    else if (nivel > 7.001 && nivel <= 8.000) {
    resultado ='Platina'
    }

    else if (nivel > 8.001 && nivel <= 9.000) {
    resultado ='Ascendente'
    }

    else if (nivel > 9.001 && nivel <= 10.000){
    resultado ='Imortal'
    }

    else 
    resultado ='Radiante'
     

console.log("O Herói de nome " + heroi + " está no nível " + resultado)
