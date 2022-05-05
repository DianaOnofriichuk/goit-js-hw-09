import Notiflix from 'notiflix';
const refs = {
  formEl: document.querySelector('.form'),
  // inputDelay: document.querySelector('.input_delay'),
  // inputStep: document.querySelector('.input_step'),
  // inputAmount: document.querySelector('.input_amount'),
  buttonEl: document.querySelector('button_submit'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const FormElements = e.currentTarget.elements;
  const amount = FormElements.amount.value;
  const step = FormElements.step.value;
  const delay = FormElements.delay.value;

  let totalDelay = Number(delay);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, totalDelay)
      .then(({ position, totalDelay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${totalDelay}ms`);
      })
      .catch(({ position, totalDelay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${totalDelay}ms`);
      });
    totalDelay += Number(step);
  }
}

function createPromise(position, totalDelay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, totalDelay });
      } else {
        reject({ position, totalDelay });
      }
    }, totalDelay);
  });
  return promise;
}
