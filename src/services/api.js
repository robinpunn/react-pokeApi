import fetch from "node-fetch";
import { random } from "./utils";

export const changePokemon = async () => {
  let pick = random(1, 1008);
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pick}`);
  const data = await resp.json();
  const name = data.name;
  const pic = data.sprites.front_default;
  const hp_value = data.stats[0].base_stat;
  const attack_value = data.stats[1].base_stat;
  const defense_value = data.stats[2].base_stat;
  const speed_value = data.stats[5].base_stat;
  const types = data.types.map((type) => type.type.name);
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
      const no_to = data.damage_relations.no_damage_to.map((type) => type.name);

      return { double_from, half_from, no_from, double_to, half_to, no_to };
    })
  );
  // console.log("data:", data, "pic:", pic);
  return {
    name,
    pic,
    hp_value,
    attack_value,
    defense_value,
    speed_value,
    types,
    typeData,
  };
};
