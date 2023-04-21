import { countComments } from './commentCounter.js';

describe('countComments', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should return the number of comment elements', () => {
    const mockComments = [
      document.createElement('div'),
      document.createElement('div'),
      document.createElement('div'),
    ];
    mockComments.forEach((comment) => comment.classList.add('user-comment'));
    document.body.append(...mockComments);

    expect(countComments()).toEqual(3);

    mockComments.forEach((comment) => comment.remove());
  });

  it('should return "0" when there are no comment elements', () => {
    expect(countComments()).toEqual('0');
  });
});