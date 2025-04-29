//1
document.getElementById("container").innerHTML = "Hello World"

//2
const para = document.createElement('p');
para.innerText = 'Hello World';
container.appendChild(para);

//3
container.innerHTML += '<h1>Hello World</h1>';

//4
const styledText = document.createElement('p');
styledText.innerText = 'Hello World';
styledText.classList.add('style1');
container.appendChild(styledText);

//5
const colorText = document.createElement('span');
colorText.innerText = 'Hello World';
colorText.classList.add('style2');
container.appendChild(colorText);

//6
const rotatedText = document.createElement('div');
rotatedText.innerText = 'Hello World';
rotatedText.classList.add('rotated');
container.appendChild(rotatedText);

//7
const circle = document.createElement('div');
circle.classList.add('circle');
circle.innerText = 'Hello World';
container.appendChild(circle);

//8
const button = document.createElement('button');
button.innerText = 'Hello World';
container.appendChild(button);

//9
const animatedText = document.createElement('p');
animatedText.innerText = 'Hello World';
animatedText.style.transition = 'opacity 2s';
animatedText.style.opacity = '0';
container.appendChild(animatedText);
setTimeout(() => animatedText.style.opacity = '1', 1000);

//10
const reversedText = document.createElement('p');
reversedText.innerText = 'Hello World'.split('').reverse().join('');
container.appendChild(reversedText);


