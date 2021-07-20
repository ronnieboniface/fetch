function renderMonsters(data) {
  if (data.count === 0) resultsUl.innerText = "Sorry, we couldn't find anything matching your search term... :("

  data.results.map(r => {
    const li = document.createElement('li');
    li.innerText = r.name;
    li.addEventListener('click', () => {
      fetchMonster(r.index);
    })
    resultsUl.appendChild(li);
  });
};

function renderMonster(monster){
  infoContainer.classList.remove('hidden');

  const { armor_class, challenge_rating, charisma, constitution, dexterity, hit_points, intelligence, strength, wisdom } = monster;

  const attacks = monster.actions.map(action => `<li> ${action.name} </li>`);

  infoContainer.innerHTML = `
  <div id="name">
    ${monster.name} 
    <button 
      type="button" 
      data-id="${monster.index}"
      class="fav-button">
      Favorite
    </button>
  </div>
  
    <section class="info">
      <span class="stats">Stats:</span>

      <li> <strong>Armor Class:</strong> ${armor_class}</li>
      <li> <strong>Challenge Rating:</strong> ${challenge_rating}</li>
      <li> <strong>Charisma:</strong> ${charisma}</li>
      <li> <strong>Constitution:</strong> ${constitution}</li>
      <li> <strong>Dexterity:</strong> ${dexterity}</li>
      <li> <strong>Hit Points:</strong> ${hit_points}</li>
      <li> <strong>Intelligence:</strong> ${intelligence}</li>
      <li> <strong>Strength:</strong> ${strength}</li>
      <li> <strong>Wisdom:</strong> ${wisdom}</li>
    </section>

    <section class="attacks">
      <span class="stats">Attacks:</span>
      ${attacks.join(' ')}
    </section>
  `
};