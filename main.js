const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
let linhas = '';
const notaMinima = parseFloat(prompt('Para aprovar ou reprovar, digite a nota mínima p/ media: '))

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    atualizaTabela();
    atualizaMediaFinal();

});

//Esta função tem apenas o objetivo de adiocionar uma linha nova por vez da célula Atividades da tabela e vai se armazenada na variavel "let linhas" que está no escopo geral do codigo.
function adicionarlinha() { 

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`);
    } else {
        atividades.push(inputNomeAtividade.value); // essa linha está amarrada c/ array "const atividades" fazendo push dentro, ou seja, valores que foram capturados pelo document.getElementById('nome-atividade') e armazenados dentro da "const inputNomeAtividade "
        notas.push(parseFloat(notaAtividade.value)); // essa linha está amarrada c/ array "const notas" fazendo push dentro, ou seja, valores que foram capturados pelo document.getElementById('nota-atividade') e armazenados dentro da "const notaAtividade ". Usado o parseFloat p/ mudar interpretação do JS de tipo string p/ number e aceitar também como decimal o valor
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;  
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
        
    }

    inputNomeAtividade.value = '';
    notaAtividade.value = '';
}

//Esta função atualiza os dados da tabela. Significa que manterá os dados que forem lançados
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

//Esta função retorna a média final de acordo com a função "calculaMediaFinal() e joga dentro do html
function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    // externa para dentro do html
    document.getElementById('media-final-valor').innerHTML = mediaFinal;    
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}

//Esta função é p/ calcular a soma de todas as notas que forem inseridas na tabela
function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas = somaDasNotas + notas[i];
    }

    return somaDasNotas / notas.length;

    console.log(media)

}
