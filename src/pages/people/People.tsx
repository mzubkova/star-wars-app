import React from "react";
import People from "../../components/People";
import { wrapper } from "../../store/store";
import { getPeople } from "../../store/movies/actions";
import { TPerson } from "../../store/movies/types";

export type TProps = {
  people: Array<TPerson>;
};

const PeoplePage = ({ people }: TProps) => {
  return <People people={people} />;
};

PeoplePage.getInitialProps = wrapper.getInitialPageProps((store) => () => {
  store.dispatch(getPeople());
});

export default PeoplePage;
