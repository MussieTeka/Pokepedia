export const counter = document.createElement('div');
counter.classList.add('counter');

export const itemCounter = document.createElement('p');
itemCounter.classList.add('item-counter');

counter.appendChild(itemCounter);

export const createItemCounter = () => {
  const totalItems = document.querySelectorAll('.pokemon-card').length;
  if (totalItems === 0) {
    itemCounter.textContent = 'No items to show';
  } else {
    itemCounter.textContent = `Showing ${totalItems} items`;
  }
};
