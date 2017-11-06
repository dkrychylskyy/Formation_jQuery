$(function () {
    $('tr:even').css('background','yellow');
    $('td').css('width','200px');
    $('td').css('text-align','center');

    $('#affiche').click(function () { 
        $('tr').first().show('slow', function showNextOne(){
            $(this).next('tr').show('slow', showNextOne);
        })
    });

    $('#cache').click(function () {  
        $('tr').first().hide('slow', function hideNextOne() {
            $(this).next('tr').hide('slow', hideNextOne);
        })
    })
})