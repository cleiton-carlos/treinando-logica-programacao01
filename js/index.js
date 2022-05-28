let quantidadeDeUsuarios = Number(prompt('quantos usuarios você deseja adicionar?'));
let tbody = document.querySelector("tbody");

let nomesUsuarios = Array();
let idadesUsuarios = Array();

for (let i = 1; i <= quantidadeDeUsuarios; i++) {
  let nomeDoUsuario = prompt('digite o nome usuario' + i);
  let idadeDoUsuario = Number(prompt('digite a idade do usuario' + i));

  nomesUsuarios.push(nomeDoUsuario);
  idadesUsuarios.push(idadeDoUsuario);
}

function exibeInformacoeUsuarios () {
  for (let quantidade = 0; quantidade < nomesUsuarios.length; quantidade++) {
    let tr = document.createElement("tr");

    let tdNome = document.createElement("td");
    let tdIdade = document.createElement("td");

    tdNome.textContent = nomesUsuarios[quantidade];
    tdIdade.textContent = idadesUsuarios[quantidade];

    tr.appendChild(tdNome);
    tr.appendChild(tdIdade);
    
    tbody.appendChild(tr);

  }
}
exibeInformacoeUsuarios();





