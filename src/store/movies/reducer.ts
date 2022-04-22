import { Reducer } from "redux";
import { ActionTypes as AT } from "./actionTypes";
import * as Types from "./types";
import { HYDRATE } from "next-redux-wrapper";

export const initialState: Types.IMoviesStore = {
  planets: [],
  people: [],
  films: [],
  isLoading: false,
  error: "",
  pathname: [],
};

export const moviesReducer: Reducer<
  Types.IMoviesStore,
  Types.TMoviesActions
> = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case AT.GET_PLANETS:
      return {
        ...state,
        isLoading: true,
      };
    case AT.GET_PLANETS_SUCCESS:
      return {
        ...state,
        planets: action.payload,
        isLoading: false,
      };
    case AT.GET_PLANETS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AT.GET_PEOPLE:
      return {
        ...state,
        isLoading: true,
      };
    case AT.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.payload,
        isLoading: false,
      };
    case AT.GET_PEOPLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AT.GET_FILMS:
      return {
        ...state,
        isLoading: true,
      };
    case AT.GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
        isLoading: false,
      };
    case AT.GET_FILMS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case AT.SAVE_PATHNAME:
      return {
        ...state,
        pathname: [...state.pathname, action.payload],
      };
    default:
      return state;
  }
};
