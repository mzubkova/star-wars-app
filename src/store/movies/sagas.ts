import { put, takeEvery, call } from "redux-saga/effects";
import { ActionTypes as AT } from "./actionTypes";
import { SagaIterator } from "@redux-saga/core";
import * as actions from "./actions";
import * as requests from "../../api/index";

export function* getPlanetsWorker(): SagaIterator {
  try {
    const data = yield call(requests.getPlanets);
    yield put(actions.getPlanetsSuccess(data));
  } catch (e) {
    yield put(actions.getPlanetsError("Error"));
  }
}

export function* getPeopleWorker(): SagaIterator {
  try {
    const data = yield call(requests.getPeople);
    yield put(actions.getPeopleSuccess(data));
  } catch (e) {
    yield put(actions.getPeopleError("Error"));
  }
}

export function* getFilmsWorker(): SagaIterator {
  try {
    const data = yield call(requests.getFilms);
    yield put(actions.getFilmsSuccess(data));
  } catch (e) {
    yield put(actions.getFilmsError("Error"));
  }
}

export default function* actionWatcher() {
  yield takeEvery(AT.GET_PLANETS, getPlanetsWorker);
  yield takeEvery(AT.GET_PEOPLE, getPeopleWorker);
  yield takeEvery(AT.GET_FILMS, getFilmsWorker);
}
