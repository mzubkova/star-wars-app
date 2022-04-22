import React from "react";
import Planets from "../../components/Planets";
import { wrapper } from "../../store/store";
import { getPlanets } from "../../store/movies/actions";
import { TPlanet } from "../../store/movies/types";

export type TProps = {
  planets: Array<TPlanet>;
};

const PlanetsPage = ({ planets }: TProps) => {
  return <Planets planets={planets} />;
};

PlanetsPage.getInitialProps = wrapper.getInitialPageProps((store) => () => {
  store.dispatch(getPlanets());
});

export default PlanetsPage;
