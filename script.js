document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.card__heart');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      const isFilled = heart.classList.toggle('filled');
      heart.src = isFilled ? 'img/Vector6.png' : 'img/Vector.png';
    });
  });
});
