{
  const carousel = document.querySelector('.carousel');
  const cardContainer = carousel.querySelector('.card__container');
  const prevButton = carousel.querySelector('.carousel__button--prev');
  const nextButton = carousel.querySelector('.carousel__button--next');

  let currentIndex = 0;
  const cardWidth = 160;
  const gap = parseInt(getComputedStyle(cardContainer).gap);
  const cardsPerPage = 2;
  const totalCards = cardContainer.children.length;

  const maxIndex = totalCards / cardsPerPage - 1;
  console.log(maxIndex);

  nextButton.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex += 1;
      const moveForward = (cardWidth + gap) * cardsPerPage * currentIndex;
      cardContainer.style.setProperty('transform', 'translateX(-' + moveForward + 'px)');
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      const moveBackward = (cardWidth + gap) * cardsPerPage * currentIndex;
      cardContainer.style.setProperty('transform', 'translateX(-' + moveBackward + 'px)');
    }
  })
}