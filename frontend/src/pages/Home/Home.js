const specialties = document.querySelectorAll('.specialties__item');
specialties.forEach((specialty) => {
    const button = specialty.querySelector('.specialties__item-button');
    const description = specialty.querySelector('.specialties__item-description');
    
    button.addEventListener('click', () => {
      if (description.style.display === 'none') {
        description.style.display = 'block';
        button.innerText = 'Скрыть';
      } else {
        description.style.display = 'none';
        button.innerText = 'Подробнее';
      }
    });
  });