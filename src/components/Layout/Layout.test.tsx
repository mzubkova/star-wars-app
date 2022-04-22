import * as React from "react";
import Layout, { TProps } from "./Layout";
import { shallowRender } from "../../../__tests__/helpers";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Layout", () => {
  let component: any;
  let props: TProps;
  beforeEach(() => {
    props = {
      children: <div></div>,
    };
    component = shallowRender(<Layout {...props} />);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
});
