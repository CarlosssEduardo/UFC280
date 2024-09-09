function pesquisar(){  
let lutadores = document.getElementById("resultados-lutadores");
console.log(lutadores);

let pesquisaLutadores = document.getElementById("pesquisa-lutadores").value
console.log(pesquisaLutadores);
  if (pesquisaLutadores == "") {
    lutadores.innerHTML = "<p class='mensagem-erro-0'>Campo Lutadores está vazio, nada sera encontrado, digite um nome de um lutador do ufc 280</p>";
    return;
  
  }
  if (!pesquisaLutadores){
    lutadores.innerHTML = "<p class='mensagem-erro-1'>Nehum resultado foi encotrado</p>";
  }

pesquisaLutadores = pesquisaLutadores.toLowerCase()


let resultado ="";
let titulo = "";
let descricao = "";

  for (let lista of dados) {

titulo = lista.titulo.toLowerCase()
descricao = lista.descricao.toLowerCase()

  if (titulo.includes(pesquisaLutadores) || descricao.includes(pesquisaLutadores)){
    resultado += `
      <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${lista.titulo}</a>
          </h2>
          <p class="descricao-meta">${lista.descricao}</p>
        <a href=${lista.link}target="_blank">Mais informações                </a><br>
        <a href=${lista.video}target="_blank">Finalizações(edit)</a>
        </div>
    `;}

}
  if (!resultado){
    resultado = "<p class='mensagem-erro-1'>Nenhum resultado foi encontrado</p>"
  }
lutadores.innerHTML = resultado
}