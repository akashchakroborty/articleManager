import React from "react";
import { mount } from "enzyme";
import ErrorBoundary from "./error-boundary.component";

describe("ErrorBoundary component", () => {
  const Something = () => null;
  const wrapper = mount(
    <ErrorBoundary>
      <Something />
    </ErrorBoundary>
  );

  it("should render ErrorBoundary component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should display an ErrorMessage if wrapped component throws", () => {
    const error = new Error("test Error");

    wrapper.find(Something).simulateError(error);
    expect(wrapper.exists("ErrorImageOverlay")).toBe(true);
  });
});
