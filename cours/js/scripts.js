$(function () {
    // Première syntaxe
    
    // $('sel').animate({ prop1: val1, prop2: val2, prop3: val3, etc. }, durée, modèle, function() {
        //Une ou plusieurs instructions
    //   });
    // sel est un sélecteur jQuery.
//         prop1, prop2 et prop3 sont des propriétés CSS et val1, val2 et val3 les valeurs associées. Une valeur numérique sera interprétée comme un nombre de pixels. Une valeur du type « +=50 » demandera d'ajouter progressivement 50 pixels à la propriété. Inversement, la valeur « -=50 » demandera de soustraire progressivement 50 pixels à la propriété. Vous pouvez également utiliser les chaînes show, hide et toggle pour respectivement afficher, dissimuler et inverser la propriété.
//         durée est la durée de l'animation (entier en millisecondes ou chaîne fast, normal ou slow).
//         modèle est le modèle de progression de l'animation (swing, linear ou un modèle issu d'un plugin).
//         function() contient une ou plusieurs instructions qui seront exécutées lorsque l'animation sera terminée.

// Deuxième syntaxe
//  $('sel').animate({ prop1: val1, prop2: val2, prop3: val3, etc. }, {options});
// options - est un objet qui peut contenir une ou plusieurs des propriétés suivantes :
//     duration : durée de l'animation (entier en millisecondes ou chaîne fast, normal ou slow) ;
//     easing : modèle de progression de l'animation (swing, linear ou un modèle issu d'un plugin) ;
//     complete : fonction appelée lorsque l'animation est terminée ;
//     step : fonction appelée à chaque étape de l'animation ;
//     queue : valeur booléenne qui indique si l'animation doit (true) ou ne doit pas (false) être placée dans une file d'attente réservée aux animations. Si la valeur false est attribuée à cette propriété, l'animation démarre immédiatement. Dans le cas contraire, elle est en attente de déclenchement.
//     specialEasing : un ou plusieurs couples propriétés CSS/modèle de progression.

})