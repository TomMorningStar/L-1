// Задача: Добавить анимацию для элемента: Напишите функцию,
//  которая добавляет анимацию для элемента на веб-странице,
//  например, плавное изменение его положения или размера.


function animateElementSize(element, targetWidth, targetHeight, duration) {
  const startWidth = element.offsetWidth;
  const startHeight = element.offsetHeight;
  const startTime = performance.now();

  // Метод performance.now()возвращает метку времени с высоким разрешением в миллисекундах.
  // Он представляет собой время, прошедшее с тех пор Performance.timeOrigin(время начала навигации
  // в контекстах окна или время запуска рабочего процесса в Workerконтекстах ServiceWorker).

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime >= duration) {
      element.style.width = `${targetWidth}px`;
      element.style.height = `${targetHeight}px`;
      return;
    } else {
      console.log(elapsedTime, duration);
    }

    console.log(elapsedTime >= duration);

    const progress = Math.min(1, elapsedTime / duration);
    const newWidth = startWidth + (targetWidth - startWidth) * progress;
    const newHeight = startHeight + (targetHeight - startHeight) * progress;
    // уменьшаем длину за счет этого происходит анимация

    element.style.width = `${newWidth}px`;
    element.style.height = `${newHeight}px`;

    requestAnimationFrame(step); // бесконечный оптимизированный цикл встроенный в js ;)
  }

  requestAnimationFrame(step);
}


const elementToAnimate = document.getElementById('element-to-animate');
animateElementSize(elementToAnimate, 300, 200, 1000); // элемент, ширина, высота, время 
