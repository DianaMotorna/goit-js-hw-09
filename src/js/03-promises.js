function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  });
}

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const firstDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  const promises = [];

  for (let i = 1; i <= amount; i++) {
    const delay = firstDelay + (i - 1) * step;
    promises.push(createPromise(i, delay));
  }

  Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          const { position, delay } = result.value;
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else if (result.status === 'rejected') {
          const { position, delay } = result.reason;
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      });
    });
});
