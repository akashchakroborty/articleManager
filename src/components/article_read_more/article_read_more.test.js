import React from "react";
import { shallow } from "enzyme";
import ArticleReadMore from "./article_read_more.component";

describe("ArticleReadMore component", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      article: {
        title: "Mock data",
        description: "Mock data",
        author: "Mock data",
        content: "Mock data",
        id: "Mock data",
        img: "Mock data",
        avatar: "Mock data",
        claps: 38,
      },
    };

    wrapper = shallow(<ArticleReadMore {...mockProps} />);
  });

  it("should render ArticleReadMore component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
