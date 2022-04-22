import { all } from "@redux-saga/core/effects";
import getMovies from "./movies/sagas";

export default function* rootSaga() {
  yield all([getMovies()]);
}
