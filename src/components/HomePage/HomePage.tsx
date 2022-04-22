import React from "react";
import { StHomePage, StHistory } from "../styled/common";

export type TProps = {
  pathname: Array<string>;
};

const HomePage = ({ pathname }: TProps) => (
  <StHomePage>
    <StHistory>
      History:
      {pathname.map((el) => (
        <div>{el || ""}</div>
      ))}
    </StHistory>
  </StHomePage>
);

export default HomePage;
