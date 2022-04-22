import urls from "./urls.json";

export const getPlanets = async () => {
  try {
    const response = await fetch(`${urls.base}${urls.topic.planets}`).then(
      (response) => response.json()
    );
    return response.results;
  } catch (error) {
    console.log(error);
  }
};

export const getPeople = async () => {
  try {
    const response = await fetch(`${urls.base}${urls.topic.people}`).then(
      (response) => response.json()
    );
    return response.results;
  } catch (error) {
    console.log(error);
  }
};

export const getFilms = async () => {
  try {
    const response = await fetch(`${urls.base}${urls.topic.films}`).then(
      (response) => response.json()
    );
    return response.results;
  } catch (error) {
    console.log(error);
  }
};
