import React from "react";
import Films from "../../components/Films";
import { wrapper } from "../../store/store";
import { getFilms } from "../../store/movies/actions";
import { TFilm } from "../../store/movies/types";

export type TProps = {
  films: Array<TFilm>;
};

const FilmsPage = ({ films }: TProps) => {
  return <Films films={films} />;
};

FilmsPage.getInitialProps = wrapper.getInitialPageProps((store) => () => {
  store.dispatch(getFilms());
});

export default FilmsPage;
