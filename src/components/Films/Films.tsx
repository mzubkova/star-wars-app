import React from "react";
import { TFilm } from "../../store/movies/types";
import SkeletonItem from "../Skeletons";
import { StBox, StBoxItem, SLinkText } from "../styled/common";
import StyledLink from "../Link";
import { useRouter } from "next/router";

export type TProps = {
  films: Array<TFilm>;
  isLoading: boolean;
};

const Films = ({ films, isLoading }: TProps) => {
  const { pathname } = useRouter();
  return (
    <StBox>
      {isLoading ? (
        <SkeletonItem />
      ) : (
        films.map((film) => (
          <StBoxItem key={film.episode_id}>
            <div>Director: {film.director}</div>
            <div>Episode: {film.episode_id}</div>
            <div>Title: {film.title}</div>
            <StyledLink
              href={`/films/${film.url.split("/").slice(-2, -1).toString()}`}
            >
              <SLinkText>Read More</SLinkText>
            </StyledLink>
          </StBoxItem>
        ))
      )}
    </StBox>
  );
};

export default Films;
