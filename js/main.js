// INCLUINDO A LISTA
$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const novaTarefa = $('#nome-tarefa').val();
        const tarefa = $('<li></li>');
        $(tarefa).html(novaTarefa);
        $(tarefa).appendTo('ul');
        $('#nome-tarefa').val('');

        $('li').click(function(){
            $(this).css("text-decoration","line-through")
        })

        $('#limpa-lista').click(function() {
            $('ul').empty()
        });
    })
})