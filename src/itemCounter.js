import './style.css';

import { pokemonData } from './script.js';

// Items counter
export const counter = document.createElement('div');
counter.classList.add('counter');

const itemcounter = document.createElement('p');
itemcounter.classList.add('item-counter');

counter.appendChild(itemcounter);

export const createCounter = () => {
  let itemCount = 0;
  pokemonData.forEach(() => {
    itemCount += 1;
  });

  itemcounter.textContent = `Poké Count: ${itemCount}`;
};
