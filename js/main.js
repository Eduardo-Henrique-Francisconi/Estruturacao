// scripts.js

// Função para atualizar o background com a cor escolhida
function changeBackgroundColor() {
    const colorInput = document.getElementById("color-input");
    const body = document.body;

    body.style.backgroundColor = colorInput.value;
}

// Event listener para chamar a função quando o valor do input mudar
document.getElementById("color-input").addEventListener("input", changeBackgroundColor);
