const form = document.getElementById('form-numeros');
let linhas = ` `;
const contatos = []
const numeros = []

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adcionaLinhas();
    atualizarTabela();

});

function adcionaLinhas(){
    const imputNomeDosContatos = document.getElementById('pessoas');
    const imputNumeros = document.getElementById('numero');

    if(contatos.includes(imputNomeDosContatos.value)) {
        alert(`O contato ${imputNomeDosContatos.value} já foi inserido`);
        } else{
            if(numeros.includes(imputNumeros.value)) {
                alert(`O número ${imputNumeros.value} já foi inserido`);
                } else{
                    contatos.push(imputNomeDosContatos.value);
                    numeros.push(imputNumeros.value);

                    let linha = '<tr>';
                    linha += `<td>${imputNomeDosContatos.value}</td>`;
                    linha += `<td>${imputNumeros.value}</td>`;
                    linha += `</tr>`;

                    linhas += linha;
                }
            
        }
    imputNomeDosContatos.value = '';
    imputNumeros.value = '';
}
    

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}