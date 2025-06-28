{
  const carousel = document.querySelector('.carousel');
  const cardContainer = carousel.querySelector('.card__container');
  const prevButton = carousel.querySelector('.carousel__button--prev');
  const nextButton = carousel.querySelector('.carousel__button--next');

  // 현재 페이지 인덱스
  let currentIndex = 0;
  const cardWidth = 160; // 카드 하나의 너비
  const gap = parseInt(getComputedStyle(cardContainer).gap);
  const cardsPerPage = 2;
  const totalCards = cardContainer.children.length; // 6

  // 총 이동할 수 있는 단계 수
  const maxIndex = totalCards / cardsPerPage - 1; // 6 / 2 - 1 = 2
  console.log(maxIndex);

  // 다음 버튼 클릭
  nextButton.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex += 1;
      const moveForward = (cardWidth + gap) * cardsPerPage * currentIndex;
      cardContainer.style.setProperty('transform', 'translateX(-' + moveForward + 'px)');
    }
  });

  // 이전 버튼 클릭
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      const moveBackward = (cardWidth + gap) * cardsPerPage * currentIndex;
      cardContainer.style.setProperty('transform', 'translateX(-' + moveBackward + 'px)');
    }
  })
}