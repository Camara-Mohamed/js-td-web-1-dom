// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 2 : « Rêve » : compter les éléments.
 Déclarez la fonction compterElements afin que le reste du programme fonctionne correctement.
*/

// Insérez votre code ici
const compterElements = function (selecteur) {
    return document.querySelectorAll(selecteur).length;
}


console.log(compterElements("p"));
console.log(compterElements(".adjectif"));
console.log(compterElements("p .adjectif"));
console.log(compterElements("p > .adjectif"));