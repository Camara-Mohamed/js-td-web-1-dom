// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/

window.addEventListener('load', () => {
    const contenu = document.getElementById('contenu');
    const infos = document.getElementById('infos');

    const largeur = contenu.offsetWidth;
    const hauteur = contenu.offsetHeight;

    const ul = document.createElement('ul');

    const liLargeur = document.createElement('li');
    liLargeur.textContent = `Largeur : ${largeur}px`;

    const liHauteur = document.createElement('li');
    liHauteur.textContent = `Hauteur : ${hauteur}px`;

    ul.appendChild(liLargeur);
    ul.appendChild(liHauteur);

    infos.appendChild(ul);
});
