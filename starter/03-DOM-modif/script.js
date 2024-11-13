const langages = ['C++', 'Java', 'C#', 'PhP'];

const ulElement = document.querySelector('#langages');

// ulElement.innerHTML = '<li>C++</li>';

for (const langage of langages) {
    // ulElement.innerHTML += `<li>${langage}</li>`;
    ulElement.insertAdjacentHTML('afterbegin', `<li>${langage}</li>`);
}
const liElements = document.querySelectorAll('#langages li');

for (const liElement of liElements) {
    liElement.classList.add('toto');
}