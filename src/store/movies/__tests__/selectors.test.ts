import { ApplicationState } from "../../types";
import { initialState } from "../reducer";
import * as selector from "../selectors";

describe("selectors", () => {
  const state: ApplicationState = { movies: initialState };
  beforeEach(() => {
    state.movies = {
      planets: [],
      people: [],
      films: [],
      isLoading: false,
      error: "",
    };
  });
  it("getMoviesState should work correctly", () => {
    expect(selector.getMoviesState(state)).toEqual(state.movies);
  });
  it("getPlanetsState should work correctly", () => {
    expect(selector.getPlanetsState(state)).toEqual(state.movies.planets);
  });
  it("getPeopleState should work correctly", () => {
    expect(selector.getPeopleState(state)).toEqual(state.movies.people);
  });
  it("getFilmsState should work correctly", () => {
    expect(selector.getFilmsState(state)).toEqual(state.movies.films);
  });
  it("getMoviesIsLoading should work correctly", () => {
    expect(selector.getMoviesIsLoading(state)).toEqual(false);
  });
});
