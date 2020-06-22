import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("should render App component", () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
