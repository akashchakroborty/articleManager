import React from "react";
import { shallow } from "enzyme";
import { ArticleRead } from "./article-read.component";

describe("ArticleRead component", () => {
  let wrapper;
  let mockIncrementClapsInArticle;
  let useEffect;
  beforeEach(() => {
    mockIncrementClapsInArticle = jest.fn();
    useEffect = jest.spyOn(React, "useEffect").mockImplementation((f) => f());
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
      incrementClapsInArticle: mockIncrementClapsInArticle,
    };

    wrapper = shallow(<ArticleRead {...mockProps} />);
  });

  it("should render ArticleRead component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should increment claps when clap Icon is clicked", () => {
    wrapper.find("ActionContainer").simulate("click");
    expect(mockIncrementClapsInArticle).toHaveBeenCalled();
  });
});
