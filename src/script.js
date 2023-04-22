import './style.css';

import { counter, createItemCounter } from './itemCounter.js';

import { commentCountElements, countComments } from './commentCounter.js';

// displaying the cards from Poke API
const pokemonListContainer = document.querySelector('.pokemon-list');

const rowsContainer = document.createElement('div');
rowsContainer.classList.add('rows-container');

async function getPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
  const data = await response.json();
  /* eslint-disable no-restricted-syntax */
  for (const pokemon of data.results) {
    /* eslint-disable no-await-in-loop */

    const response = await fetch(pokemon.url);
    const data = await response.json();

    const column = document.createElement('div');
    column.classList.add('column');

    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const image = document.createElement('img');
    image.src = data.sprites.other['official-artwork'].front_shiny;

    const name = document.createElement('h2');
    name.textContent = pokemon.name;

    const actions = document.createElement('div');
    actions.classList.add('pokemon-actions');

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('far', 'fa-heart');

    const commentButton = document.createElement('button');
    commentButton.classList.add('comment-button');
    commentButton.textContent = 'Add Comment';

    const likes = document.createElement('span');
    likes.textContent = '0 likes';

    const fetchAndUpdateLikes = (pokemon, likesElement) => {
      fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lVDxwD37BAWVnTQOm4Iz/likes?item_id=${pokemon.name}`,
      )
        .then((response) => response.json())
        .then((data) => {
          const updatedLikes = data.find((item) => item.item_id === pokemon.name)?.likes || 0;
          pokemon.likes = updatedLikes;
          likesElement.textContent = `${updatedLikes} likes`;
        });
    };

    fetchAndUpdateLikes(pokemon, likes);

    heartIcon.addEventListener('click', () => {
      fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lVDxwD37BAWVnTQOm4Iz/likes',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ item_id: pokemon.name }),
        },
      ).then(() => fetchAndUpdateLikes(pokemon, likes));
    });

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

      // comment section
      const previousComments = document.createElement('div');
      previousComments.classList.add('previous-comments');
      previousComments.append(commentCountElements);

      // Display previous comments from API
      const fetchAndDisplayComments = () => {
        fetch(
          `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lVDxwD37BAWVnTQOm4Iz/comments?item_id=${pokemon.name}`,
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

              const commentDate = document.createElement('p');
              commentDate.textContent = comment.creation_date;
              commentDate.classList.add('user-date');

              commentContainer.append(
                userName,
                commentDate,
                verticalLine,
                userComment,
              );
            });

            previousComments.append(commentContainer);

            // Display comment count
            const commentCount = countComments();

            commentCountElements.textContent = `Previous comments: ${commentCount}`;
          });
      };

      fetchAndDisplayComments();

      // Append previousComments element to the DOM
      const container = document.querySelector('.container');
      container.append(previousComments);

      //  Add comments to API
      const addComment = (username, commentText) => {
        const comment = {
          item_id: `${pokemon.name}`,
          username,
          comment: commentText,
        };
        fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lVDxwD37BAWVnTQOm4Iz/comments',
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
          // Update comment count
          const commentCount = countComments();
          commentCountElements.textContent = `Previous comments: ${commentCount}`;
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
      popupContainer.appendChild(popupContent);
      pokemonListContainer.append(popupContainer);
    });
    actions.append(heartIcon, likes, commentButton);
    pokemonCard.append(image, name, actions);
    column.append(pokemonCard);

    rowsContainer.append(column);
  }

  pokemonListContainer.append(counter, rowsContainer);

  // call createItemCounter after rowsContainer has been appended
  createItemCounter();
}

getPokemonList();
