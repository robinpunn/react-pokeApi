const getPokemon = async () => {
  const pokeArray = [];
  for (let i = 1; i < 151; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await resp.json();
    const getDetails = await fetch(data.species.url);
    const details = await getDetails.json();
    const name = data.name;
    const pic = data.sprites.front_default;
    const types = data.types.map((type) => type.type.name);
    const flavorText = details.flavor_text_entries[0].flavor_text;
    pokeArray.push({ name, pic, types, flavorText });
  }
  return {
    pokeArray,
  };
};

export default getPokemon;
