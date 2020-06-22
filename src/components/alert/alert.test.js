import React from "react";
import { shallow } from "enzyme";

import { Alert } from "./alert.component";

describe("Alert Component", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      alerts: [],
    };

    wrapper = shallow(<Alert {...mockProps} />);
  });

  it("should render Alert component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("if alerts is empty", () => {
    it("should not render AlertContainer component", () => {
      expect(wrapper.exists("AlertContainer")).toBe(false);
      expect(wrapper.find("AlertContainer").length).toEqual(0);
    });
  });

  describe("if alerts is not empty", () => {
    const newMockProps = {
      alerts: [{ msg: "mockAlert", alertType: "primary", id: 1 }],
    };

    const newWrapper = shallow(<Alert {...newMockProps} />);
    it("should render AlertContainer component", () => {
      expect(newWrapper.exists("AlertContainer")).toBe(true);
      expect(newWrapper.find("AlertContainer").length).toEqual(1);
      expect(newWrapper.find("AlertContainer").hasClass("alert-primary")).toBe(
        true
      );
      expect(newWrapper.find("AlertContainer").hasClass("alert")).toBe(true);
      expect(newWrapper.find("AlertContainer").text()).toBe("mockAlert");
    });
  });
});
