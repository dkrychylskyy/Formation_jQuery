$(document).ready(function () {
    // Global variable qui definit future element <div class = 'wrap'>
    var divElt;
    
    // Cocher tous elements
    function hideAll() {
        $('#activeZone').find('*').hide();
    }
    // La décoration les zones
    $('#droite').append('<hr>');
    $('<div id = "activeZone"></div>').appendTo('#droite');

    // La creation du formulaire
    var usersForm = $('<form></form>').appendTo('#gauche');
    usersForm.attr('id', 'usersForm');


    // Creation l'elements dans l'Active Zone
    function createEltsInActiveZone(params) {
        console.log(params);
        $('#activeZone').find('*').remove('*');
        var label = $('<label></label>').appendTo('#activeZone').attr('id', params[0]);
        label.text(params[3]);
        var input = $('<input></input>').appendTo('#activeZone').attr('type', 'text').attr('id', params[1]);
        var bouton = $('<button>OK</button>').appendTo('#activeZone').attr('id', params[2]);
    }

    // Les founctions de creation les elements dans formulaire id='usersForm'
    function createLabelInForm() {
        var text = 'Saisissez "Text du label"';
        var params = ['labelEltForCreateLabel', 'inputEltForCreateLabel', 'okBtnForCreateLabel', text];
         divElt = $('<div></div>').appendTo('#usersForm').addClass('wrap');
        createEltsInActiveZone(params);

        var okBtn = $('#okBtnForCreateLabel').show();
        $(okBtn).click(function (e) {
            e.preventDefault();
            var labelEltInForm = $('<label></label>').appendTo(divElt);
            labelEltInForm.addClass('label');
            labelEltInForm.text($('#inputEltForCreateLabel').val() + ' : ');
            hideAll();
            $('#labelEltForCreateLabel').text("Label á été crée ! ").show();
        });
    }
    function createInputInForm() {
        var text = 'Saisissez ID d\'un zone de saisir';
        var params = ['labelEltForCreateZoneText', 'inputEltForCreateZoneText', 'okBtnForCreateZoneText', text];

        createEltsInActiveZone(params);

        $('#okBtnForCreateZoneText').click(function (e) {
            e.preventDefault();
            // var inputEltInForm = $('<input type="text" class="text-zone"></input>').appendTo('#usersForm');
            var inputEltInForm = $('<input type="text"></input>').appendTo(divElt);
            inputEltInForm.addClass('input');
            inputEltInForm.attr('id', $('#inputEltForCreateZoneText').val());
            hideAll();
            $('#labelEltForCreateZoneText').text("L'input á été crée ! ").show();
        })
    }
    function createBoutonInForm() {
        var text = 'Text du bouton';
        var params = ['labelEltForCreateBtnValider', 'inputEltForCreateBtnValider', 'okBtnForCreateLabelValider', text];

        createEltsInActiveZone(params);
        
        var okBtn = $('#okBtnForCreateLabelValider').show();
        okBtn.click(function (e) {
            e.preventDefault();
            var btnInForm = $('<button type="submit"></button>').appendTo('#usersForm');
            btnInForm.text($('#inputEltForCreateBtnValider').val());
            btnInForm.addClass('submit');
            hideAll();
            $('#labelEltForCreateBtnValider').text('Le bouton ' +'"'+ btnInForm.text() +'"'+' a été crée').show();
            $('#createBouton').attr('disabled', 'true');
        })
    }
    // fin Les founctions de creation les elements dans formulaire id='usersForm'

    // Traitement du 'clic's' sur les boutons
    $('#createLabel').click(function () {
        createLabelInForm();
    })
    $('#createText').click(function () {
        createInputInForm();
    })
    $('#createBouton').click(function () {
        createBoutonInForm();
    })
    // fin Traitement du 'clic's' sur les boutones
});