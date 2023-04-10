const printslip = (id, advice) => {
  document.querySelector('#advice-id').textContent += id;
  document.querySelector('#advice-text').textContent = `${advice}`;
};
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => printslip(data.slip.id, data.slip.advice))
  .catch(error => console.error(error));
