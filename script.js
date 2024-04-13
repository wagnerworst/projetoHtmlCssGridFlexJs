function somarDoisNumeros(){
    let valorUm = parseInt(document.getElementById("box_Soma_Interacao_Numero1").value);
    let valorDois = parseInt(document.getElementById("box_Soma_Interacao_Numero2").value);
    let textoResultado = document.getElementsByClassName("boxSoma_Resultado_Resolvido")[0];
    console.log(textoResultado)
    textoResultado.innerText = valorUm+valorDois
}

async function buscarPokemon(){
    let idPokemon = parseInt(document.getElementById("boxPokemon_interacao_input").value);
    let nomePokemon = document.getElementsByClassName("boxPokemon_Resultado_nome")[0];
    let imagemPokemon = document.getElementsByClassName("boxPokemon_Resultado_imagem")[0];
    let url = "https://pokeapi.co/api/v2/pokemon/" + idPokemon;
    
    let response = await fetch (url);
    let pokemon = await response.json();

    nomePokemon.innerText = "Nome: " + pokemon.name.toUpperCase();
    imagemPokemon.src = pokemon.sprites.front_default;
}

async function postApiContato(){
    url = "https://api-aula.up.railway.app/generica";
    nomeFomulario = document.getElementById("formulario_Nome").value
    sobrenomeFormulario = document.getElementById("formulario_Sobrenome").value
    emailFormulario = document.getElementById("formulario_Email").value
    mensagemFormulario = document.getElementById("formulario_Mensagem").value
    spanAcaoBotaoEnviar = document.getElementsByClassName("spanAcaoBotaoEnviar")[0]

    if(!nomeFomulario || !sobrenomeFormulario || !emailFormulario || !mensagemFormulario)    
    {
        spanAcaoBotaoEnviar.style.color = "red";
        spanAcaoBotaoEnviar.innerText = "Preencha todos os campos do fórmulario!"
    }
    else
    {
        body = {
            "nome" : nomeFomulario,
            "sobrenome" : sobrenomeFormulario,
            "email" : emailFormulario,
            "mensagem" : mensagemFormulario
        }

        let response = await fetch(url,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-type": "application/json" }
            }
        )

        spanAcaoBotaoEnviar.style.color = "green";
        spanAcaoBotaoEnviar.innerText = "Formulário enviado com sucesso para a API."
    }
}