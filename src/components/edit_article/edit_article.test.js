import React from "react";
import { mount } from "enzyme";
import { EditArticle } from "./edit_article.component";

describe("EditArticle component", () => {
  let wrapper;
  let mockEditArticle;
  let mockHistory;

  beforeEach(() => {
    mockEditArticle = jest.fn();
    mockHistory = {
      push: jest.fn(),
    };
    const mockProps = {
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: "Mock data",
      },
      editArticle: mockEditArticle,
      history: mockHistory,
    };

    wrapper = mount(<EditArticle {...mockProps} />);
  });

  it("should render EditArticle component", () => {
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
