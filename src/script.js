import './style.css';

import { counter, createCounter } from './itemCounter.js';

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

export default pokemonData;

const pokemonListContainer = document.querySelector('.pokemon-list');

const rowsContainer = document.createElement('div');
rowsContainer.classList.add('rows-container');

pokemonData.forEach((pokemon, index) => {
  const column = document.createElement('div');
  column.classList.add('column');

  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');

  const image = document.createElement('img');
  image.src = pokemon.image;

  const name = document.createElement('h2');
  name.textContent = pokemon.name;

  const actions = document.createElement('div');
  actions.classList.add('pokemon-actions');

  const heartIcon = document.createElement('i');
  heartIcon.classList.add('far', 'fa-heart');

  const commentButton = document.createElement('button');
  commentButton.classList.add('comment-button');
  commentButton.textContent = 'Add Comment';

  // Popup window
  commentButton.addEventListener('click', async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
    );
    const data = await response.json();

    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fas', 'fa-times', 'close-icon');

    closeIcon.addEventListener('click', () => {
      popupContainer.remove();
    });

    const image = document.createElement('img');
    image.src = data.sprites.other['official-artwork'].front_default;

    const name = document.createElement('h3');
    name.textContent = pokemon.name;

    const description = document.createElement('ul');

    const species = document.createElement('li');
    species.textContent = `Species: ${data.species.name}`;

    const height = document.createElement('li');
    height.textContent = `Height: ${data.height} decimetres`;

    const weight = document.createElement('li');
    weight.textContent = `Weight: ${data.weight} hectograms`;

    const abilities = document.createElement('li');
    abilities.textContent = `Abilities: ${data.abilities
      .map((a) => a.ability.name)
      .join(', ')}`;

    description.append(species, height, weight, abilities);

    // Comment Section
    const previousComments = document.createElement('div');
    previousComments.classList.add('previous-comments');
    const previousCommentsTitle = document.createElement('h3');
    previousCommentsTitle.textContent = 'Previous Comments!';
    previousComments.append(previousCommentsTitle);

    // Display previous comments from API

    const fetchAndDisplayComments = () => {
      fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nFsF5tumQEVYa0WWw9ph/comments?item_id=${pokemon.name}`,
      )
        .then((response) => response.json())
        .then((data) => {
          const commentContainer = document.createElement('div');
          commentContainer.classList.add('comment-container');

          data.forEach((comment) => {
            const userName = document.createElement('p');
            userName.textContent = comment.username;
            userName.classList.add('user-name');

            const verticalLine = document.createElement('div');
            verticalLine.classList.add('vertical-line');

            const userComment = document.createElement('p');
            userComment.textContent = comment.comment;
            userComment.classList.add('user-comment');

            commentContainer.append(userName, verticalLine, userComment);
          });

          previousComments.append(commentContainer);
        });
    };
    fetchAndDisplayComments();

    //  Add comments to API
    const addComment = (username, commentText) => {
      const comment = {
        item_id: `${pokemon.name}`,
        username,
        comment: commentText,
      };
      fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nFsF5tumQEVYa0WWw9ph/comments',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(comment),
        },
      ).then(() => {
        const commentContainer = document.querySelector('.comment-container');
        const userName = document.createElement('p');

        userName.textContent = username;
        userName.classList.add('user-name');

        const verticalLine = document.createElement('div');
        verticalLine.classList.add('vertical-line');

        const userComment = document.createElement('p');
        userComment.textContent = commentText;
        userComment.classList.add('user-comment');

        commentContainer.append(userName, verticalLine, userComment);
      });
    };

    const form = document.createElement('form');
    const commentTitle = document.createElement('h3');
    commentTitle.textContent = 'Drop your comment!';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Comment';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = nameInput.value.trim();
      const commentText = commentInput.value.trim();
      if (username === '' || commentText === '') {
        return;
      }
      addComment(username, commentText);
      nameInput.value = '';
      commentInput.value = '';
    });

    form.append(commentTitle, nameInput, commentInput, submitButton);

    popupContent.append(
      closeIcon,
      image,
      name,
      description,
      previousComments,
      form,
    );

    popupContainer.append(popupContent);
    pokemonListContainer.append(popupContainer);
  });

  const likes = document.createElement('span');
  likes.textContent = `${pokemon.likes} likes`;

  //   Add likes to API
  const fetchAndUpdateLikes = (pokemon) => {
    fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tVqztXshPZbS48Z4myPF/likes?item_id=${pokemon.name}`,
    )
      .then((response) => response.json())
      .then((data) => {
        pokemon.likes = data[index].likes;
        likes.textContent = `${pokemon.likes} likes`;
      });
  };
  fetchAndUpdateLikes(pokemon);

  heartIcon.addEventListener('click', () => {
    fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tVqztXshPZbS48Z4myPF/likes',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: pokemon.name }),
      },
    );
    fetchAndUpdateLikes(pokemon);
  });

  actions.append(heartIcon, likes, commentButton);
  pokemonCard.append(image, name, actions);
  column.append(pokemonCard);

  rowsContainer.append(column);
});

pokemonListContainer.append(counter, rowsContainer);

createCounter(pokemonData);
