function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
section.innerHTML = "<p>Nenhuma informação encontrada. Você precisa digitar algo relacionado a musculação e saúde.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        console.log(dado.titulo.includes(campoPesquisa))
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações.</a>
                </div>
            
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhuma informação encontrada.<p/>"

    }
    
    section.innerHTML = resultados
}





