import { createItemCounter, itemCounter } from './itemCounter.js';

describe('createItemCounter test', () => {
  test('checks for no pokemon cards', () => {
    document.body.innerHTML = '';
    createItemCounter();
    expect(itemCounter.textContent).toEqual('No items to show');
  });

  test('check for pokemon cards', () => {
    document.body.innerHTML = `
    <div class="pokemon-card"></div>
    <div class="pokemon-card"></div>`;
    createItemCounter();
    expect(itemCounter.textContent).toEqual('Showing 2 items');
  });
});
