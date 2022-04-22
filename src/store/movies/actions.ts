import { action } from "typesafe-actions";
import { ActionTypes as AT } from "./actionTypes";
import { TPlanet, TPerson, TFilm } from "./types";

export const getPlanets = () => action(AT.GET_PLANETS);
export const getPlanetsSuccess = (payload: Array<TPlanet>) =>
  action(AT.GET_PLANETS_SUCCESS, payload);
export const getPlanetsError = (payload: string) =>
  action(AT.GET_PLANETS_ERROR, payload);
export const getPeople = () => action(AT.GET_PEOPLE);
export const getPeopleSuccess = (payload: Array<TPerson>) =>
  action(AT.GET_PEOPLE_SUCCESS, payload);
export const getPeopleError = (payload: string) =>
  action(AT.GET_PEOPLE_ERROR, payload);
export const getFilms = () => action(AT.GET_FILMS);
export const getFilmsSuccess = (payload: Array<TFilm>) =>
  action(AT.GET_FILMS_SUCCESS, payload);
export const getFilmsError = (payload: string) =>
  action(AT.GET_FILMS_ERROR, payload);
export const savePathname = (payload: string) =>
  action(AT.SAVE_PATHNAME, payload);
