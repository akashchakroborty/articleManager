import React from "react";
import { shallow } from "enzyme";
import { CreateOrEditPage } from "./create_or_edit_page.component";

describe("CreateOrEditPage component", () => {
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

    wrapper = shallow(<CreateOrEditPage {...mockProps} />);
  });

  it("should render CreateOrEditPage component", () => {
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
    const newWrapper = shallow(<CreateOrEditPage {...newMockProps} />);

    expect(newWrapper.exists("NotFound")).toBe(true);
  });

  it("should render Create Article when article is null.", () => {
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
      ],
      article: null,
      history: mockHistory,
      match: mockMatch,
    };
    const newWrapper = shallow(<CreateOrEditPage {...newMockProps} />);
    expect(newWrapper.exists("withRouter(Connect(CreateArticle))")).toBe(true);
  });
});
