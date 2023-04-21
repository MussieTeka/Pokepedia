import { counter, itemCounter } from './itemCounter.js';

describe('itemCounter', () => {
  test('displays the correct Pokémon count', () => {
    const pokemonData = [
      { name: 'Bulbasaur', type: 'Grass/Poison' },
      { name: 'Charmander', type: 'Fire' },
      { name: 'Squirtle', type: 'Water' },
    ];
    itemCounter(pokemonData);
    expect(counter.textContent).toBe('Poké Count: 3');
  });
});
