const refs = {
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submit: document.querySelector('.form button'),
};

const delay = refs.delay.addEventListener('input', evn => {
  console.log(evn.target.value);
  return evn.target.value;
});
const step = refs.step.addEventListener('input', evn => {
  console.log(evn.target.value);
  return evn.target.value;
});
const amount = refs.amount.addEventListener('input', evn => {
  console.log(evn.target.value);
  return evn.target.value;
});

refs.submit.addEventListener('submit', e => {
  e.preventDefault();
  for (let i = 0; i < amount; i++) {
    createPromise();
  }
  createPromise();
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, delay);
    return promise;
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
