const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const valueElement = document.getElementById('value');
    const descriptionElement = document.getElementById('description');
    const infosElement = document.getElementById('infos');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let description = '';

    infosElement.classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Você está abaixo do peso.';
    } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Você está no peso ideal.';
    } else if (bmi >= 25 && bmi < 30) {
        description = 'Você está com sobrepeso.';
    } else if (bmi >= 30 && bmi < 35) {
        description = 'Cuidado! Obesidade moderada.';
    } else if (bmi >= 35 && bmi < 40) {
        description = 'Cuidado! Obesidade severa.';
    } else {
        description = '**OBESIDADE MÓRBIDA**';
    }

    valueElement.textContent = bmi.replace('.', ',');
    descriptionElement.textContent = description;
});
