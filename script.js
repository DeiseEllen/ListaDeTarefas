// script.js (Corrigido)
let botaoAdd = document.getElementById('botao');
let Input = document.getElementById('input-tarefa');
let listaTarefas = document.getElementById('tarefas');

botaoAdd.addEventListener('click', function (e) {

    if (Input.value != '') {
        let tarefa = document.createElement('p');
        listaTarefas.appendChild(tarefa);
        tarefa.innerText = '* ' + Input.value;
        Input.value = '';


        let marcado = false;

        tarefa.addEventListener('click', function () {
            if (marcado == false) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            } else {
                tarefa.style.textDecoration = 'none';
                marcado = false;
            }
        });

        tarefa.addEventListener('dblclick', function (e) {
            tarefa.remove();
        });
        /* style.css (ADICIONAL) */
        #tarefas p {
            color: white; /* Já definido no body, mas é bom garantir */
            padding: 5px 0;
            word - wrap: break-word; /* Garante que tarefas longas quebrem a linha */
        }
    }
});