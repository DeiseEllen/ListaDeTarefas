
let botaoAdd = document.getElementById('botao');
let input = document.getElementById('input-tarefa');
let listaTarefas = document.getElementById('tarefas');


console.log('script.js carregado com sucesso!');


botaoAdd.addEventListener('click', function () {

   
    if (input.value.trim() !== '') {

    
        let tarefa = document.createElement('p');

       
        tarefa.innerText = '* ' + input.value;

    
        listaTarefas.appendChild(tarefa);

       
        input.value = '';

    
        input.focus();


        let marcado = false;

        tarefa.addEventListener('click', function () {
            if (marcado === false) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            } else {
                tarefa.style.textDecoration = 'none';
                marcado = false;
            }
        });

        tarefa.addEventListener('dblclick', function () {
            tarefa.remove();
        });
    }
});

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        botaoAdd.click();
    }
});