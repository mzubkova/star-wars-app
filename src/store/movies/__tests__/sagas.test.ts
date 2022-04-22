/*eslint no-undef: 0*/
import { testSaga } from "redux-saga-test-plan";
import * as actions from "../actions";
import * as sagas from "../sagas";
import watchers from "../sagas";
import * as getRequest from "../../../api/index";
import { planetData, peopleData, filmsData } from "../../../../__mocks__/data";

describe("sagas", () => {
  describe("getPlanetsWorker", () => {
    const response = planetData;
    it("getPlanetsWorker success", () => {
      testSaga(sagas.getPlanetsWorker)
        .next()
        .call(getRequest.getPlanets)
        .next(response)
        .put(actions.getPlanetsSuccess(planetData))
        .next()
        .isDone();
    });
    it("getPlanetsError error", () => {
      testSaga(sagas.getPlanetsWorker)
        .next()
        .call(getRequest.getPlanets)
        .throw(new Error())
        .put(actions.getPlanetsError("Error"))
        .next()
        .isDone();
    });
  });
  describe("getPeopleWorker", () => {
    const response = peopleData;
    it("getPeople success", () => {
      testSaga(sagas.getPeopleWorker)
        .next()
        .call(getRequest.getPeople)
        .next(response)
        .put(actions.getPeopleSuccess(peopleData))
        .next()
        .isDone();
    });
    it("getPeopleError error", () => {
      testSaga(sagas.getPeopleWorker)
        .next()
        .call(getRequest.getPeople)
        .throw(new Error())
        .put(actions.getPeopleError("Error"))
        .next()
        .isDone();
    });
  });
  describe("getFilmsWorker", () => {
    const response = filmsData;
    it("getFilmsSuccess success", () => {
      testSaga(sagas.getFilmsWorker)
        .next()
        .call(getRequest.getFilms)
        .next(response)
        .put(actions.getFilmsSuccess(filmsData))
        .next()
        .isDone();
    });
    it("getFilmsError error", () => {
      testSaga(sagas.getFilmsWorker)
        .next()
        .call(getRequest.getFilms)
        .throw(new Error())
        .put(actions.getFilmsError("Error"))
        .next()
        .isDone();
    });
  });
  describe("watchers", () => {
    it("should watchers", () => {
      testSaga(watchers)
        .next()
        .takeEvery("@@movies/GET_PLANETS", sagas.getPlanetsWorker)
        .next()
        .takeEvery("@@movies/GET_PEOPLE", sagas.getPeopleWorker)
        .next()
        .takeEvery("@@movies/GET_FILMS", sagas.getFilmsWorker)
        .finish()
        .isDone();
    });
  });
});
