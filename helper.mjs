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

