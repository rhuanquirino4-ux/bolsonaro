function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;

    if (expression === "") return;

    try {
        // Realiza o cálculo matemático
        const result = eval(expression);
        display.value = result;

        // Aguarda 800ms para o usuário ver o resultado e redireciona
        setTimeout(() => {
            window.location.href = "https://youtu.be/r8j6gT1E6W4?si=lMs2PXNIfz4yPaya";
        }, 800);

    } catch (error) {
        alert("Erro na conta!");
        clearDisplay();
    }
}