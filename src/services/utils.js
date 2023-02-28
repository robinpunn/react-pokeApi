export const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const change = async () => {
  const result = await changePokemon();
  console.log(result, result.typeData);
  return result;
};
