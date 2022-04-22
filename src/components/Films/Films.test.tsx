import * as React from "react";
import Films, { TProps } from "./Films";
import FilmsWr from "../Films/index";
import { shallowRender, mockStore } from "../../../__tests__/helpers";
import { filmsData } from "../../../__mocks__/data";
import { initialState } from "../../store/movies/reducer";

describe("Films", () => {
  let initialStore = {};
  let component: any;
  let props: TProps;
  beforeEach(() => {
    props = {
      films: filmsData,
      isLoading: false,
    };
    initialStore = mockStore({ movies: initialState });
    component = shallowRender(<Films {...props} />, initialStore);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
  it("should render Skeleton", () => {
    component = shallowRender(<Films {...props} isLoading />, initialStore);
    expect(component).toMatchSnapshot();
  });
  it("should render wrapper", () => {
    component = shallowRender(<FilmsWr {...props} />, initialStore);
    expect(component).toMatchSnapshot();
  });
});
