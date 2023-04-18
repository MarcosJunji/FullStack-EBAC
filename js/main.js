$('document').ready(function(){
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    });

    $('#cep').mask('00000-000', {
        placeholder: 'xxxxx-xxx'
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    });

    
})