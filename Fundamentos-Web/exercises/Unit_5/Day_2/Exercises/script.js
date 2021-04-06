// O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .
// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let tituloH1 = document.createElement('h1');
tituloH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.querySelector('body').appendChild(tituloH1);

// 2. Adicione a tag div com a classe main-content como filho da tag body ;

let createDiv = document.createElement('div');
createDiv.className = 'main-content';
document.querySelector('body').appendChild(createDiv);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

let createDiv2 = document.createElement('div');
createDiv2.className = 'center-content';
document.querySelector('.main-content').appendChild(createDiv2);

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

let createParagraph = document.createElement('p');
createParagraph.innerHTML = 'Aprendendo a trabalhar com elementos <strong>HTML</strong> com o <strong>JavaScript</strong>.';
document.querySelector('.center-content').appendChild(createParagraph);

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

let divLeftContent = document.createElement('div')
divLeftContent.className = 'left-content';
document.querySelector('.main-content').appendChild(divLeftContent);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

let divRightContent = document.createElement('div');
divRightContent.className = 'right-content';
document.querySelector('.main-content').appendChild(divRightContent);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

let createImage = document.createElement('img');
createImage.src = 'https://picsum.photos/200';
createImage.className = 'small-image';
document.querySelector('.left-content').appendChild(createImage);