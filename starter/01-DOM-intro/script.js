console.log(document.head);
console.log(document.body);

console.log(document.body.childNodes);
for (const childNode of document.body.childNodes) {
    if (Node.ELEMENT_NODE === childNode.nodeType)
        console.log(childNode.nodeType);
}

console.log(document.getElementById('h1'));
console.log(document.getElementsByClassName('h1'));
console.log(document.getElementsByTagName('h1'));

console.log(document.querySelector('.test'));
console.log(document.querySelectorAll('.test'));

console.log(document.querySelector('#test').id);
console.log(document.querySelector('#test').textContent);
console.log(document.querySelector('#test').style);

const h1Element = document.querySelector('#test');
console.log(h1Element);

h1Element.style.background = 'red';
h1Element.id = 'bouh';
h1Element.textContent = 'Mais ouuui';

console.log(document.querySelector('#bouh').id = 'bouh');
console.log(document.querySelector('#bouh').textContent = 'Mais ouiiii');
console.log(document.querySelector('#bouh').style.background = 'pink');

h1Element.className = ('bonjour test1 test2')
h1Element.classList.remove('test1');
h1Element.classList.add('test1');
h1Element.classList.toggle('test3');
alert();
h1Element.classList.toggle('test3');
