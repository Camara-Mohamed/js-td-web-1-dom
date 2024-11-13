// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/

const getInfosLiens = function () {
    const liens = document.querySelectorAll("a");

    console.log("Nombre total de liens : " + liens.length);

    if (liens.length > 0) {
        console.log("Cible du premier lien : " + liens[0].href);
        console.log("Cible du dernier lien : " + liens[liens.length - 1].href);
    }

}

const possede = function (id, classe) {
    const element = document.getElementById(id);

    if (element) {
        return element.classList.contains(classe);
    } else {
        console.log("Aucun élément ne possède l'id " + id);
        return false;
    }
};

console.log(possede("saxophone", "bois"));
console.log(possede("saxophone", "cuivre"));
console.log(possede("trompette", "cuivre"));
console.log(possede("contrebasse", "cordes"));
