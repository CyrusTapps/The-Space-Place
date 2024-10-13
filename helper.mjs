import * as main from './main.mjs';


let globalName = ""


export function createStars() {
  const body = document.body;
  const numberOfStars = 200;


  const moon = document.createElement('div');
  moon.className = 'moon';
  body.appendChild(moon);


  const lightEffect = document.createElement('div');
  lightEffect.className = 'light-effect';
  body.appendChild(lightEffect);

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
   
    const size = Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    

    star.style.animationDuration = `${2 + Math.random() * 1.5}s`;

    body.appendChild(star);
  }
}

export function customPrompt(message) {
  return new Promise((resolve) => {
    const promptElement = document.getElementById('custom-prompt');
    const messageElement = document.getElementById('prompt-message');
    const inputElement = document.getElementById('prompt-input');
    const submitButton = document.getElementById('prompt-submit');

    messageElement.textContent = message;
    promptElement.style.display = 'block';

    submitButton.onclick = () => {
      const value = inputElement.value;
      promptElement.style.display = 'none';
      resolve(value);
      main.mainContent.hidden = false;
      main.mainContentHeader.textContent = `Welcome to the Space Place ${value}!`;
    };
  });
}

export async function askForName() {
    if (globalName === '') {
      globalName = await customPrompt("Welcome to 'The Space Place'! May I know your first name?");
    }
    
    console.log(`Hello, ${globalName}!`);
    return globalName;
  }


