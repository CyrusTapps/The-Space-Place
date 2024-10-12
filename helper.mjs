import * as main from './main.mjs';


//Create stars for the background//
export function createStars() {
  const body = document.body;
  const numberOfStars = 200; // Adjust this number as needed

  // Create moon
  const moon = document.createElement('div');
  moon.className = 'moon';
  body.appendChild(moon);

  // Create light effect
  const lightEffect = document.createElement('div');
  lightEffect.className = 'light-effect';
  body.appendChild(lightEffect);

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Random size
    const size = Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random twinkle duration
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
    };
  });
}

export async function askForName() {
  const firstName = await customPrompt("Welcome to 'The Space Place'! May I know your first name?");
  console.log(`Hello, ${firstName}!`);
  return firstName;
}

// ... any other helper functions ...
