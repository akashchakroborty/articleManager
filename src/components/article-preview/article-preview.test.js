import React from "react";
import { mount } from "enzyme";
import { ArticlePreview } from "./article-preview.component";

describe("ArticlePreview component", () => {
  let wrapper;
  let mockHistory;
  let mockGetArticle;
  let mockDeleteArticle;
  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };
    mockGetArticle = jest.fn();
    mockDeleteArticle = jest.fn(() => true);

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
      history: mockHistory,
      getArticle: mockGetArticle,
      deleteArticle: mockDeleteArticle,
    };

    wrapper = mount(<ArticlePreview {...mockProps} />);
  });

  it("should render ArticlePreview component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when ArticleBody is clicked", () => {
    wrapper.find("ArticleBoby").simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it("should call history.push when Edit ActionContainer is clicked", () => {
    wrapper.find("ActionContainer").at(0).simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it("should call handleToggleDeleteClick when Delete ActionContainer is clicked", () => {
    const logSpy = jest.spyOn(console, "log");
    wrapper.find("ActionContainer").at(1).simulate("click");
    expect(logSpy).toHaveBeenCalledWith("true");
  });

  it(`should call handleToggleDeleteClick when Delete ActionContainer is clicked.
   If Yes Delete it is clicked, then deleteArticle is called.
   If cancel is clicked, ToggleDeleteClick is called and Sweet Alert is removed.
  `, () => {
    const logSpy = jest.spyOn(console, "log");
    wrapper.find("ActionContainer").at(1).simulate("click");
    expect(logSpy).toHaveBeenCalledWith("true");

    wrapper.find("SweetAlert .btn-danger").simulate("click");
    expect(mockDeleteArticle).toHaveBeenCalled();

    wrapper.find("SweetAlert .btn-link").simulate("click");
    expect(wrapper.exists("SweetAlert")).toBe(false);
  });
});
