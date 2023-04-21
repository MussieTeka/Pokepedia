// Counting comments
import { counter } from './itemCounter.js';

const commentCounter = (pokemonData) => {
  let totalComments = 0;
  const promises = pokemonData.map((pokemon) => fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/nFsF5tumQEVYa0WWw9ph/comments?item_id=${pokemon.name}`,
  )
    .then((response) => response.json())
    .then((data) => {
      totalComments += data.length;
    }));
  Promise.all(promises).then(() => {
    const commentCounterElement = document.createElement('p');
    commentCounterElement.classList.add('comment-counter');
    commentCounterElement.textContent = `Total Comments: ${totalComments}`;
    counter.append(commentCounterElement);
  });
};

export default commentCounter;