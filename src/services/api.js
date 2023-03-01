const getPokemon = async () => {
  const pokeArray = [];
  for (let i = 1; i < 30; i += 3) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await resp.json();
    const name = data.name;
    const pic = data.sprites.front_default;
    const types = data.types.map((type) => type.type.name);
    pokeArray.push({ name, pic, types });
  }
  console.log(pokeArray);
  return {
    pokeArray,
  };
};

export default getPokemon;
