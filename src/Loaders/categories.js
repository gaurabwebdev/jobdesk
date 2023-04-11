export const loadedCategories = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-gaurabwebdev/main/public/jobCategories.json?token=GHSAT0AAAAAAB66KS3TCYADA3ZJX66Z4X7QZBVKEEQ"
  );
  const categories = await res.json();

  return { categories };
};
