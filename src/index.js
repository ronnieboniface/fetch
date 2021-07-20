// http://www.dnd5eapi.co/
const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/'
const searchUrl = 'https://www.dnd5eapi.co/api/monsters/?name=';

const resultsUl = document.getElementById('results');
const button = document.getElementById('search-btn');
const infoContainer = document.getElementById('info');











function splitQuery(query){
  return query.replace(' ', '+');
};

button.addEventListener('click', searchMonsters);