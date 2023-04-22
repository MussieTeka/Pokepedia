export const commentCountElements = document.createElement('h4');
commentCountElements.textContent = 'Previous comments...';

// Function to count comments
export const countComments = () => {
  const commentCountElements = document.querySelectorAll('.user-comment');
  const count = commentCountElements.length;
  return count === 0 ? '0' : count;
};
