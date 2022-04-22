import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

export const mockStore = configureStore();

export const shallowRender = (component, store) => {
  const core = store ? (
    <Provider store={store}>{component}</Provider>
  ) : (
    component
  );
  return render(core);
};
