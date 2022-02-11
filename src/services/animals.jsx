export async function getAnimals() {
  const resp = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
  const data = await resp.json();
  return data;
}
