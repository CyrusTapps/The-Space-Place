import * as handle from './handle.mjs';
import * as helper from './helper.mjs';
import { nasaApiKey } from './assets/rest/rest.mjs'
import { initializeApp, } from './handle.mjs';

export const mainDisplay = document.getElementById('mainDisplay');
export const mainContent = document.getElementById('main-content');
export const mainContentHeader = document.getElementById('main-content-header');
export const mainContentClose = document.getElementById('main-content-close');
export const firstButton = document.getElementById('btn1');
export const secondButton = document.getElementById('btn2');
export const thirdButton = document.getElementById('btn3');
export const thirdButtonA = document.getElementById('itemA');
export const thirdButtonB = document.getElementById('itemB');
export const thirdButtonC = document.getElementById('itemC');
export const nasaImgURL = `https://api.nasa.gov/planetary/apod?count=1&api_key=${nasaApiKey}`;
let nasaIntervalId;



mainContentClose.addEventListener('click', () => {
    if (mainContent.hidden === false) {
        mainContent.remove();
        nasaImg();
    }
});



export function nasaImg() {
    const img = document.createElement('img');
    const picTitle = document.createElement('h3');

    img.classList.add('randomImage');    
    picTitle.classList.add('picTitle');

    mainDisplay.appendChild(img);
    mainDisplay.appendChild(picTitle);

    mainDisplay.style.boxShadow = 'none';                           

    fetchNasaImage();
  
    // Store the interval ID
    nasaIntervalId = setInterval(fetchNasaImage, 20000);
}

function fetchNasaImage() {
    console.log('Fetching NASA image', nasaImgURL);
    const img = document.querySelector('.randomImage');
    const picTitle = document.querySelector('.picTitle');

  fetch(nasaImgURL)
    .then(response => response.json())
    .then(data => {
      img.src = data[0].url;
      picTitle.textContent = data[0].title;
    })
    .catch(error => {
      console.error('Error fetching NASA image:', error);
      img.src = './assets/darkriver.jpg'
    });
}



firstButton.addEventListener('click', ()=> {
    stopInterval();
    mainDisplay.innerHTML =  ''
    nasaImg();
});




secondButton.addEventListener('click', () => {
  stopInterval();
  mainDisplay.innerHTML =  ''
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.solarsystemscope.com/iframe';
  iframe.classList.add('solarSystem');
  mainDisplay.appendChild(iframe);
});

thirdButtonA.addEventListener('click', () => {
    stopInterval();
    mainDisplay.innerHTML =  ''
    const iframe = document.createElement('iframe');
    iframe.src = 'https://isstracker.spaceflight.esa.int/';
    iframe.classList.add('issTracker');
    mainDisplay.appendChild(iframe);
  });

function stopInterval() {
    if (nasaIntervalId) {
        clearInterval(nasaIntervalId);
        nasaIntervalId = null; 
        console.log("Interval stopped");
    }
}



window.addEventListener('load', initializeApp);
