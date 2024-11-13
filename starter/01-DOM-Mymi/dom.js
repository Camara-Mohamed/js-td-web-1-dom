/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
console.log(document.querySelector('#nav'));

/* 2. Récupérer tous les li */
console.log(document.querySelectorAll('li'));

/* 3. Cibler le 4e li */
console.log(document.querySelector('#li4'));

/* 4. Compter le nombre de li dans la page */
console.log(document.querySelectorAll('li').length);

/* 5. Cibler le premier li pair */
console.log(document.querySelector('.pair'));

/* 6. Récupérer tous les li de classe impair */
let liImpairs = document.querySelectorAll('.impair');

/* a) afficher ce qu'on obtient */
console.log(liImpairs);

/* b) afficher le 2e li de classe impair */
console.log(liImpairs[1]);

/* c) afficher chacun des li impair */
for (const liImpair of liImpairs) {
    console.log(liImpair);
}

/* d) compter le nombre de li de classe impair dans la page */
console.log(liImpairs.length);

/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
console.log(document.querySelector('#li4').previousElementSibling);

/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
console.log(document.querySelector('#li4').nextElementSibling);

/* 9. Cibler le parent du 4e li */
console.log(document.querySelector('#li4').parentElement);

/* 10. Récupérer tous les enfants de l'ul */
let ulChildren = document.querySelector('#nav').children;

/* a) afficher ce qu'on obtient */
console.log(ulChildren);

/* b) cibler le 1er enfant de l'ul */
console.log(ulChildren[0]);

/* c) cibler le dernier enfant de l'ul */
console.log(ulChildren[ulChildren.length - 1]);

/* c) cibler le 4e enfant de l'ul */
console.log(ulChildren[3]);

/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */
console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild);

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */
// console.log(document.getElementsByTagName("li")[2].childNodes[3].firstChild);

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */
console.log(document.getElementsByTagName("li")[2].firstChild.firstChild);

/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
let nodeA = document.getElementById("nav").getElementsByTagName("li")[3].firstChild;
console.log(nodeA.nodeName, nodeA.nodeType, nodeA.nodeValue);

/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */
let nodeB = document.getElementById("nav").getElementsByTagName("a")[2].firstChild;
console.log(nodeB.nodeName, nodeB.nodeType, nodeB.nodeValue);

/* 13. Changer le texte "Photos" en "Visuals" */
document.querySelector('#li4 a').textContent = 'Visuals';

/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */
document.querySelector('#li4 a').setAttribute('href', 'photos.php');

/* b) Lui ajouter un attribut title avec la valeur "voir mes photos" */
document.querySelector('#li4 a').setAttribute('title', 'voir mes photos');

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/
document.querySelector('#nav').removeChild(document.querySelectorAll('#nav li')[document.querySelectorAll('#nav li').length - 1]);

/* 16. Ajouter un li à la fin de la liste */
let nouveauLien = document.createElement('li');
nouveauLien.textContent = 'Plus';
document.querySelector('#nav').appendChild(nouveauLien);

/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */
let lienMenu = document.createElement('li');
let lienBibliotheque = document.createElement('a');
lienBibliotheque.href = 'biblio.html';
lienBibliotheque.textContent = 'Bibliographie';
lienBibliotheque.title = 'consulter ma bibliographie';
lienMenu.appendChild(lienBibliotheque);
document.querySelector('#nav').insertBefore(lienMenu, document.querySelector('#li4'));

/* 18. Modifier le lien "Photos"
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */
let nouveauLienPhoto = document.querySelector('#li4 a');
nouveauLienPhoto.textContent = 'Visuals';
nouveauLienPhoto.title = 'voir la galerie';
nouveauLienPhoto.href = 'visuals.html';

/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */
let lienPhoto = document.querySelector('#li4');
let nouveauLienDupliquer = lienPhoto.cloneNode(true);
nouveauLienDupliquer.querySelector('a').textContent = 'Visuals';
nouveauLienDupliquer.querySelector('a').title = 'voir la galerie';
nouveauLienDupliquer.querySelector('a').href = 'visuals.html';
document.querySelector('#nav').insertBefore(nouveauLienDupliquer, lienPhoto.nextSibling);

/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/
let dernierLien = document.querySelector('#nav').lastElementChild;
dernierLien.innerHTML = 'Contact : monmail@gmail.com';