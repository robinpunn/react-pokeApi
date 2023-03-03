const getPokemon = async () => {
  const pokeArray = [];
  for (let i = 1; i < 151; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await resp.json();
    const getDetails = await fetch(data.species.url);
    const response = await getDetails.text();
    const details = JSON.parse(response);
    const name = data.name;
    const pic = data.sprites.front_default;
    const hp_value = data.stats[0].base_stat;
    const attack_value = data.stats[1].base_stat;
    const defense_value = data.stats[2].base_stat;
    const speed_value = data.stats[5].base_stat;
    const types = data.types.map((type) => type.type.name);
    const flavorText = details.flavor_text_entries[10].flavor_text.replace(
      /[\n\f\r]/g,
      " "
    );
    const typeData = await Promise.all(
      types.map(async (type) => {
        const resp = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await resp.json();
        const double_from = data.damage_relations.double_damage_from.map(
          (type) => type.name
        );
        const half_from = data.damage_relations.half_damage_from.map(
          (type) => type.name
        );
        const no_from = data.damage_relations.no_damage_from.map(
          (type) => type.name
        );
        const double_to = data.damage_relations.double_damage_to.map(
          (type) => type.name
        );
        const half_to = data.damage_relations.half_damage_to.map(
          (type) => type.name
        );
        const no_to = data.damage_relations.no_damage_to.map(
          (type) => type.name
        );
        return { double_from, half_from, no_from, double_to, half_to, no_to };
      })
    );
    pokeArray.push({
      name,
      pic,
      hp_value,
      attack_value,
      defense_value,
      speed_value,
      types,
      flavorText,
      typeData,
    });
  }
  return {
    pokeArray,
  };
};

export default getPokemon;
