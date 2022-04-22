import { ActionType } from "typesafe-actions";
import * as Actions from "./actions";
import { AnyAction } from "redux";

export type TPlanet = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: Array<string>;
  rotation_period: string;
  surface_water: string;
  url: string;
  terrain: string;
};

export type TPerson = {
  birth_year: string;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
};

export type TFilm = {
  characters: Array<string>;
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
  release_date: string;
  species: Array<string>;
  starships: Array<string>;
  title: string;
  url: string;
  vehicles: Array<string>;
};

export interface IMoviesStore {
  planets: Array<TPlanet>;
  people: Array<TPerson>;
  films: Array<TFilm>;
  isLoading: boolean;
  pathname: Array<string>;
  error: string;
}

type TActions = typeof Actions;

export type TMoviesActions = ActionType<TActions | AnyAction>;
