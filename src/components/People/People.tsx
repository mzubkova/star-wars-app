import React from "react";
import { TPerson } from "../../store/movies/types";
import { StBox, StBoxItem } from "../styled/common";
import SkeletonItem from "../Skeletons";

export type TProps = {
  people: Array<TPerson>;
  isLoading: boolean;
};

const People = ({ people, isLoading }: TProps) => (
  <StBox>
    {isLoading ? (
      <SkeletonItem />
    ) : (
      people.map((person) => (
        <StBoxItem key={person.name}>
          <div>Name: {person.name}</div>
          <div>Birth year: {person.birth_year}</div>
          <div>Gender: {person.gender}</div>
          <div>Height: {person.height}</div>
        </StBoxItem>
      ))
    )}
  </StBox>
);

export default People;
