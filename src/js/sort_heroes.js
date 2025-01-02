export default function sort_heroes(heroes) {
    return heroes.sort((a, b) => b.health - a.health);
}