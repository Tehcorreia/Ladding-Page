function scrollContato() {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
}
const form = document.getElementById("meu-formulario");
const status = document.getElementById("status-envio");

form.addEventListener("submit", async function(event) {
    event.preventDefault(); // Impede o recarregamento da página
    
    const dados = new FormData(event.target);
    
    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: dados,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.innerHTML = "✅ Sucesso! Seus dados foram enviados.";
            status.style.display = "block";
            status.style.color = "green";
            form.reset();
            
            // Chama sua função anterior para somar um lead no gráfico!
            adicionarDados('lead'); 
            
        } else {
            status.innerHTML = "❌ Ops! Houve um erro no envio.";
            status.style.display = "block";
            status.style.color = "red";
        }
    } catch (error) {
        status.innerHTML = "❌ Erro de conexão.";
        status.style.display = "block";
    }
});
