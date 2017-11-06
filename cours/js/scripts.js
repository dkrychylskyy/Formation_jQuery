$(function () {
    $('tr:even').css('background','yellow');
    $('td').css('width','200px');
    $('td').css('text-align','center');

    $('#affiche').click(function () { 
        $('tr').first().fadeIn('slow', function showNextOne(){
            $(this).next('tr').fadeIn('slow', showNextOne);
        })
    });

    $('#cache').click(function () {  
        $('tr').first().fadeOut('slow', function hideNextOne() {
            $(this).next('tr').fadeOut('slow', hideNextOne);
        })
    })
})