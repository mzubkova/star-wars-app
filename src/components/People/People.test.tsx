import * as React from "react";
import People, { TProps } from "./People";
import PeopleWr from "../People/index";
import { shallowRender, mockStore } from "../../../__tests__/helpers";
import { peopleData } from "../../../__mocks__/data";
import { initialState } from "../../store/movies/reducer";

describe("People", () => {
  let initialStore = {};
  let component: any;
  let props: TProps;
  beforeEach(() => {
    props = {
      people: peopleData,
      isLoading: false,
    };
    initialStore = mockStore({ movies: initialState });
    component = shallowRender(<People {...props} />, initialStore);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
  it("should render Skeleton", () => {
    component = shallowRender(<People {...props} isLoading />, initialStore);
    expect(component).toMatchSnapshot();
  });
  it("should render wrapper", () => {
    component = shallowRender(<PeopleWr {...props} />, initialStore);
    expect(component).toMatchSnapshot();
  });
});
