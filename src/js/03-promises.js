import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(evn) {
  evn.preventDefault();
  const {
    elements: { delay, step, amount },
  } = evn.currentTarget;
  for (let i = 0; i < Number(amount.value); i++) {
    let promDelay = Number(delay.value) + Number(step.value) * i;
    let position = i;
    position += 1;
    createPromise(position, promDelay)
      .then(onMakeOrderSucess)
      .catch(onMakeOrderError);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onMakeOrderSucess(result) {
  Notify.success(result);
}
function onMakeOrderError(result) {
  Notify.failure(result);
}
