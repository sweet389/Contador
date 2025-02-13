// Recupera o valor salvo no localStorage ou define como 0 se não existir
let contador = localStorage.getItem("contador") ? parseInt(localStorage.getItem("contador")) : 0;

var diasrest = 181;
var semanasrest = 31;

// Atualiza o contador na página
function atualizarContadores() {
    document.getElementById("contador").innerText = contador;
    document.getElementById("DiasRestantes").innerText = (contador - diasrest) * -1;
    document.getElementById("SemanasRestantes").innerText = (((contador / 7) - semanasrest) * -1).toFixed(2);
}

atualizarContadores();

// Adiciona evento ao botão de incrementar
document.getElementById("botao").addEventListener("click", () => {
    contador++;
    localStorage.setItem("contador", contador); // Salva no localStorage
    document.getElementById("contador").innerText = contador;
    atualizarContadores();
});


document.getElementById("diminuir").addEventListener("click", () => {
    contador--;
    diasRestantes = contador;
    localStorage.setItem("contador", contador); // Salva no localStorage
    document.getElementById("contador").innerText = contador;
    atualizarContadores();
    if(contador < 0){
      contador = 0;
    }
});

document.getElementById("reset").addEventListener("click", () => {
    contador = 0;
    localStorage.setItem("contador", contador); // Salva no localStorage

    document.getElementById("contador").innerText = contador;
    document.getElementById("DiasRestantes").innerText = 181;
    document.getElementById("SemanasRestantes").innerText = 31;
    //atualizarContadores();
});
