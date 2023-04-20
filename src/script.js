import './style.css';

const pokemonData = [
  {
    name: 'pikachu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png',
    likes: '',
  },
  {
    name: 'charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/4.png',
    likes: '',
  },
  {
    name: 'mewtwo',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/150.png',
    likes: '',
  },
  {
    name: 'squirtle',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/7.png',
    likes: '',
  },
  {
    name: 'bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
    likes: '',
  },
  {
    name: 'charizard',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png',
    likes: '',
  },
];

const pokemonListContainer = document.querySelector('.pokemon-list');

const rowsContainer = document.createElement('div');
rowsContainer.classList.add('rows-container');

pokemonData.forEach((pokemon) => {
  const column = document.createElement('div');
  column.classList.add('column');

  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');

  const image = document.createElement('img');
  image.src = pokemon.image;
  image.alt = pokemon.name;

  const name = document.createElement('h2');
  name.textContent = pokemon.name;

  const actions = document.createElement('div');
  actions.classList.add('pokemon-actions');

  const heartIcon = document.createElement('i');
  heartIcon.classList.add('far', 'fa-heart');

  const likes = document.createElement('span');
  likes.textContent = `${pokemon.likes} likes`;

  const commentButton = document.createElement('button');
  commentButton.classList.add('comment-button');
  commentButton.textContent = 'Add Comment';

  // Append the elements to the Pokemon card
  actions.append(heartIcon, likes, commentButton);
  pokemonCard.append(image, name, actions);
  column.append(pokemonCard);

  rowsContainer.append(column);
});

pokemonListContainer.append(rowsContainer);
