import React from "react";
import { shallow } from "enzyme";
import FormComponent from "./form.component";

describe("FormComponent component", () => {
  let wrapper;
  let mockHandleChange;
  let mockHandleSubmit;

  beforeEach(() => {
    mockHandleChange = jest.fn();
    mockHandleSubmit = jest.fn();

    const mockProps = {
      edit: true,
      handleSubmit: mockHandleSubmit,
      title: "",
      description: "",
      author: "",
      content: "",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormComponent {...mockProps} />);
  });

  it("should render FormComponent component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("TitleContainer and CustomButton should display Edit when edit is true", () => {
    expect(wrapper.find("TitleContainer").text()).toBe("Edit Article");
    expect(wrapper.find("CustomButton").props().children).toEqual([
      "Edit",
      " Article",
    ]);
  });

  it("TitleContainer and CustomButton should display Edit when edit is true", () => {
    const mockNewProps = {
      edit: false,
      handleSubmit: mockHandleSubmit,
      title: "",
      description: "",
      author: "",
      content: "",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormComponent {...mockNewProps} />);

    expect(newWrapper.find("TitleContainer").text()).toBe("Create Article");
    expect(newWrapper.find("CustomButton").props().children).toEqual([
      "Create",
      " Article",
    ]);
  });
});
