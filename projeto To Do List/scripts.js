const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []



function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostarTarefas()
}

function mostarTarefas(){

    let novaLi = ''

    minhaListaDeItens.forEach( (item, posicao) =>{
        novaLi = novaLi + ` 
        <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check" onclick="concluirTarefa(${posicao})">
        <p class="frase-task"> ${item.tarefa} </p>
        <img src="./img/trash.png" alt="lixeira" onclick="deletarItem(${posicao})">
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostarTarefas()
}

function deletarItem(posicao){
     minhaListaDeItens.splice(posicao, 1)

     mostarTarefas()

}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')


    if(tarefasDoLocalStorage){
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)