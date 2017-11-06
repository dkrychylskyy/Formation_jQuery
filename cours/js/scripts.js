$(function () {
    $('tr:even').css('background','yellow');
    $('td').css('width','200px');
    $('td').css('text-align','center');
    $('#affiche').click(function() {
      $('tr:even').show('slow');
    } ); 
    $('#cache').click(function() {
      $('tr:even').hide(1000);
    });
})