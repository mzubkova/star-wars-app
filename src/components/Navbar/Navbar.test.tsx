import * as React from "react";
import Navbar from "./NavBar";
import { shallowRender } from "../../../__tests__/helpers";
import { useRouter } from "next/router";
import { screen, fireEvent } from "@testing-library/dom";

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe("Navbar", () => {
  let component: any;
  beforeEach(() => {
    component = shallowRender(<Navbar />);
  });
  it("should render without crashing", () => {
    expect(component).toMatchSnapshot();
  });
  it("success onConfirm", () => {
    const link = screen.getByRole("link");
    const mockRouter = {
      push: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    fireEvent.click(link);
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
