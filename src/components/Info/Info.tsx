import React from "react";
import { StBox, StBoxItem } from "../styled/common";

export type TProps = {
  info: {
    title: string;
    director: string;
    release_date: string;
    opening_crawl: string;
  };
  isLoading?: boolean;
};

const Info = ({ info }: TProps) => {
  const { title, director, release_date, opening_crawl } = info || {};
  return (
    <StBox>
      <StBoxItem>Title: {title}</StBoxItem>
      <StBoxItem>Director: {director}</StBoxItem>
      <StBoxItem>Opening crawl: {opening_crawl}</StBoxItem>
      <StBoxItem>Release date: {release_date}</StBoxItem>
    </StBox>
  );
};

export default Info;
