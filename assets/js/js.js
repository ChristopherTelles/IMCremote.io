function MostrarBot(){
    // Capturar os valores dos campos de entrada
    
    let nome = document.getElementById('nomeInput').querySelector('input').value;
    let peso = document.getElementById('pesoInput').querySelector('input').value;
    let altura = document.getElementById('alturaInput').querySelector('input').value;
    let resultadoDiv = document.getElementById('resultadoId');

    // Definindo a cor do texto como vermelho para mensagens de erro
    resultadoDiv.style.color = 'red';

        // Validação dos campos
        if (!validarNome(nome)) {
            resultadoDiv.textContent = "Por favor, digite um nome válido.";
        return;
        }
    
        if (!validarPeso(peso)) {
            resultadoDiv.textContent = "Por favor, digite um peso válido (maior que zero).";
            return;
        }
    
        if (!validarAltura(altura)) {
            resultadoDiv.textContent = "Por favor, digite uma altura válida (maior que zero).";
        return;
        }
    
        // Convertendo para números para realizar o cálculo do IMC
        peso = parseFloat(peso);
        altura = parseFloat(altura.replace(',', '.'));
    
        if (peso <= 0 || altura <= 0) {
            resultadoDiv.textContent = "Peso e altura devem ser maiores que zero.";
            return;
        }

        // Calcular peso e altura
        let imc = peso / (altura * altura);

      // Determinar a categoria de acordo com o IMC
      let categoria;
      if (imc < 18.5) {
          categoria = 'abaixo do peso';
      } else if (imc >= 18.5 && imc <= 24.9) {
          categoria = 'com o peso normal "PARABÉNS"';
      } else if (imc >= 25 && imc <= 29.9) {
          categoria = 'com sobrepeso';
      } else if (imc >= 30 && imc <= 34.9) {
          categoria = 'com obesidade grau I';
      } else if (imc >= 35 && imc <= 39.9) {
          categoria = 'com obesidade grau II';
      } else {
          categoria = 'com obesidade grau III';
      }

    resultadoDiv.style.color = 'black'; // Definindo a cor do texto como preto para o resultado

    // Exibir o resultado na div de resultado
    resultadoDiv.textContent = `${nome}, seu IMC é ${imc.toFixed(1)} e você está ${categoria}.`;
}



// IMC abaixo de 18,5: abaixo do peso.
// IMC entre 18,5 e 24,9: peso normal.
// IMC entre 25 e 29,9: sobrepeso.
// IMC entre 30 e 34,9: obesidade grau I.
// IMC entre 35 e 39,9: obesidade grau II. 
// IMC acima de 40: obesidade grau III. 




