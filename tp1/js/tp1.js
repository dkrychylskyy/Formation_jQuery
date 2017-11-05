$(document).ready(function () {
    $('.reponse').hide();

    $('.question').css('background-color', '#9eeae1').css('position', 'relative');
    $('img').css('position', 'absolute').css('top', '30%').css('right', '10%');
    
    $('a').click(function (e) { 
        e.preventDefault();
        $('input').each(function () {
            if(($(':radio#r1:checked').val())){
                $('#reponse1').css('color', 'green');
                $('#img1').attr('src', 'images/true.png');
            } else {
                $('#reponse1').css('color', 'red');
                $('#img1').attr('src', 'images/false.png');
            }

            if(($(':radio#r4:checked').val())){
                $('#reponse2').css('color', 'green');
                $('#img2').attr('src', 'images/true.png');
            } else {
                $('#reponse2').css('color', 'red');
                $('#img2').attr('src', 'images/false.png');
            }

            if(($(':radio#r8:checked').val())){
                $('#reponse3').css('color', 'green');
                $('#img3').attr('src', 'images/true.png');
            } else {
                $('#reponse3').css('color', 'red');
                $('#img3').attr('src', 'images/false.png');
            }
        });
        $('.reponse').fadeIn();
    });
});