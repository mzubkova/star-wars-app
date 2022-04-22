import * as React from "react";
import Planets, { TProps } from "./Planets";
import PlanetsWr from "../Planets/index";
import { shallowRender, mockStore } from "../../../__tests__/helpers";
import { planetData } from "../../../__mocks__/data";
import { initialState } from "../../store/movies/reducer";

describe("Planets", () => {
  let initialStore = {};
  let component: any;
  let props: TProps;
  beforeEach(() => {
    props = {
      planets: planetData,
      isLoading: false,
    };
    initialStore = mockStore({ movies: initialState });
    component = shallowRender(<Planets {...props} />, initialStore);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
  it("should render Skeleton", () => {
    component = shallowRender(<Planets {...props} isLoading />, initialStore);
    expect(component).toMatchSnapshot();
  });
  it("should render wrapper", () => {
    component = shallowRender(<PlanetsWr {...props} />, initialStore);
    expect(component).toMatchSnapshot();
  });
});
