import heroes from './heroes.js'; 

const sortHeroes = (heroesArray) => {
  const sortedHeroes = heroesArray.sort((a, b) => b.health - a.health);

  console.log('Отсортированный спиок героев по здоровью):');
  sortedHeroes.forEach(hero => {
    console.log(`Имя: ${hero.name}, Здоровье: ${hero.health}`);
  });

  return sortedHeroes; 
};

export default sortHeroes;

sortHeroes(heroes);