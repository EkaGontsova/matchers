import heroes from './heroes.js'; 

const sortHeroes = () => {
  const sortedHeroes = heroes.sort((a, b) => b.health - a.health);

  console.log('Отсортированный спиок героев по здоровью):');
  sortedHeroes.forEach(hero => {
    console.log(`Имя: ${hero.name}, Здоровье: ${hero.health}`);
  });

  return sortedHeroes; 
};

export default sortHeroes;

sortHeroes(heroes);