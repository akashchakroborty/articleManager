import React from "react";
import { shallow } from "enzyme";
import FormInput from "./form-input.component";

describe("FormInput component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "title",
      value: "mock value",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find("FormInputContainer").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render FormInputLabel if there is a label", () => {
    expect(wrapper.exists("FormInputLabel")).toBe(true);
  });

  it("should not render FormInputLabel if there is no label", () => {
    const mockNewProps = {
      label: "",
      value: "mock value",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists("FormInputLabel")).toBe(false);
  });

  it("should render FormInputLabel with no shrink class when value is empty", () => {
    const mockNewProps = {
      label: "title",
      value: "",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.find("FormInputLabel").hasClass("")).toBe(true);
  });

  it("should render FormInputLabel with shrink class when there is any value", () => {
    const mockNewProps = {
      label: "title",
      value: "mock",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.find("FormInputLabel").hasClass("shrink")).toBe(true);
  });
});
