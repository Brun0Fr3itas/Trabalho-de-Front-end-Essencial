document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault();

    const form = document.getElementById("contato");

    if(form.checkValidity()){
        form.reset();

        const mensagem = document.createElement("p");
        mensagem.style.fontWeight = "bold";
        mensagem.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    
        form.appendChild(mensagem);
    }
    else{
        form.reportValidity();
    }
});