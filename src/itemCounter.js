export const counter = document.createElement('div');
counter.classList.add('counter');

const itemcounter = document.createElement('p');
itemcounter.classList.add('item-counter');

counter.appendChild(itemcounter);

export const itemCounter = (pokemonData) => {
  const itemCount = pokemonData.length;
  itemcounter.textContent = `Poké Count: ${itemCount}`;
};
