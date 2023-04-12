export const loadedCategories = async () => {
  const res = await fetch("/jobCategories.json");
  const categories = await res.json();

  return { categories };
};
