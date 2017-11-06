$(function () {
    $('img').first().fadeOut(2000, function suivante() {
        $(this).next('img').fadeOut(2000,suivante);
    });
})