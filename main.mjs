import * as handle from './handle.mjs';
import * as helper from './helper.mjs';
// import { exApiKey, exApiKey2 } from './assets/rest/rest.mjs'


























window.addEventListener('load', () => {
  helper.createStars();
  
  setTimeout(() => {
    helper.askForName().then(name => {
      // You can use the name here if needed
    });
  }, 3500);
});
