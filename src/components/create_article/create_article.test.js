import React from "react";
import { mount } from "enzyme";
import { CreateArticle } from "./create_article.component";

describe("CreateArticle component", () => {
  let wrapper;
  let mockCreateArticle;
  let mockHistory;

  beforeEach(() => {
    mockCreateArticle = jest.fn();
    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      createArticle: mockCreateArticle,
      history: mockHistory,
    };

    wrapper = mount(<CreateArticle {...mockProps} />);
  });

  it("should render CreateArticle component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when FormComponent changes", () => {
    const value = "hey";
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: { value, name: "title" },
      });
    expect(wrapper.find("input").at(0).instance().value).toEqual(value);
  });

  it("should call handleSubmit method when FormComponent is submitted", () => {
    const logSpy = jest.spyOn(console, "log");
    wrapper.find("form").at(0).simulate("submit");
    expect(logSpy).toHaveBeenCalledWith("Submitted");
  });
});
