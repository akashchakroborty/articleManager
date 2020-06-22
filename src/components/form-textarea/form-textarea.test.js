import React from "react";
import { shallow } from "enzyme";
import FormTextarea from "./form-textarea.component";

describe("FormTextarea component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "Description",
      value: "mock value",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormTextarea {...mockProps} />);
  });

  it("should render FormTextarea component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find("FormTextareaContainer").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render FormTextareaLabel if there is a label", () => {
    expect(wrapper.exists("FormTextareaLabel")).toBe(true);
  });

  it("should not render FormTextareaLabel if there is no label", () => {
    const mockNewProps = {
      label: "",
      value: "mock value",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormTextarea {...mockNewProps} />);

    expect(newWrapper.exists("FormTextareaLabel")).toBe(false);
  });

  it("should render FormTextareaLabel with no shrink class when value is empty", () => {
    const mockNewProps = {
      label: "title",
      value: "",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormTextarea {...mockNewProps} />);

    expect(newWrapper.find("FormTextareaLabel").hasClass("")).toBe(true);
  });

  it("should render FormTextareaLabel with shrink class when there is any value", () => {
    const mockNewProps = {
      label: "title",
      value: "mock",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormTextarea {...mockNewProps} />);

    expect(newWrapper.find("FormTextareaLabel").hasClass("shrink")).toBe(true);
  });
});
