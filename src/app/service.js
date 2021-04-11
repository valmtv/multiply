export const randomNumber = (min, max) => {
  if (
    !Number.isInteger(min)
    || !Number.isInteger(max)
    || min >= max
  ) return undefined;

  const random = Math.random();

  const diff = max - min;

  return Math.floor((random * (diff + 1))) + min;
};
