import React from "react";
import { shallow } from "enzyme";
import { ReadArticlePage } from "./read_article_page.component";

describe("ReadArticlePage component", () => {
  let wrapper;
  let mockHistory;
  let mockMatch;
  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };
    mockMatch = {
      params: {
        id: "1234",
      },
    };
    const mockProps = {
      articles: [
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "1234",
          img: "Mock data",
          avatar: "Mock data",
          claps: "Mock data",
        },
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "12",
          img: "Mock data",
          avatar: "Mock data",
          claps: "Mock data",
        },
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "1345",
          img: "Mock data",
          avatar: "Mock data",
          claps: "Mock data",
        },
      ],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "1234",
        img: "Mock data",
        avatar: "Mock data",
        claps: "Mock data",
      },
      history: mockHistory,
      match: mockMatch,
    };

    wrapper = shallow(<ReadArticlePage {...mockProps} />);
  });

  it("should render ReadArticlePage component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push when Back is clicked", () => {
    wrapper.find("Back").simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
  });

  it("should render Not Found when we have an invalid route.", () => {
    const newMockProps = {
      articles: [
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "12",
          img: "Mock data",
          avatar: "Mock data",
          claps: "Mock data",
        },
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "123",
          img: "Mock data",
          avatar: "Mock data",
          claps: "Mock data",
        },
        {
          title: "Mock data",
          description: "Mock data",
          author: "Mock data",
          content: "Mock data",
          id: "1267",
          img: "Mock data",
          avatar: "Mock data",
          claps: "Mock data",
        },
      ],
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "12",
        img: "Mock data",
        avatar: "Mock data",
        claps: "Mock data",
      },
      history: mockHistory,
      match: mockMatch,
    };
    const newWrapper = shallow(<ReadArticlePage {...newMockProps} />);

    expect(newWrapper.exists("NotFound")).toBe(true);
  });
});
