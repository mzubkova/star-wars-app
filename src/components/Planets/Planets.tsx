import React from "react";
import { TPlanet } from "../../store/movies/types";
import { StBox, StBoxItem } from "../styled/common";
import SkeletonItem from "../Skeletons";

export type TProps = {
  planets: Array<TPlanet>;
  isLoading: boolean;
};

const Planets = ({ planets, isLoading }: TProps) => (
  <StBox>
    {isLoading ? (
      <SkeletonItem />
    ) : (
      planets.map((planet) => (
        <StBoxItem key={planet.name}>
          <div>Name: {planet.name}</div>
          <div>Climate: {planet.climate}</div>
          <div>Orbital Period: {planet.orbital_period}</div>
          <div>Population: {planet.population}</div>
        </StBoxItem>
      ))
    )}
  </StBox>
);

export default Planets;
