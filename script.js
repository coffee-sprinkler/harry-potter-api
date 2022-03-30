const select = document.querySelector('select[name="categories"]');
const content = document.querySelector('.content');

select.addEventListener('change', event => {
  content.textContent = event.target.value;
});
