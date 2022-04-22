import * as actions from "../actions";
import { initialState, moviesReducer } from "../reducer";
import { planetData, peopleData, filmsData } from "../../../../__mocks__/data";

describe("moviesReducer", () => {
  it("should return the initial state", () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle GET_PLANETS", () => {
    expect(moviesReducer(initialState, actions.getPlanets())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it("should handle GET_PLANETS_SUCCESS", () => {
    expect(
      moviesReducer(initialState, actions.getPlanetsSuccess(planetData))
    ).toEqual({
      ...initialState,
      planets: planetData,
      isLoading: false,
    });
  });
  it("should handle GET_PLANETS_ERROR", () => {
    expect(
      moviesReducer(initialState, actions.getPlanetsError("Error"))
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: "Error",
    });
  });
  it("should handle GET_PEOPLE", () => {
    expect(moviesReducer(initialState, actions.getPeople())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it("should handle GET_PEOPLE_SUCCESS", () => {
    expect(
      moviesReducer(initialState, actions.getPeopleSuccess(peopleData))
    ).toEqual({
      ...initialState,
      people: peopleData,
      isLoading: false,
    });
  });
  it("should handle GET_PEOPLE_ERROR", () => {
    expect(
      moviesReducer(initialState, actions.getPeopleError("Error"))
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: "Error",
    });
  });
  it("should handle GET_FILMS", () => {
    expect(moviesReducer(initialState, actions.getFilms())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it("should handle GET_FILMS_SUCCESS", () => {
    expect(
      moviesReducer(initialState, actions.getFilmsSuccess(filmsData))
    ).toEqual({
      ...initialState,
      films: filmsData,
      isLoading: false,
    });
  });
  it("should handle GET_FILMS_ERROR", () => {
    expect(moviesReducer(initialState, actions.getFilmsError("Error"))).toEqual(
      {
        ...initialState,
        isLoading: false,
        error: "Error",
      }
    );
  });
});
