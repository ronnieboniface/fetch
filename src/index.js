// http://www.dnd5eapi.co/
// 'https://www.dnd5eapi.co/api/monsters/?name=dragon'
const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/'
const searchUrl = 'https://www.dnd5eapi.co/api/monsters/?name=';

const resultsUl = document.getElementById('results');
const button = document.getElementById('search-btn');
const infoContainer = document.getElementById('info');

async function fetchMonsters(query) {
// function fetchMonsters(query) {
  query = splitQuery(query);

  const fetchResults = await fetch(searchUrl + query);
  const resp = await fetchResults.json();
  renderMonsters(resp);

  // fetch(searchUrl + query)
  // .then(resp => {debugger})
  // .then(resp => resp.json())
  // .then(data => {
    // debugger
  //   renderMonsters(data)
  // })
};

function fetchMonster(monster) {
  infoContainer.innerText = "";
  fetch(monsterUrl + monster)
  .then(resp => resp.json())
  .then(data => renderMonster(data))
}

function searchMonsters() {
  const query = document.getElementById('search-input').value;
  resultsUl.innerText = "";
  infoContainer.innerText = "";
  infoContainer.classList.add('hidden');
  fetchMonsters(query);
};

function splitQuery(query){
  return query.replace(' ', '+');
};

button.addEventListener('click', searchMonsters);