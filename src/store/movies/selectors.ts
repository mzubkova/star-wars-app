import { createSelector } from "reselect";
import { ApplicationState } from "../types";
import * as Types from "./types";

export const getMoviesState = (state: ApplicationState): Types.IMoviesStore =>
  state.movies;

export const getPlanetsState = createSelector(
  getMoviesState,
  (movies: Types.IMoviesStore): Array<Types.TPlanet> => movies.planets
);

export const getPeopleState = createSelector(
  getMoviesState,
  (movies: Types.IMoviesStore): Array<Types.TPerson> => movies.people
);

export const getFilmsState = createSelector(
  getMoviesState,
  (movies: Types.IMoviesStore): Array<Types.TFilm> => movies.films
);

export const getMoviesIsLoading = createSelector(
  getMoviesState,
  (movies: Types.IMoviesStore): boolean => movies.isLoading
);

export const getPathname = createSelector(
  getMoviesState,
  (movies: Types.IMoviesStore): Array<string> => movies.pathname
);
