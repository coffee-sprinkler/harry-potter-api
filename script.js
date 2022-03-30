const select = document.querySelector('select[name="categories"]');

select.addEventListener('change', event => {
  location = event.target.value;
});
