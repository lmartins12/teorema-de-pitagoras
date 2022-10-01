var calcular = document.getElementById('calcular');

function hipotenusa () {
    let catB = document.getElementById('b').value;
    let catC = document.getElementById('c').value;
    let resultado = document.getElementById('resultado');

    if (catB !== '' && catC) {
        
        const somaDosCatetos = ((catB * catB) + (catC * catC));
        const valorHipotenusa = Math.sqrt(somaDosCatetos).toFixed(1);

        resultado.textContent = valorHipotenusa
    }
    else {
        resultado.textContent = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click', hipotenusa)


 