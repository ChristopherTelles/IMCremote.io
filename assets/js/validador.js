
function validarNome(nome) {
    // Verifica se o campo nome não está vazio
    return nome.trim() !== '';
}

function validarPeso(peso) {
    // Verifica se o peso é um número maior que zero
    return !isNaN(peso) && parseFloat(peso) > 0;
}

function validarAltura(altura) {
    // Verifica se a altura é um número maior que zero
    return !isNaN(altura.replace(',', '.')) && parseFloat(altura.replace(',', '.')) > 0;
}



// removem todos os caracteres que não são números e inserem uma vírgula após o primeiro
// número, mas apenas se houver mais de um número no campo.
function formatarAltura(campo) {
    let valor = campo.value.replace(/[^0-9]/g, ''); // Remove todos os caracteres que não são números
    if (valor.length > 1) {
        valor = valor.slice(0, 1) + ',' + valor.slice(1);
    }
    campo.value = valor;
}
