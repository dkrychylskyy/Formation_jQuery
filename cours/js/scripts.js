$(function () {
    function traitement() {
        alert('Image cliquée');
    }
    $('#activer').on('click', function () {
        $('#image').click(traitement);
    });
    $('#desactiver').on('click', function () {
        $('#image').off('click', traitement);
        
        
    });
})