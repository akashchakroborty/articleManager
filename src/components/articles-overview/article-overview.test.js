import React from "react";
import { shallow } from "enzyme";
import ArticlesOverview from "./articles-overview.component";

describe("ArticlesOverview component", () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      articles: [],
    };

    wrapper = shallow(<ArticlesOverview {...mockProps} />);
  });

  it("should render ArticlesOverview component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("if articles is empty", () => {
    it("should not render ArticlePreview component", () => {
      expect(wrapper.exists("ArticlesOverviewContainer")).toBe(true);
      expect(wrapper.find("withRouter(Connect(Component))").length).toBe(0);
    });
  });

  describe("if articles is not empty", () => {
    const newMockProps = {
      articles: [
        {
          title: "React: Event Emitter",
          claps: 64,
          description:
            "You want a grandchild component to be able to trigger its grandparent component’s method in React. You could pass the method as a prop down the family tree of components to the appropriate grandchild component (this is an example of prop drilling).",
          id: "048a4ccc-1cf1-43a5-b414-62fe68f47d75",
          readTime: "3 min read",
          date: "15-06-2020",
          author: " Lola Heffernan",
          content: "mock",
          img: "https://loremflickr.com/240/400/programming?lock=260",
          avatar: "https://loremflickr.com/100/100/profilepic?lock=866",
        },
      ],
    };

    const newWrapper = shallow(<ArticlesOverview {...newMockProps} />);

    it("should render ArticlePreview component", () => {
      expect(newWrapper.find("withRouter(Connect(Component))").length).toBe(1);
    });
  });
});
