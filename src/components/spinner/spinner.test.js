import React from "react";
import { shallow } from "enzyme";
import Spinner from "./spinner.component";

it("should render Spinner component", () => {
  expect(shallow(<Spinner />)).toMatchSnapshot();
});
