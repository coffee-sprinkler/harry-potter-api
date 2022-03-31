const select = document.querySelector('select[name="categories"]');
const content = document.querySelector('.content');

select.addEventListener('change', event => {
  content.textContent = event.target.value;
});

// TODO Harry Potter API

const HP_API = async (categories = '') => {
  const url = `http://hp-api.herokuapp.com/api/characters/${categories}`;
  const data = await (await fetch(url)).json();
  return data;
};

const characters = HP_API('').then(data => {
  displayCharacters(data);
});

const displayCharacters = data => {
  data.some(character => {
    createCard(character);
  });
};

const createCard = data => {
  const { name, species, gender, house, dateOfBirth, ancestry, image } = data;

  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <div class="image-wrapper">
  <img
  class="profile-pic"
  src=${image}
  />
    </div>
    <div class="title">
      <h3>${name}</h3>
    </div>
    <div class="details">
      <div class="details-item">
        <span class="tag">species</span>
        <span class="desc">${species}</span>
      </div>
      <div class="details-item">
        <span class="tag">gender</span>
        <span class="desc">${gender}</span>
      </div>
      <div class="details-item">
        <span class="tag">house</span>
        <span class="desc">${house}</span>
      </div>
      <div class="details-item">
        <span class="tag">birthdate</span>
        <span class="desc">${dateOfBirth}</span>
      </div>
      <div class="details-item">
        <span class="tag">ancestry</span>
        <span class="desc">${ancestry}</span>
      </div>
      <div class="details-item">
        <button>See more</button>
      </div>
    </div>
  
  `;

  content.append(card);
};
